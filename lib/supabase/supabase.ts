import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getProjects(): Promise<Database["public"]["Tables"]["designprojects"]["Row"][]> {
  // const { data: sessionData, error: sessionError } =
  //   await supabase.auth.getSession();

  // if (sessionError) {
  //   console.log(sessionError.message);

  //   return [];
  // }

  const { data, error } = await supabase
    .from("designprojects")
    .select("*")
    // .eq("user_id", sessionData.session?.user.id)
    // .or(
    //   `user_id.eq.${sessionData.session?.user.id},client_id.eq.${sessionData.session?.user.id}`
    // )
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
}

export async function getProjectsByTitle(
  title: string
): Promise<Database["public"]["Tables"]["designprojects"]["Row"][]> {
  if (!title) {
    const allProjects = await getProjects();
    return allProjects;
  }

  // const { data: sessionData, error: sessionError } =
  //   await supabase.auth.getSession();

  // if (sessionError) {
  //   console.log(sessionError.message);

  //   return [];
  // }

  const { data, error } = await supabase
    .from("designprojects")
    .select()
    // .eq("user_id", sessionData.session?.user.id)
    // .or(
    //   `user_id.eq.${sessionData.session?.user.id},client_id.eq.${sessionData.session?.user.id}`
    // )
    .ilike("address_street", `%${title}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
}

export async function getCurrentProject (
  id: number
): Promise<Database["public"]["Tables"]["designprojects"]["Row"]> {

  const { data, error } = await supabase
    .from("designprojects")
    .select("*")
    .eq("project_id", id)
    .single();

  if (error) {
    console.log(error.message);
  }

  return data as any;
};

export async function getContacts (): Promise<any[]> {


  // const { data: sessionData, error: sessionError } =
  //   await supabase.auth.getSession();

  // if (sessionError) {
  //   console.log(sessionError.message);

  //   return [];
  // }

  const { data, error } = await supabase.from("contacts").select("contact(*)");
  // .eq("user_id", sessionData.session?.user.id);

  if (error) {
    console.log(error);
    return [];
  }
  if (!data) {
    return [];
  }

  // return data as any || []
  return data.map((item) => ({
    ...item.contact,
  }));
};

export async function getContactsByTitle (
  title: string
): Promise<Database["public"]["Tables"]["users"]["Row"][]> {

  if (!title) {
    const allContacts = await getContacts();
    return allContacts;
  }

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .ilike("full_name", `%${title}%`)
    .order("full_name", { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export async function getUserById (
  userId: string | null
): Promise<Database["public"]["Tables"]["users"]["Row"]["full_name"]> {

  const { data, error } = await supabase
    .from("users")
    .select("full_name")
    .eq("id", userId)
    .single();

  if (error) {
    console.log(error);
  }
  if (!data) {
    console.log("no data");
    return "";
  }

  return data.full_name as any;
};
