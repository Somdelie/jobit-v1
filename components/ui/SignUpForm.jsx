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

const SignUpForm = () => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})}></form>
    </Form>
  );
};

export default SignUpForm;
