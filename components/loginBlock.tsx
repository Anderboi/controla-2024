"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { emailLogin, signup } from "@/app/actions";
import { SubmitButton } from "./ui/submitButton";
import { signIn, signInWithOAuth, signUp } from "@/app/actions";

function LoginBlock({ searchParams }: { searchParams?: { message: string } }) {
  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Card className=" w-[360px] h-full m-auto">
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <CardHeader>
          <CardTitle>Авторизация</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Электронная почта</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 items-center">
          <SubmitButton
            className="w-full"
            formAction={signIn}
            pendingText="Авторизация..."
          >
            Войти
          </SubmitButton>

          <SubmitButton
            variant={"outline"}
            className="w-full"
            formAction={signUp}
            pendingText="Регистрация..."
          >
            Зарегистрироваться
          </SubmitButton>
          <SubmitButton
            variant={"outline"}
            className="w-full"
            formAction={signInWithOAuth}
            pendingText="Регистрация..."
          >
            Google
          </SubmitButton>
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}

export default LoginBlock;
