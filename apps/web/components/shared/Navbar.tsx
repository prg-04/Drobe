"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navlinks } from "@/constants";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import logo from "@/public/Logo.png";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isLoggedIn = false; // to replace later with actual auth state

  // Handle scroll event to toggle background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
        isScrolled ? "bg-background2 shadow-lg" : "bg-transparent/20"
      )}>
      <div className="flex items-center justify-between px-4 ">
        {/* Logo */}
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

        {/* Navigation Links */}
        <NavigationMenu>
          <NavigationMenuList>
            {navlinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                {link.links && link.links.length > 0 ? (
                  <>
                    <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-5 lg:w-[900px]">
                        {link.links.map((item) => (
                          <li key={item.href}>
                            <div className="block space-y-1 rounded-md p-3">
                              <div className="text-md font-medium leading-none text-white">
                                {item.title}
                              </div>
                              {item.items && (
                                <ul className="mt-2 space-y-2">
                                  {item.items.map((subItem) => {
                                    const subItemHref = `${item.href}/${subItem
                                      .toLowerCase()
                                      .replace(/[^a-z0-9]+/g, "-")
                                      .replace(/^-+|-+$/g, "")
                                      .replace(/-+/g, "-")}`;

                                    return (
                                      <li key={subItem}>
                                        <Link
                                          href={subItemHref}
                                          className="block text-sm text-muted-foreground hover:text-accent-foreground hover:underline">
                                          {subItem}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}>
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side: Icons and Login */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center gap-2">
            {showSearch ? (
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] h-8"
                autoFocus
                onBlur={() => setShowSearch(false)}
              />
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 hover:bg-accent rounded-full">
                <Search className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Wishlist */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="p-2 hover:bg-accent rounded-full relative">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  0
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
              <div className="space-y-4">
                <h4 className="font-medium">Wishlist</h4>
                <div className="text-sm text-muted-foreground">
                  Your wishlist is empty
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Cart */}
          <Popover open={showCart} onOpenChange={setShowCart}>
            <PopoverTrigger asChild>
              <button
                className="p-2 hover:bg-accent rounded-full relative"
                onMouseEnter={() => setShowCart(true)}>
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  0
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="w-80 p-4"
              onMouseLeave={() => !showCart && setShowCart(false)}>
              <div className="space-y-4">
                <h4 className="font-medium">Shopping Cart</h4>
                <div className="text-sm text-muted-foreground">
                  Your cart is empty
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Login/Account */}
          {isLoggedIn ? (
            <button className="p-2 hover:bg-accent rounded-full">
              <User className="h-5 w-5" />
            </button>
          ) : (
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
