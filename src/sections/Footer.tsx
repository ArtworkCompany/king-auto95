import { Crown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-yellow-400/30 py-8">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Crown className="h-6 w-6 text-yellow-400" />
            <span className="text-xl font-bold text-yellow-400">King Auto</span>
          </div>
          <p className="text-gray-400 text-center md:text-right">
            © {new Date().getFullYear()} King Auto. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
