import { z } from "zod";

export const FormDataSchema = z.object({
  //? Project Info
  projectName: z.string().trim().optional(),
  contractId: z.string().trim().optional(),
  coverImage:
    typeof window === "undefined"
      ? z.any().optional()
      : z.instanceof(FileList).optional(),
  //? Client Info
  // firstName: z.string().min(3, "Имя должно содержать как минимум 3 буквы"),
  // lastName: z.string().min(3, "Фамилия должна содержать как минимум 3 буквы"),
  // middleName: z
  //   .string()
  //   .min(3, "Отчество должно содержать как минимум 3 буквы")
  //   .optional(),
  // email: z
  //   .string()
  //   .min(1, "Пожалуйста, введите свою почту")
  //   .email("Неправильный почтовый адрес"),
  // phoneNumber: z.string().optional(),
  // gender: z.any().optional(),

  //? Project Address
  address_country: z.string().trim(),
  address_city: z.string().trim(),
  street: z.string().trim(),
  house: z.coerce.number().optional(),
  room: z.coerce.number().optional(),

  // ? Project Info
  purpose: z.string().optional(),
  area: z.coerce.number().int().gte(1, "Площадь должна быть больше нуля"),
  residing: z.coerce.number().int().positive().optional(),
  storeys: z.coerce.number().int().positive(),
  estBudget: z.coerce.number().int().positive().optional(),
  startDate: z.date().optional(),
  estFinalDate: z.date().optional(),
});

export type formSchema = {

}


