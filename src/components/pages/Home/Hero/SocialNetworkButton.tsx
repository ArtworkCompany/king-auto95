import {
  SiInstagram,
  SiLinktree,
  SiSnapchat,
  SiTiktok,
} from "@icons-pack/react-simple-icons";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import home from "../../../../data/home.json" with { type: "json" };
import { cn } from "../../../../lib/utils";
import { Button } from "../../../ui/button";

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
        className={cn(
          "w-full transition-all duration-300 border-2 rounded-lg shadow-sm cursor-pointer bg-card text-card-foreground bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-cyan-300/30 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20 group",
          {
            "border-cyan-300": showSocialDropdown,
          },
        )}
        onClick={() => setShowSocialDropdown(!showSocialDropdown)}
      >
        <SiLinktree className="w-5 h-5 mr-2" />
        {home.hero.button.followUs}
        <ChevronDown
          className={cn(`ml-2 h-4 w-4 transition-transform duration-200`, {
            "rotate-180": showSocialDropdown,
          })}
        />
      </Button>
      {showSocialDropdown && (
        <div className="absolute z-20 w-full mt-2 bg-blue-800 border-2 rounded-lg shadow-lg top-full border-cyan-300/30 shadow-cyan-300/20 backdrop-blur">
          <div
            className="flex items-center w-full gap-2 px-4 py-3 transition-colors rounded-md cursor-pointer text-secondary hover:bg-cyan-300/10"
            onClick={onSelectSocialNetwork(home.socialNetwork.instagram.url)}
          >
            <SiInstagram className="w-5 h-5 mr-2 text-secondary" />
            <div>
              <div className="font-semibold">
                {home.socialNetwork.instagram.title}
              </div>
              <div className="text-sm text-white">
                {home.socialNetwork.instagram.username}
              </div>
            </div>
          </div>
          <div
            className="flex items-center w-full gap-2 px-4 py-3 transition-colors rounded-md cursor-pointer text-secondary hover:bg-cyan-300/10"
            onClick={onSelectSocialNetwork(home.socialNetwork.snapchat.url)}
          >
            <SiSnapchat className="w-5 h-5 mr-2 text-secondary" />
            <div>
              <div className="font-semibold">
                {home.socialNetwork.snapchat.title}
              </div>
              <div className="text-sm text-white">
                {home.socialNetwork.snapchat.username}
              </div>
            </div>
          </div>
          <div
            className="flex items-center w-full gap-2 px-4 py-3 transition-colors rounded-md cursor-pointer text-secondary hover:bg-cyan-300/10"
            onClick={onSelectSocialNetwork(home.socialNetwork.tiktok.url)}
          >
            <SiTiktok className="w-5 h-5 mr-2 text-secondary" />
            <div>
              <div className="font-semibold">
                {home.socialNetwork.tiktok.title}
              </div>
              <div className="text-sm text-white">
                {home.socialNetwork.tiktok.username}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialNetworkButton;
