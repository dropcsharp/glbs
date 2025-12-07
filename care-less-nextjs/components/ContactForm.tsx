"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  firstName: z.string().min(1, "Förnamn är obligatoriskt"),
  lastName: z.string().optional(),
  email: z.string().email("Ange en giltig e-postadress"),
  phone: z.string().optional(),
  wantsCallback: z.enum(["ja", "nej"], {
    message: "Välj ett alternativ",
  }),
  message: z.string().optional(),
  service: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  preselectedService?: string;
  className?: string;
}

export default function ContactForm({
  preselectedService,
  className,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: preselectedService,
      wantsCallback: "ja",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-6", className)}
    >
      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          <p className="font-medium">Tack för ditt meddelande!</p>
          <p className="text-sm mt-1">Vi återkommer till dig så snart som möjligt.</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          <p className="font-medium">Något gick fel</p>
          <p className="text-sm mt-1">Försök igen eller kontakta oss via e-post.</p>
        </div>
      )}

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-body font-medium mb-2">
            Förnamn <span className="text-red-500">*</span>
          </label>
          <input
            {...register("firstName")}
            type="text"
            id="firstName"
            className={cn("input", errors.firstName && "input-error")}
            placeholder="Ditt förnamn"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-body font-medium mb-2">
            Efternamn
          </label>
          <input
            {...register("lastName")}
            type="text"
            id="lastName"
            className="input"
            placeholder="Ditt efternamn"
          />
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-body font-medium mb-2">
            E-post <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className={cn("input", errors.email && "input-error")}
            placeholder="din@email.se"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-body font-medium mb-2">
            Telefon
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            className="input"
            placeholder="070 123 45 67"
          />
        </div>
      </div>

      {/* Callback Radio */}
      <div>
        <fieldset>
          <legend className="block text-body font-medium mb-2">
            Vill du bli uppringd? <span className="text-red-500">*</span>
          </legend>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                {...register("wantsCallback")}
                type="radio"
                value="ja"
                className="w-4 h-4 text-[#2969FF] focus:ring-[#2969FF]"
              />
              <span>Ja</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                {...register("wantsCallback")}
                type="radio"
                value="nej"
                className="w-4 h-4 text-[#2969FF] focus:ring-[#2969FF]"
              />
              <span>Nej</span>
            </label>
          </div>
          {errors.wantsCallback && (
            <p className="mt-1 text-sm text-red-500">
              {errors.wantsCallback.message}
            </p>
          )}
        </fieldset>
      </div>

      {/* Service Selection (if provided) */}
      {preselectedService && (
        <input type="hidden" {...register("service")} value={preselectedService} />
      )}

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-body font-medium mb-2">
          Meddelande
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          className="input resize-y"
          placeholder="Berätta gärna vad du behöver hjälp med..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "btn btn-primary w-full md:w-auto",
          isSubmitting && "opacity-70 cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Skickar...
          </span>
        ) : (
          "Skicka"
        )}
      </button>
    </form>
  );
}
