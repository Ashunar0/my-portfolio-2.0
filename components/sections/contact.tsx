"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { m } from "framer-motion";
import { Loader2 } from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const clearStatus = () => {
    if (status.type) {
      setStatus({ type: null, message: "" });
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    const trimmedData = {
      name: data.name.trim(),
      email: data.email.trim(),
      message: data.message.trim(),
    };

    // Check if environment variables are set
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured. Please set up EmailJS environment variables.",
      });
      return;
    }

    // Check if we're in the browser
    if (typeof window === "undefined") {
      setStatus({
        type: "error",
        message: "This form can only be submitted in the browser.",
      });
      return;
    }

    setStatus({ type: null, message: "" });

    try {
      // Dynamically import EmailJS only on the client side
      const emailjs = (await import("@emailjs/browser")).default;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: trimmedData.name,
          from_email: trimmedData.email,
          message: trimmedData.message,
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again later or contact me directly.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="container mx-auto px-4 md:px-8 py-24 md:py-32 max-w-screen-2xl"
    >
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="mx-auto max-w-2xl space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-1">
            Contact Me
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a question or want to work together? Send me a message!
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                aria-invalid={errors.name ? "true" : "false"}
                disabled={isSubmitting}
                {...register("name", {
                  validate: (value) =>
                    value.trim().length > 0 || "Name is required",
                  onChange: clearStatus,
                })}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <Input
                id="email"
                placeholder="Your email"
                type="email"
                aria-invalid={errors.email ? "true" : "false"}
                disabled={isSubmitting}
                {...register("email", {
                  validate: (value) => {
                    const trimmed = value.trim();
                    if (!trimmed) {
                      return "Email is required";
                    }
                    return (
                      emailRegex.test(trimmed) ||
                      "Please enter a valid email address"
                    );
                  },
                  onChange: clearStatus,
                })}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message"
              className="min-h-[150px]"
              aria-invalid={errors.message ? "true" : "false"}
              disabled={isSubmitting}
              {...register("message", {
                validate: (value) =>
                  value.trim().length > 0 || "Message is required",
                onChange: clearStatus,
              })}
            />
            {errors.message && (
              <p className="text-sm text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>
          {status.type && (
            <div
              className={`p-4 rounded-lg ${
                status.type === "success"
                  ? "bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800"
                  : "bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800"
              }`}
            >
              {status.message}
            </div>
          )}
          <Button
            type="submit"
            className="w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </m.div>
    </section>
  );
}
