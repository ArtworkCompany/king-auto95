import data from '../data/sections.json' with { type: "json" };

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t-2 border-gold/30">
      <div className="container px-4 mx-auto lg:px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center mb-4 space-x-2 md:mb-0">
          <img
            src="/images/logo-header.png"
            alt={data.title}
            width={100}
            height={100}
          />
          <span className="text-2xl text-gold">{data.title}</span>
          </div>
          <p className="text-center text-gray-400 md:text-right">
            © {new Date().getFullYear()} {data.title}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
