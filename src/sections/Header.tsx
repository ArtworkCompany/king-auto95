import { Crown } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-yellow-400/30 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Crown className="h-8 w-8 text-yellow-400" />
          <span className="text-2xl font-bold text-yellow-400">King Auto</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#services"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            À propos
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
