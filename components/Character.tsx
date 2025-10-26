"use client";
import { useState, useEffect } from "react";
import { 
  // Handwritten/Casual
  Caveat, Indie_Flower, Shadows_Into_Light, Patrick_Hand,
  // Pixel/Retro
  Press_Start_2P, VT323, Pixelify_Sans, Silkscreen,
  // Comic/Playful
  Bangers, Bungee, Titan_One, Londrina_Solid,
  // Fancy/Decorative
  Righteous, Creepster, Fugaz_One, Fredericka_the_Great,
  // Elegant/Script
  Great_Vibes, Allura, Tangerine, Pacifico,
  // Bold/Display
  Black_Ops_One, Faster_One
} from "next/font/google";

// Handwritten/Casual
const caveat = Caveat({ weight: "700", subsets: ["latin"] });
const indieFlower = Indie_Flower({ weight: "400", subsets: ["latin"] });
const shadowsIntoLight = Shadows_Into_Light({ weight: "400", subsets: ["latin"] });
const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

// Pixel/Retro
const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const vt323 = VT323({ weight: "400", subsets: ["latin"] });
const pixelifySans = Pixelify_Sans({ weight: "700", subsets: ["latin"] });
const silkscreen = Silkscreen({ weight: "700", subsets: ["latin"] });

// Comic/Playful
const bangers = Bangers({ weight: "400", subsets: ["latin"] });
const bungee = Bungee({ weight: "400", subsets: ["latin"] });
const titanOne = Titan_One({ weight: "400", subsets: ["latin"] });
const londrinaSolid = Londrina_Solid({ weight: "900", subsets: ["latin"] });

// Fancy/Decorative
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const creepster = Creepster({ weight: "400", subsets: ["latin"] });
const fugazOne = Fugaz_One({ weight: "400", subsets: ["latin"] });
const frederickaTheGreat = Fredericka_the_Great({ weight: "400", subsets: ["latin"] });

// Elegant/Script
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const allura = Allura({ weight: "400", subsets: ["latin"] });
const tangerine = Tangerine({ weight: "700", subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

// Bold/Display
const blackOpsOne = Black_Ops_One({ weight: "400", subsets: ["latin"] });
const fasterOne = Faster_One({ weight: "400", subsets: ["latin"] });

const fonts = [
  caveat.className, indieFlower.className, shadowsIntoLight.className, patrickHand.className,
  pressStart.className, vt323.className, pixelifySans.className, silkscreen.className,
  bangers.className, bungee.className, titanOne.className, londrinaSolid.className,
  righteous.className, creepster.className, fugazOne.className, frederickaTheGreat.className,
  greatVibes.className, allura.className, tangerine.className, pacifico.className,
  blackOpsOne.className, fasterOne.className
];

export default function Character({ value }: { value: string }) {
  const [isHovering, setIsHovering] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);
  const [showFont, setShowFont] = useState(false);

  useEffect(() => {
    if (!isHovering) return;
    
    const interval = setInterval(() => {
      setFontIndex((prev) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * fonts.length);
        } while (newIndex === prev && fonts.length > 1);
        return newIndex;
      });
    }, 550);

    return () => clearInterval(interval);
  }, [isHovering]);

  const handleMouseLeave = () => {
    setIsHovering(false); // Stop cycling immediately
    setTimeout(() => {
      setShowFont(false);
      setFontIndex(0);
    }, 1000); // Revert after 1 seconds
  };

  return (
    <span 
      className={`my-5 text-9xl font-bold transition-all ${showFont || isHovering ? fonts[fontIndex] : ""}`}
      onMouseEnter={() => {
        setIsHovering(true);
        setShowFont(true);
      }}
      onMouseLeave={handleMouseLeave}
    >
      {value}
    </span>
  );
}