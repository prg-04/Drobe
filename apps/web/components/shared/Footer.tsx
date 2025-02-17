import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/Logo.png";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {};

const footerLinks = [
  {
    title: "Information",
    links: [
      { title: "My Account", link: "/account" },
      { title: "Login", link: "/login" },
      { title: "My Cart", link: "/cart" },
      { title: "My Wishlist", link: "/wishlist" },
      { title: "Checkout", link: "/checkout" },
    ],
  },
  {
    title: "Service",
    links: [
      { title: "About Us", link: "/about" },
      { title: "Careers", link: "/careers" },
      { title: "Delivery Information", link: "/delivery" },
      { title: "Privacy Policy", link: "/privacy" },
      { title: "Terms & Conditions", link: "/terms" },
    ],
  },
];

const Footer = (props: Props) => {
  return (
    <footer className="bg-background2 flex px-6 items-start py-12 gap-4 justify-around">
      <div className="flex flex-col items-start justify-between px-10 h-full gap-4 ">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Drobe Logo"
            width={140}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-6 h-6 text-white" />
          <p className="text-white">+91 9876543210</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Mail className="w-6 h-6 text-white" />
          <p className="text-white">info@drobe.com</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-8 h-8 text-white" />
          <p className="text-white">
            123, Main Street,
            <br /> City, Country
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 w-1/3   ">
        {footerLinks.map((link) => (
          <div key={link.title}>
            <h3 className="text-2xl  font-bold text-white">{link.title}</h3>
            <div className="flex flex-col mt-2 items-start justify-center gap-2">
              {link.links.map((link) => (
                <Link key={link.title} href={link.link}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start justify-center gap-2 w-1/3 ">
        <h3 className="text-2xl font-bold text-white">Subscribe</h3>
        <p className="text-white">
          Subscribe to our newsletter to stay updated on our latest products and
          promotions.
        </p>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
          <Input
            type="email"
            placeholder="Enter your email"
            className="pl-12 pr-12 py-6 rounded-full"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
