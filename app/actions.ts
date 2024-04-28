"use server";

import { FormDataSchema } from "@/lib/formschema";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export type FormState = {
  message: string;
};
export async function createContact(values: {
  name: string;
  email: string;
  phone: string;
}) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("users")
    .insert({
      name: values.name,
      email: values.email,
      phone: values.phone,
    })
    .select();
  return { data, error };
}
export async function createProject(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const supabase = createClient();
  const formData = Object.fromEntries(data);
  const parsed = FormDataSchema.safeParse(formData);

  //? Check if input values are provided
  if (!parsed.success) {
    return { message: "Не все поля заполнены" };
  }
  //TODO Check if user is logged in

  //* Upload projectImage if it exists
  const imageFile = parsed.data.coverImage || null;

  const { data: imageData, error: imageError } = await supabase.storage
    .from("projects")
    .upload(`project-${Date.now()}`, imageFile as File, {
      cacheControl: "3600",
      upsert: false,
    });
  const path = imageData?.path;
  const projectCoverUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/projects/${path}`;

  // //? Если не удалось загрузить изображение, которое не обязательное к загрузке
  if (imageError) {
    return { message: "Не удалось загрузить изображение" };
  }
  const { data: projectData, error: projectError } = await supabase
    .from("designprojects")
    .insert([
      {
        user_id: "userId",
        address_country: parsed.data.address_country,
        address_city: parsed.data.address_city,
        address_street: `${parsed.data.street} ${parsed.data.house}/${parsed.data.room}`,
        cover_img: projectCoverUrl,
        contract_id: parsed.data.contractId,
        client_id: "userId",
      },
    ])
    .select()
    .single();

  if (projectError) {
    return { message: "Can't retrieve designproject data" };
  }

  if (projectData) {
    const { error: infoError } = await supabase.from("project_info").insert([
      {
        project_id: projectData.project_id,
        purpose: parsed.data.purpose,
        storeys: parsed.data.storeys,
        residing: parsed.data.residing,
        stage: 1,
        area: parsed.data.area,
      },
    ]);
    if (infoError) {
      return { message: "Can't retrieve project info data" };
    }
  }

  revalidatePath("/");
  redirect(`/projects/${projectData.project_id}`);
}

//? AUTH BLOCK
export async function signIn(formData: FormData) {
  "use server";
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log(error.message);

    return redirect("/login?message=Could not authenticate user");
  }
  return redirect("/");
}

export async function signInWithOAuth() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo: "/auth/callback",
    },
  });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
}

export async function signUp(formData: FormData) {
  "use server";

  const origin = headers().get("origin");
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.log(error.message);
    return redirect("/login?message=Could not authenticate user");
  }

  return redirect("/login?message=Check email to continue sign in process");
}
export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
