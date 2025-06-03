import type { MouseEvent } from "react";
import home from "../../../data/home.json" with { type: "json" };
import { cn } from "../../../lib/utils";

interface Props {
  isHome: boolean;
}

const Header = ({ isHome }: Props) => {
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
    <header
      className={cn(
        "border-b border-cyan-300/30 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80 shadow-lg",
        {
          "sticky top-0 z-50": isHome,
        },
      )}
    >
      <div className="container flex items-center justify-between h-32 px-4 mx-auto lg:px-6">
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/images/logo-header-v2.png"
            alt={home.title}
            width={100}
            height={100}
          />
          <span className="text-2xl text-secondary">{home.title}</span>
        </a>
        <nav className="items-center hidden space-x-6 text-2xl md:flex">
          {isHome && (
            <>
              <a
                href="#"
                onClick={handleScroll("services")}
                className="transition-colors text-secondary hover:text-gray-300"
              >
                {home.header.menu.services}
              </a>
              <a
                href="#"
                onClick={handleScroll("about")}
                className="transition-colors text-secondary hover:text-gray-300"
              >
                {home.header.menu.about}
              </a>
              <a
                href="#"
                onClick={handleScroll("contact")}
                className="transition-colors text-secondary hover:text-gray-300"
              >
                {home.header.menu.contact}
              </a>
              <span>|</span>
            </>
          )}
          <a
            href="/faq"
            className="transition-colors text-secondary hover:text-gray-300"
          >
            {home.header.menu.faq}
          </a>
          <span>|</span>
          <a
            href="/reservation"
            className="transition-colors text-secondary hover:text-gray-300"
          >
            {home.header.menu.reservation}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
