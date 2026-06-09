"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/ui/Button";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navigation() {
  return (
    <nav
      className="fixed bottom-6 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-fit -translate-x-1/2 items-center gap-2 rounded-[100px] border-2 border-white/15 bg-white/90 p-1 pr-2 shadow-2xl backdrop-blur-md sm:w-fit sm:gap-3 sm:pr-3 lg:bottom-auto lg:top-7 lg:bg-white/85"
      aria-label="Main Navigation"
    >
      <Link href="/" className="shrink-0" aria-label="Home">
        <Avatar />
      </Link>

      <ul className="hidden gap-1 lg:flex">
        {navItems.map((item) => (
          <li key={item.id} className="border-none p-0">
            <Button onClick={() => scrollTo(item.id)}>{item.label}</Button>
          </li>
        ))}
      </ul>

      <select
        className="h-10 max-w-[120px] truncate rounded-full border border-black/10 bg-white px-3 text-sm lg:hidden"
        onChange={(e) => scrollTo(e.target.value)}
        defaultValue=""
        aria-label="Navigation"
      >
        <option value="" disabled>
          Menu
        </option>
        {navItems.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>

      <a
        href={siteConfig.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0"
      >
        <Button variant="primary" className="group flex gap-1 pr-3 sm:pr-4">
          Let&apos;s talk
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </a>
    </nav>
  );
}
