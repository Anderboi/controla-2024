import { createClient } from '@/lib/supabase/server';

const getContacts = async (): Promise<any[]> => {
  const supabase = createClient();

  // const { data: sessionData, error: sessionError } =
  //   await supabase.auth.getSession();

  // if (sessionError) {
  //   console.log(sessionError.message);

  //   return [];
  // }

  const { data, error } = await supabase
    .from("contacts")
    .select("contact(*)")
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

export default getContacts;
