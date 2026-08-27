import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { aboutContent } from "@/data/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: `À Propos | ${siteConfig.name}`,
  description: `Découvrez l'histoire et les valeurs de ${siteConfig.name}, maison de mode marocaine spécialisée dans les caftans haut de gamme.`,
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/hero/hero-secondary.jpg"
          alt="About Caftan de Luxe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <p className="font-arabic text-heading-md text-brand-gold mb-4" dir="rtl">
            {aboutContent.hero.titleAr}
          </p>
          <h1 className="font-serif text-display-sm md:text-display-md text-white tracking-wide">
            {aboutContent.hero.title}
          </h1>
          <p className="mt-4 text-body-lg text-white/70">
            {aboutContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-section-y bg-brand-ivory">
        <Container className="max-w-4xl">
          <SectionHeading
            title={aboutContent.story.title}
            titleAr={aboutContent.story.titleAr}
          />
          <div className="space-y-6">
            {aboutContent.story.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-body-lg text-gray-600 leading-relaxed text-center"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-section-y bg-white">
        <Container>
          <SectionHeading
            title="Nos Valeurs"
            titleAr="قيمنا"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <span className="text-4xl text-brand-gold mb-4 block">
                  {value.icon}
                </span>
                <h3 className="font-serif text-heading-md text-brand-deep-black mb-2">
                  {value.title}
                </h3>
                <p
                  className="font-arabic text-body-sm text-brand-gold mb-3"
                  dir="rtl"
                >
                  {value.titleAr}
                </p>
                <p className="text-body-sm text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-section-y bg-brand-deep-black">
        <Container>
          <SectionHeading
            title={aboutContent.craftsmanship.title}
            titleAr={aboutContent.craftsmanship.titleAr}
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {aboutContent.craftsmanship.features.map((feature, index) => (
              <div
                key={index}
                className="border border-white/10 p-8 hover:border-brand-gold/30 transition-colors duration-400"
              >
                <h3 className="font-serif text-heading-md text-white mb-2">
                  {feature.name}
                </h3>
                <p
                  className="font-arabic text-body-sm text-brand-gold mb-4"
                  dir="rtl"
                >
                  {feature.nameAr}
                </p>
                <p className="text-white/60 text-body-md">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}