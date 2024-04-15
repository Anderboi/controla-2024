import { Database } from "@/types/supabase";
import { createClient } from '@/lib/supabase/server';
import getProjects from './getProjects';

const getProjectsByTitle = async (
  title: string
): Promise<Database["public"]["Tables"]["projects"]["Row"][]> => {
  const supabase = createClient();

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
    .from("projects")
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
};

export default getProjectsByTitle;
