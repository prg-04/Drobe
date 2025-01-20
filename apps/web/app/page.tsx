import {
  BestSeller,
  Categories,
  Deals,
  Hero,
  InstaStories,
  Testimonial,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <BestSeller />
      <Deals />
      <Testimonial />
      <InstaStories />
    </main>
  );
}
