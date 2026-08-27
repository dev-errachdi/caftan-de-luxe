import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { generateGeneralWhatsAppURL } from "@/lib/whatsapp";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: `Contactez ${siteConfig.name} pour toute demande d'information, commande de caftans ou création sur mesure.`,
};

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-28 pb-section-y">
      <Container>
        <SectionHeading
          title="Contactez-Nous"
          titleAr="اتصلوا بنا"
          subtitle="Nous serions ravis de vous accompagner dans le choix de votre caftan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          {/* Contact Form */}
          <div>
            <h3 className="font-serif text-heading-lg text-brand-deep-black mb-6">
              Envoyez-nous un message
            </h3>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="font-serif text-heading-lg text-brand-deep-black mb-6">
              Nos coordonnées
            </h3>

            {/* WhatsApp */}
            <div className="border border-gray-200 p-6">
              <h4 className="text-caption tracking-[0.15em] uppercase text-brand-gold mb-3">
                WhatsApp
              </h4>
              <p className="text-body-md text-gray-600 mb-4">
                Le moyen le plus rapide pour nous contacter et passer commande.
              </p>
              <Button
                href={generateGeneralWhatsAppURL()}
                external
                variant="whatsapp"
                size="md"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Discuter sur WhatsApp
              </Button>
            </div>

            {/* Instagram */}
            <div className="border border-gray-200 p-6">
              <h4 className="text-caption tracking-[0.15em] uppercase text-brand-gold mb-3">
                Instagram
              </h4>
              <p className="text-body-md text-gray-600 mb-2">
                Suivez nos dernières créations et collections.
              </p>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-brand-soft-gold text-body-md transition-colors"
              >
                @kaftanelfakhama
              </a>
            </div>

            {/* Email */}
            {siteConfig.contact.email && (
              <div className="border border-gray-200 p-6">
                <h4 className="text-caption tracking-[0.15em] uppercase text-brand-gold mb-3">
                  Email
                </h4>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-body-md text-gray-600 hover:text-brand-gold transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            )}

            {/* Location */}
            <div className="border border-gray-200 p-6">
              <h4 className="text-caption tracking-[0.15em] uppercase text-brand-gold mb-3">
                Localisation
              </h4>
              <p className="text-body-md text-gray-600">
                {siteConfig.contact.city}, {siteConfig.contact.country}
              </p>
              {siteConfig.contact.workingHours && (
                <p className="text-body-sm text-gray-400 mt-2">
                  {siteConfig.contact.workingHours}
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}