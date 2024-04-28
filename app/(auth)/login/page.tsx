import React from "react";
import LoginBlock from "@/components/loginBlock";

export default function Login({searchParams}:{
  searchParams?: {message: string}}) {


  return <LoginBlock searchParams={searchParams}/>;
}
