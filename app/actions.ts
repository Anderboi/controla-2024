"use server";

import { supabase } from "@/lib/supabase/supabase";
import { Database } from '@/types/supabase';
import { auth } from "@clerk/nextjs";
import { decode } from "base64-arraybuffer";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createContact(values: {
  name: string;
  email: string;
  phone: string;
}) {
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
  values: Database["public"]["Tables"]["projects"]["Insert"]
) {
  //? Check if input values are provided
  if (!values) {
    return { error: "No values provided" };
  }

  //? Check if user is logged in
  const { userId } = auth();
  if (!userId) {
    return { error: "User is not logged in" };
  }

  // //? Upload image to storage
  // const image = values.cover_img;
  // const imageName = image?.split("/").pop(); //TODO: fix this
  // const { data, error } = await supabase.storage
  //   .from(`projects/[${values.address_street}]`)
  //   .upload(imageName, decode(image), {
  //     contentType: "image/png",
  //   });
  // if (error) {
  //   return { error: "Unable to upload the blog image to Storage." };
  // }

  // const path = data?.path;
  // const imageUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/projects/${path}`;

  // const { data: project, error: projectError } = await supabase
  //   .from("projects")
  //   .insert({
  //     address_country: values.address_country,
  //     address_city: values.address_city,
  //     address_street: streetAddress,
  //     area: values.area,
  //     cover_img: imageUrl || '',
  //     client_id: values.client_id.value,
  //   })
  //   .select();

  // if (projectError) {
  //   return { error: "Unable to insert the blog into the database." };
  // }

  // const projectId = project?.[0]?.id;

  // revalidatePath("/");
  // redirect(`/projects/${projectId}`);
}
