import { Road_Rage, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
  fallback: ["system-ui", "serif"],
});

export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "serif"],
});

export const jejuSerif = localFont({
  src: "../app/fonts/JejuMyeongjo-Regular.ttf",
  variable: "--font-jeju",
  weight: "400",
  preload: false,
  fallback: ["system-ui", "serif"],
});
