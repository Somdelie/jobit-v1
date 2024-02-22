"use server";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import prisma from "@/lib/dbConnect";
import { getUserByEmail } from "./user";

export const register = async (values) => {
  const validaTedFields = RegisterSchema.safeParse(values);

  if (!validaTedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { email, firstName, lastName, phone, password } = validaTedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      phone,
      password: hashedPassword,
    },
  });

  //TODO: Send email token

  return { success: "User created " };
};
