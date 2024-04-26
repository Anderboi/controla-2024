import React from "react";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LoginBlock from '@/components/loginBlock';

const LoginPage = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/");
  }

  return (
    <LoginBlock/>
  );
};

export default LoginPage;
