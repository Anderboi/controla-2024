// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Database } from "@/types/supabase";
import { createClient } from '@/lib/supabase/server';

const getProjects = async (): Promise<
  Database["public"]["Tables"]["projects"]["Row"][]
> => {
  const supabase = createClient();

  // const { data: sessionData, error: sessionError } =
  //   await supabase.auth.getSession();

  // if (sessionError) {
  //   console.log(sessionError.message);

  //   return [];
  // }

  const { data, error } = await supabase
    .from("projects")
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
};

export default getProjects;
