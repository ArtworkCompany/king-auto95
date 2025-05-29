import {
  SiInstagram,
  SiSnapchat,
  SiTiktok,
} from "@icons-pack/react-simple-icons";
import data from "../data/sections.json" with { type: "json" };

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t-2 border-gold/30">
      <div className="container px-4 mx-auto lg:px-6">
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <div className="flex items-center space-x-2 lg:mb-2 md:mb-0">
              <img src="/images/logo-header.png" alt={data.title} width={50} />
              <span className="text-xl text-gold">{data.title}</span>
            </div>
            <p className="text-sm text-center text-gray-400 md:text-left">
              {data.description}
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold text-gold">
              {data.footer.followUs}
            </h3>
            <div className="flex space-x-6">
              <a
                href={data.socialNetwork.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 transition-all duration-300 bg-black border-2 rounded-full group border-gold/30 hover:border-gold hover:shadow-lg hover:shadow-gold/20"
              >
                <SiInstagram className="w-6 h-6 transition-transform duration-300 text-gold group-hover:scale-110" />
              </a>
              <a
                href={data.socialNetwork.snapchat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 transition-all duration-300 bg-black border-2 rounded-full group border-gold/30 hover:border-gold hover:shadow-lg hover:shadow-gold/20"
              >
                <SiSnapchat className="w-6 h-6 transition-transform duration-300 text-gold group-hover:scale-110" />
              </a>
              <a
                href={data.socialNetwork.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 transition-all duration-300 bg-black border-2 rounded-full group border-gold/30 hover:border-gold hover:shadow-lg hover:shadow-gold/20"
              >
                <SiTiktok className="w-6 h-6 transition-transform duration-300 text-gold group-hover:scale-110" />
              </a>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400">
                {data.socialNetwork.instagram.username} |{" "}
                {data.socialNetwork.snapchat.username}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 md:items-end">
            <div className="text-center md:text-right">
              <p className="font-semibold text-gold">{data.footer.contactUs}</p>
              <p className="font-bold text-gray-300">
                {data.callToAction.phoneNumber}
              </p>
              <p className="text-sm text-gray-400">{data.footer.book}</p>
            </div>
            <p className="text-sm text-center text-gray-400 md:text-right">
              © {new Date().getFullYear()} {data.title}.{" "}
              {data.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <footer className="py-8 bg-black border-t-2 border-gold/30">
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
          <div className='flex items-center gap-10'>
            <SiInstagram />
            <SiSnapchat />
            <SiTiktok />
          </div>
          <p className="text-center text-gray-400 md:text-right">
            © {new Date().getFullYear()} {data.title}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer> */
}
