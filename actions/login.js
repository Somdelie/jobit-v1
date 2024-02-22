"use server";

import { LoginSchema } from "@/schemas";

export const login = async (values) => {
  const validaTedFields = LoginSchema.safeParse(values);

  if (!validaTedFields.success) {
    return { error: "Invalid Fields" };
  }

  return { success: "Email sent!" };
};
