"use server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function registerUser(user) {
  try {
    const newUser = await prisma.user.create({
      data: {
        ...user,
        password: await bcrypt.hash(user.password, 10),
      },
    });
    return newUser;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

async function signIn(credentials) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: credentials.email,
      },
    });

    if (!user) throw new Error("User not found!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Incorrect password!");

    return user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
}

export { registerUser, signIn };
