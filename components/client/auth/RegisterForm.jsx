"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import { RegisterSchema } from "@/schemas";
import FormError from "@/components/ui/FormError";
import FormSuccess from "@/components/ui/FormSuccess";
import { useState, useTransition } from "react";
import { register } from "@/actions/register";

export function RegisterForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, startLoading] = useTransition("");
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      password: "",
    },
  });

  function onSubmit(values) {
    setError("");
    setSuccess("");
    startLoading(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="gap-4 grid sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-200">first Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="somdelie@gmail.com"
                    type="text"
                    disabled={isLoading}
                    {...field}
                    className="border-gray-300 dark:border-gray-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-200">Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="somdelie@gmail.com"
                    type="text"
                    disabled={isLoading}
                    {...field}
                    className="border-gray-300 dark:border-gray-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-200">Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="somdelie@gmail.com"
                    type="email"
                    disabled={isLoading}
                    {...field}
                    className="border-gray-300 dark:border-gray-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-200">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="somdelie@gmail.com"
                    type="tel"
                    disabled={isLoading}
                    {...field}
                    className="border-gray-300 dark:border-gray-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-200">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="somdelie@gmail.com"
                    type="password"
                    disabled={isLoading}
                    {...field}
                    className="border-gray-300 dark:border-gray-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button
          disabled={isLoading}
          type="submit"
          className="bg-gray-900 text-white w-1/2 rounded hover:bg-gray-800"
        >
          {isLoading ? "Please wait" : "Create an Account"}
        </Button>
      </form>
    </Form>
  );
}
