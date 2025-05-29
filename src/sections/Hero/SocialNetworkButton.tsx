import {
  SiInstagram,
  SiLinktree,
  SiSnapchat,
  SiTiktok,
} from "@icons-pack/react-simple-icons";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import data from "../../data/sections.json" with { type: "json" };

const SocialNetworkButton = () => {
  const [showSocialDropdown, setShowSocialDropdown] = useState(false);

  const onSelectSocialNetwork = (url: string) => () => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".relative")) {
        setShowSocialDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <Button
        size="lg"
        variant="outline"
        className="border-2 cursor-pointer border-gold text-gold hover:bg-gold hover:text-black bg-black/50 backdrop-blur group"
        onClick={() => setShowSocialDropdown(!showSocialDropdown)}
      >
        <SiLinktree className="w-5 h-5 mr-2" />
        {data.hero.button.followUs}
        <ChevronDown
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${showSocialDropdown ? "rotate-180" : ""}`}
        />
      </Button>
      {showSocialDropdown && (
        <div className="absolute z-10 w-full mt-2 bg-black border-2 rounded-lg shadow-lg top-full border-gold/30 shadow-gold/20 backdrop-blur">
          <div
            className="flex items-center w-full gap-2 px-4 py-3 text-gray-300 transition-colors rounded-md cursor-pointer hover:text-gold hover:bg-gold/15"
            onClick={onSelectSocialNetwork(data.socialNetwork.instagram.url)}
          >
            <SiInstagram className="w-5 h-5 mr-2 text-white" />
            <div>
              <div className="font-semibold">
                {data.socialNetwork.instagram.title}
              </div>
              <div className="text-sm text-gray-400">
                {data.socialNetwork.instagram.username}
              </div>
            </div>
          </div>
          <div
            className="flex items-center w-full gap-2 px-4 py-3 text-gray-300 transition-colors rounded-md cursor-pointer hover:text-gold hover:bg-gold/15"
            onClick={onSelectSocialNetwork(data.socialNetwork.snapchat.url)}
          >
            <SiSnapchat className="w-5 h-5 mr-2 text-white" />
            <div>
              <div className="font-semibold">
                {data.socialNetwork.snapchat.title}
              </div>
              <div className="text-sm text-gray-400">
                {data.socialNetwork.snapchat.username}
              </div>
            </div>
          </div>
          <div
            className="flex items-center w-full gap-2 px-4 py-3 text-gray-300 transition-colors rounded-md cursor-pointer hover:text-gold hover:bg-gold/15"
            onClick={onSelectSocialNetwork(data.socialNetwork.tiktok.url)}
          >
            <SiTiktok className="w-5 h-5 mr-2 text-white" />
            <div>
              <div className="font-semibold">
                {data.socialNetwork.tiktok.title}
              </div>
              <div className="text-sm text-gray-400">
                {data.socialNetwork.tiktok.username}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialNetworkButton;
