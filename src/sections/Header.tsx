import type { MouseEvent } from "react";
import data from "../data/sections.json" with { type: "json" };

const Header = () => {
  const handleScroll = (id: string) => (e: MouseEvent) => {
    e.preventDefault();

    const el = document.getElementById(id);
    const header = document.querySelector("header");

    if (el && header) {
      const yOffset = header.clientHeight;
      const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex items-center justify-between h-32 px-4 mx-auto lg:px-6">
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo-header.png"
            alt={data.title}
            width={100}
            height={100}
          />
          <span className="text-2xl text-gold">{data.title}</span>
        </div>
        <nav className="items-center hidden space-x-6 text-2xl md:flex">
          <a
            href="#"
            onClick={handleScroll("services")}
            className="text-gray-300 transition-colors hover:text-gold"
          >
            {data.header.menu.services}
          </a>
          <a
            href="#"
            onClick={handleScroll("about")}
            className="text-gray-300 transition-colors hover:text-gold"
          >
            {data.header.menu.about}
          </a>
          <a
            href="#"
            onClick={handleScroll("contact")}
            className="text-gray-300 transition-colors hover:text-gold"
          >
            {data.header.menu.contact}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
