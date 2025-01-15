import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Hero from "@/components/home/Hero";



export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
