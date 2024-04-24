"use client";

import React, { useState } from "react";
import { FormDataSchema } from "@/lib/formschema";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { DatePickerDemo } from "./ui/datepicker";
import { useAuth } from "@clerk/nextjs";
import { createProject } from "@/app/actions";
import { toast } from "sonner";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClerkSupabaseClient } from '@/lib/supabase/client';

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
  // {
  //   id: "step 1",
  //   name: "Client information",
  //   fields: [
  //     "firstName",
  //     "lastName",
  //     "middleName",
  //     "email",
  //     "phoneNumber",
  //     "gender",
  //   ],
  // },
  {
    id: "step 1",
    name: "Project information",
    fields: ["pojectName", "contractId", "coverImageUrl"],
  },
  {
    id: "step 2",
    name: "Project address",
    fields: ["country", "city", "street", "house", "room"],
  },
  {
    id: "step 3",
    name: "Project information",
    fields: [
      "area",
      "storeys",
      "purpose",
      "colivers",
      "estBudget",
      "startDate",
      "estFinalDate",
    ],
  },
];
const CreateProjectForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { userId, sessionId, getToken } = useAuth();
  const supabase = createClerkSupabaseClient()

  
  // const user = useAuth();

  const form = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      // firstName: "",
      // lastName: "",
      // middleName: "",
      // email: "",
      // phoneNumber: "",
      // gender: "",
      country: "",
      city: "",
      street: "",
      house: 0,
      room: 0,
      area: 1,
      storeys: 1,
      purpose: "",
      colivers: 0,
      estBudget: 0,
      startDate: new Date(),
      estFinalDate: new Date(),
      projectName: "",
      contractId: "",
      coverImageUrl: null,
    },
  });

  type FieldName = keyof Inputs;

  const fileRef = form.register("coverImageUrl");
  const purposeRef = form.register("purpose");

  const nextStep = async () => {
    const fields = steps[activeStep].fields;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    if (activeStep < steps.length - 1) {
      console.log("nextstep");

      setActiveStep((activeStep) => activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    console.log(userId);
    
    if(!userId) {
      return {error: "Please sign In"}
    }

    //* Upload projectImage if it exists
    const imageFile = values.coverImageUrl?.[0] || null;

    const { data: imageData, error: imageError } = await supabase.storage
      .from("projects")
      .upload(`project-${Date.now()}`, imageFile, {
        cacheControl: "3600",
        upsert: false,
      });

    const path = imageData?.path;
    const projectCoverUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/projects/${path}`;

    // //? Если не удалось загрузить изображение, которое не обязательное к загрузке
    if (imageError) {
      return toast.error("Не удалось загрузить изображение");
    }

    const streetAddress = `${values.street} ${values.house} / ${values.room}`;

    const { data: projectData, error: projectError } = await supabase
      .from("designprojects")
      .insert({
        user_id: userId,
        address_country: values.country,
        address_city: values.city,
        address_street: streetAddress,
        cover_img: projectCoverUrl,
        contract_id: values.contractId,
        client_id: userId, //TODO change this 
      })
      .select()
      .single();

    if (projectError) {
      return toast.error("Не удалось создать проект");
    }

    const projectId = projectData?.project_id;

    if (projectData) {
      const { error: infoError } = await supabase.from("project_info").insert({
        project_id: projectId,
        purpose: values.purpose,
        storeys: values.storeys,
        residing: values.colivers,
        stage: 1,
        area: values.area,
      });
    }

    toast.success("Проект создан");
    revalidatePath("/");
    redirect(`/projects/${projectId}`);
  };



  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {activeStep === 0 && (
            <section className="space-y-4">
              <h2 className="max-w-[900px] pb-2 text-2xl font-bold">
                Информация о проекте
              </h2>
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Название проекта*</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    {/* <FormDescription></FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contractId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Номер договора*</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    {/* <FormDescription></FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="coverImageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Обложка проекта*</FormLabel>
                    <FormControl>
                      <Input
                        {...fileRef}
                        type="file"
                        accept="image/png, image/jpeg"
                        id="dropzone-file"
                        onChange={(event) => {
                          field.onChange(event.target?.files?.[0] ?? undefined);
                        }}
                      />
                    </FormControl>
                    {/* <FormDescription></FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
          )}
          {activeStep === 1 && (
            <article className="space-y-4">
              <h2 className="max-w-[900px] pb-2 text-2xl font-bold">
                Адрес объекта
              </h2>

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Страна</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    {/* <FormDescription></FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Город</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    {/* <FormDescription></FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Улица</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex w-full space-x-2">
                <FormField
                  control={form.control}
                  name="house"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Дом</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  // control={form.control}
                  name="room"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Квартира</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                    </FormItem>
                  )}
                />
              </div>
            </article>
          )}
          {activeStep === 2 && (
            <article className="space-y-4">
              <h2 className="max-w-[900px] pb-2 text-xl font-bold">
                Общая информация
              </h2>
              <div className="flex space-x-2">
                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Площадь</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="storeys"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Этажность</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Назначение</FormLabel>
                    <FormControl>
                      <Select {...purposeRef}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="-" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="living">Жилое</SelectItem>
                          <SelectItem value="commercial">
                            Коммерческое
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="estBudget"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Приблизительный бюджет на ремонт</FormLabel>
                    <Input type="number" {...field} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="colivers"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Количество проживающих</FormLabel>
                    <Input type="number" {...field} />
                  </FormItem>
                )}
              />
              <div className="w-full sm:flex sm:space-x-2">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Начало</FormLabel>
                      <DatePickerDemo />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Завершение</FormLabel>
                      <DatePickerDemo />
                    </FormItem>
                  )}
                />
              </div>
            </article>
          )}

          <div className="flex justify-between w-full">
            <Button variant={"ghost"} onClick={() => prevStep()}>
              Назад
            </Button>
            {activeStep < steps.length - 1 ? (
              <div>
                {/* <Button
                  variant={"ghost"}
                  onClick={() => setActiveStep(steps.length - 1)}
                >
                  Пропустить
                </Button> */}
                <Button onClick={nextStep}>Далее</Button>
              </div>
            ) : (
              <Button
                // onSubmit={form.handleSubmit(onSubmit)}
                type="submit"
                // className="w-full"
              >
                Создать
              </Button>
            )}
          </div>
        </form>
      </Form>
    </section>
  );
};

export default CreateProjectForm;
