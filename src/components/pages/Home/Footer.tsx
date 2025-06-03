import {
  SiInstagram,
  SiSnapchat,
  SiTiktok,
} from "@icons-pack/react-simple-icons";
import home from "../../../data/home.json" with { type: "json" };

const Footer = () => {
  return (
    <footer className="py-12 border-t-2 bg-blue-950 border-cyan-300/30">
      <div className="container px-4 mx-auto lg:px-6">
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <div className="flex items-center space-x-2 lg:mb-2 md:mb-0">
              <img
                src="/images/logo-header-v2.png"
                alt={home.title}
                width={50}
              />
              <span className="text-xl text-secondary">{home.title}</span>
            </div>
            <p className="text-sm text-center text-secondary md:text-left">
              {home.description}
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold text-secondary">
              {home.footer.followUs}
            </h3>
            <div className="flex space-x-6">
              <a
                href={home.socialNetwork.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 transition-all duration-300 bg-blue-900 border-2 rounded-full group border-cyan-300/30 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20"
              >
                <SiInstagram
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                  color="#E1306C"
                />
              </a>
              <a
                href={home.socialNetwork.snapchat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 transition-all duration-300 bg-blue-900 border-2 rounded-full group border-cyan-300/30 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20"
              >
                <SiSnapchat
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                  color="#FFFC00"
                />
              </a>
              <a
                href={home.socialNetwork.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 transition-all duration-300 bg-blue-900 border-2 rounded-full group border-cyan-300/30 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20"
              >
                <SiTiktok
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                  color="#000000"
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-sm text-secondary">
                {home.socialNetwork.instagram.username} |{" "}
                {home.socialNetwork.snapchat.username}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 md:items-end">
            <div className="text-center md:text-right">
              <p className="font-semibold text-secondary">
                {home.footer.contactUs}
              </p>
              <p className="font-bold text-secondary">
                {home.callToAction.phoneNumber}
              </p>
              <p className="text-sm text-secondary">{home.footer.book}</p>
            </div>
            <p className="text-sm text-center text-secondary md:text-right">
              © {new Date().getFullYear()} {home.title}.{" "}
              {home.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <footer className="py-8 bg-black border-t-2 border-secondary/30">
      <div className="container px-4 mx-auto lg:px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center mb-4 space-x-2 md:mb-0">
          <img
            src="/images/header.png"
            alt={home.title}
            width={100}
            height={100}
          />
          <span className="text-2xl text-secondary">{home.title}</span>
          </div>
          <div className='flex items-center gap-10'>
            <SiInstagram />
            <SiSnapchat />
            <SiTiktok />
          </div>
          <p className="text-center text-secondary md:text-right">
            © {new Date().getFullYear()} {home.title}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer> */
}
