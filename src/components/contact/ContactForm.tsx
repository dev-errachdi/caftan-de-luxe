"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }
    if (!formData.message.trim())
      newErrors.message = "Le message est requis";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call - replace with real API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSuccess(false), 5000);
  };

  const inputStyles =
    "w-full px-4 py-3 border border-gray-300 bg-white text-brand-deep-black text-body-md focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Success Message */}
      {isSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 text-body-sm">
          Merci ! Votre message a été envoyé avec succès. Nous vous
          répondrons dans les plus brefs délais.
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-caption tracking-[0.15em] uppercase text-gray-500 mb-2"
        >
          Nom complet *
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className={cn(inputStyles, errors.name && "border-red-400")}
          placeholder="Votre nom"
        />
        {errors.name && (
          <p className="mt-1 text-body-sm text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-caption tracking-[0.15em] uppercase text-gray-500 mb-2"
          >
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className={inputStyles}
            placeholder="+212 600 000 000"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-caption tracking-[0.15em] uppercase text-gray-500 mb-2"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={cn(inputStyles, errors.email && "border-red-400")}
            placeholder="votre@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-body-sm text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-caption tracking-[0.15em] uppercase text-gray-500 mb-2"
        >
          Sujet
        </label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className={inputStyles}
        >
          <option value="">Sélectionnez un sujet</option>
          <option value="commande">Nouvelle commande</option>
          <option value="information">Demande d&apos;information</option>
          <option value="sur-mesure">Création sur mesure</option>
          <option value="rdv">Prise de rendez-vous</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-caption tracking-[0.15em] uppercase text-gray-500 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className={cn(
            inputStyles,
            "resize-none",
            errors.message && "border-red-400"
          )}
          placeholder="Votre message..."
        />
        {errors.message && (
          <p className="mt-1 text-body-sm text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </form>
  );
}