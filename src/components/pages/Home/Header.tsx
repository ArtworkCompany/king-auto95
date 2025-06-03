import { Menu, X } from "lucide-react";
import { useState } from "react";
import home from "../../../data/home.json" with { type: "json" };
import { cn } from "../../../lib/utils";

interface Props {
  isHome: boolean;
}

const Header = ({ isHome }: Props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
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
        <button
          className="p-2 text-white transition-colors cursor-pointer md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      {showMobileMenu && (
        <div className="border-t md:hidden bg-blue-900/98 backdrop-blur border-cyan-300/30">
          <nav className="container px-4 py-4 mx-auto space-y-4">
            {isHome && (
              <>
                <a
                  href="#"
                  className="block py-2 text-white transition-colors border-b hover:text-cyan-300 border-cyan-300/20"
                  onClick={(e) => {
                    setShowMobileMenu(false);
                    handleScroll("services")(e);
                  }}
                >
                  {home.header.menu.services}
                </a>
                <a
                  href="#"
                  className="block py-2 text-white transition-colors border-b hover:text-cyan-300 border-cyan-300/20"
                  onClick={(e) => {
                    setShowMobileMenu(false);
                    handleScroll("about")(e);
                  }}
                >
                  {home.header.menu.about}
                </a>
                <a
                  href="#"
                  className="block py-2 text-white transition-colors border-b hover:text-cyan-300 border-cyan-300/20"
                  onClick={(e) => {
                    setShowMobileMenu(false);
                    handleScroll("contact")(e);
                  }}
                >
                  {home.header.menu.contact}
                </a>
              </>
            )}
            <a
              href="/faq"
              className="block py-2 text-white transition-colors hover:text-cyan-300"
              onClick={() => setShowMobileMenu(false)}
            >
              {home.header.menu.faq}
            </a>
            <a
              href="/reservation"
              className="block py-2 text-white transition-colors hover:text-cyan-300"
              onClick={() => setShowMobileMenu(false)}
            >
              {home.header.menu.reservation}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
