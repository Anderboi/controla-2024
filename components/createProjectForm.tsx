"use client";

import React, { useState, useRef } from "react";
import { FormDataSchema } from "@/lib/formschema";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useFormState, useFormStatus } from "react-dom";
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
import { createProject } from "@/app/actions";
import { toast } from "sonner";

export type Inputs = z.infer<typeof FormDataSchema>;

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
    fields: ["pojectName", "contractId", "coverImage"],
  },
  {
    id: "step 2",
    name: "Project address",
    fields: ["address_country", "address_city", "street", "house", "room"],
  },
  {
    id: "step 3",
    name: "Project information",
    fields: [
      "area",
      "storeys",
      "purpose",
      "residing",
      "estBudget",
      "startDate",
      "estFinalDate",
    ],
  },
];
const CreateProjectForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [state, formAction] = useFormState(createProject, { message: "" });
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);

  // const user = useAuth();

  const form = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      address_country: "",
      address_city: "",
      street: "",
      house: 0,
      room: 0,
      area: 1,
      storeys: 1,
      purpose: "",
      residing: 0,
      estBudget: 0,
      startDate: new Date(),
      estFinalDate: new Date(),
      projectName: "",
      contractId: "",
      coverImage: null,
    },
  });

  type FieldName = keyof Inputs;

  const fileRef = form.register("coverImage");
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

  // const onSubmit: SubmitHandler<Inputs> = async (values) => {
  //   const { error } = await createProject(values);
  //   if (error) {
  //     toast.error(error);
  //   }
  //   toast.success("Проект создан");
  // };

  // const onSubmit: SubmitHandler<Inputs> = async ({
  //   address_city,
  //   address_country,
  //   area,
  //   storeys,
  //   street,
  //   contractId,
  //   coverImage,
  //   estBudget,
  //   estFinalDate,
  //   house,
  //   room,
  //   startDate,
  //   projectName,
  //   purpose,
  //   residing,
  // }) => {
  //   const imageFile = coverImage || null;

  //   const { error } = await createProject({
  //     address_city,
  //     address_country,
  //     street: `${street} ${house}/${room}`,
  //     area,
  //     contractId: contractId || '',
  //     coverImage: imageFile,
  //     estBudget: Number(estBudget),
  //     estFinalDate: estFinalDate,
  //     startDate: startDate,
  //     projectName,
  //     purpose,
  //     storeys,
  //     residing,
  //   });
  //   if (error) {
  //     toast.error(error);
  //   } else {
  //     toast.success("Проект создан");
  //   }
  // };

  // async function onSubmit(data:Inputs){

  //   createProject(data)
  // }
  // async function action(formData: FormData) {

  //   const imageFile = (formData.get("coverImage") as File) || null;

  //   const { message } = await createProject(formData);
  //   if (message) {
  //     toast.error(message);
  //   } else {
  //     toast.success("Проект создан");
  //   }
  // }

  return (
    <section className="overflow-y-scroll">
      <Form {...form}>
        {state?.message !== '' && <FormMessage className='text-red-600'>{state.message}</FormMessage>}
        <form
          onSubmit={() => formRef.current?.submit()}
          action={formAction}
          className="space-y-4 "
        >
          {activeStep === 0 && (
          <article className="space-y-4 ">
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
              name="coverImage"
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
            </article>
          )}
          {activeStep === 1 && (
            <article className="space-y-4">
            <h2 className="max-w-[900px] pb-2 text-2xl font-bold">
              Адрес объекта
            </h2>

            <FormField
              control={form.control}
              name="address_country"
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
              name="address_city"
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
                control={form.control}
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
                        <SelectItem value="commercial">Коммерческое</SelectItem>
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
              name="residing"
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
            {/* </article> */}
          </article>
          )}

          <div className="flex justify-between w-full">
            <Button variant={"ghost"} onClick={() => prevStep()}>
              Назад
            </Button>
            {activeStep < steps.length - 1 ? (
              <div>
                <Button onClick={nextStep}>Далее</Button>
              </div>
            ) : (
            <Button type="submit">{pending ? "..." : "Создать"}</Button>
            )}
          </div>
        </form>
      </Form>
    </section>
  );
};

export default CreateProjectForm;
