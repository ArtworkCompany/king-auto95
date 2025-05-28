import data from '../data/sections.json' with { type: "json" };

const Header = () => {
  return (
    <header className="border-b border-gold/30 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
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
            href="#services"
            className="text-gray-300 transition-colors hover:text-gold"
          >
            {data.header.menu.services}
          </a>
          <a
            href="#about"
            className="text-gray-300 transition-colors hover:text-gold"
          >
            {data.header.menu.about}
          </a>
          <a
            href="#contact"
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
