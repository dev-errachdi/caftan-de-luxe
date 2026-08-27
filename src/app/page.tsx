import Hero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import MoroccanCraftsmanship from "@/components/home/MoroccanCraftsmanship";
import LuxuryDetails from "@/components/home/LuxuryDetails";
import InstagramLookbook from "@/components/home/InstagramLookbook";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <FeaturedCollection />
      <MoroccanCraftsmanship />
      <LuxuryDetails />
      <InstagramLookbook />
    </>
  );
}