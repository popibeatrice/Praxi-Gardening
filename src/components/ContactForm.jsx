import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";

const formSchema = z.object({
  firstName: z
    .string({
      message: "Please enter a valid first name!",
    })
    .min(2, {
      message: "First name must be at least 2 characters!",
    })
    .max(250, {
      message: "First name must be less than 250 characters!",
    }),
  lastName: z
    .string({
      message: "Please enter a valid last name!",
    })
    .min(2, {
      message: "Last name must be at least 2 characters!",
    })
    .max(250, {
      message: "Last name must be less than 250 characters!",
    }),
  email: z
    .string({
      message: "Please enter a valid email address!",
    })
    .email({
      message: "Please enter a valid email address!",
    })
    .max(250, {
      message: "Email must be less than 250 characters!",
    }),
  message: z
    .string({
      message: "Please enter a valid message!",
    })
    .min(2, {
      message: "Message must be at least 2 characters!",
    })
    .max(500, {
      message: "Message must be less than 500 characters!",
    }),
});

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        body: JSON.stringify({
          access_key: "b437479c-c908-4d3e-83f7-f4552ebe5bf1",
          ...values,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const json = await res.json();

      if (json.success) {
        form.reset();
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
      } else {
        setError(json.message);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-8 "
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your first name..." {...field} />
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
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your last name..." {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="h-auto w-full max-w-[150px] self-center px-4 py-2 text-lg font-semibold  2xl:px-6 2xl:py-2.5 2xl:text-xl "
            disabled={loading}
          >
            Submit
          </Button>
          {error && <FormMessage>{error}</FormMessage>}
        </form>
      </Form>
      <Toaster />
    </>
  );
}

export default ContactForm;
