import validator from "validator";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  firstName: z.string().min(3, {
    message: "First name should atleast have 3 characters or more ",
  }),
  lastName: z.string().min(3, {
    message: "Last name should atleast have 3 characters or more ",
  }),
  phone: z.string().refine(validator.isMobilePhone),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});
