import { getContactsByTitle } from "@/lib/supabase/supabase";
import React from "react";

const ContactsGallary = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const contacts = await getContactsByTitle(query);

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {contacts.map((contact) => (
        <div>{contact.full_name}</div>
      ))}
    </section>
  );
};

export default ContactsGallary;
