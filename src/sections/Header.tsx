import data from '../data/sections.json' with { type: "json" };

const Header = () => {
  return (
    <header className="border-b border-gold/30 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4 lg:px-6 h-32 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo-header.png"
            alt={data.title}
            width={100}
            height={100}
          />
          <span className="text-2xl text-gold">{data.title}</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-2xl">
          <a
            href={`#${data.header.menu.services}`}
            className="text-gray-300 hover:text-gold transition-colors"
          >
            {data.header.menu.services}
          </a>
          <a
            href={`#${data.header.menu.about}`}
            className="text-gray-300 hover:text-gold transition-colors"
          >
            {data.header.menu.about}
          </a>
          <a
            href={`#${data.header.menu.contact}`}
            className="text-gray-300 hover:text-gold transition-colors"
          >
            {data.header.menu.contact}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
