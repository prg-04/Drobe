import {
  BestSeller,
  Categories,
  Deals,
  Hero,
  InstaStories,
  Testimonial,
} from "@/components/home";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <BestSeller />
      <Deals />
      <Testimonial />
      <InstaStories />
      <Footer />
    </main>
  );
}
