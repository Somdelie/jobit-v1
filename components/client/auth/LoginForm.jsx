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
import { LoginSchema } from "@/schemas";
import FormError from "@/components/ui/FormError";
import FormSuccess from "@/components/ui/FormSuccess";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";

export function LoginForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, startLoading] = useTransition("");
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values) {
    setError("");
    setSuccess("");
    startLoading(() => {
      login(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
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
          {isLoading ? "Please wait" : "Login"}
        </Button>
      </form>
    </Form>
  );
}
