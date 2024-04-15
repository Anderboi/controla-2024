import { Database } from "@/types/supabase";
import getContacts from "./getContacts";
import { createClient } from '@/lib/supabase/server';

const getContactsByTitle = async (
  title: string
): Promise<Database["public"]["Tables"]["users"]["Row"][]> => {
  const supabase = createClient();

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

export default getContactsByTitle;
