// components/Header.js
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const ids = ["about", "projects", "contact"];
      let cur = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = (id: string, label: string) => (
    <a
      key={id}
      href={`#${id}`}
      className={`transition-colors hover:text-bat-yellow ${active === id ? "text-bat-yellow" : "text-white/80"}`}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-bat-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Add the `animate-jump` class to the SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            className="text-bat-yellow animate-jump"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4.5-4.5c.35 1.76 1.95 3.03 3.82 3.03s3.47-1.27 3.82-3.03H7.5z" />
          </svg>

          <div className="font-bold text-xl">@third._.space</div>
        </div>
        <nav className="hidden md:flex gap-8">
          {link("about","About")}
          {link("projects","Projects")}
          {link("contact","Contact")}
        </nav>
      </div>
    </header>
  );
}
