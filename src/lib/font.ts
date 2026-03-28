import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";

export const neu = localFont({
  src: [
    {
      path: "../../public/font/NeueMachina-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/font/NeueMachina-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/font/NeueMachina-Ultrabold.otf",
      weight: "800",
    },
  ],
  variable: "--font-neu",
});

export const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrumentSerif",
});

export const lombok = localFont({
  src: [
    {
      path: "../../public/font/Lombok Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-lombok",
});

export const cath = localFont({
  src: [
    {
      path: "../../public/font/CATHSGBR.ttf",
      weight: "400",
    },
  ],
  variable: "--font-cath",
});
