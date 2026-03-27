import {
  PencilLine, ChefHat, MicVocal, Camera, Guitar, Palette,
  ScissorsLineDashed, Music, Tv, PenLine, Rose, Rss,
  NotepadText, Wallpaper, Brush, Popcorn, Music2,
  GamepadDirectional, PlaneTakeoff, BookOpenText,
  Trophy, Share2, Bike, TvMinimalPlay, Martini,
  Handbag, Theater, Dog, Mic, PawPrint
} from "lucide-react";

import { FaRunning, FaWalking, FaSwimmer } from "react-icons/fa";
import { BiCycling } from "react-icons/bi";
import { TbTrekking } from "react-icons/tb";
import { MdSportsGymnastics, MdSocialDistance } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { GrYoga } from "react-icons/gr";
import { IoFastFoodSharp } from "react-icons/io5";
import { LuVegan } from "react-icons/lu";
import { ImNewspaper } from "react-icons/im";
import { RiBriefcase4Line } from "react-icons/ri";
import { GiPaintedPottery, GiReceiveMoney } from "react-icons/gi";
import { FaShirt } from "react-icons/fa6";

import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

type Icon = IconType | LucideIcon;

interface HobbyItem {
  label: string;
  value: string;
  icon: Icon;
}

interface HobbiesData {
  creative: HobbyItem[];
  fun: HobbyItem[];
  fitness: HobbyItem[];
  other: HobbyItem[];
}

export const hobbiesData: HobbiesData = {
  creative: [
    { label: "Writing", value: "writing", icon: PencilLine },
    { label: "Cooking", value: "cooking", icon: ChefHat },
    { label: "Singing", value: "singing", icon: MicVocal },
    { label: "Photography", value: "photography", icon: Camera },
    { label: "Playing instruments", value: "playing_instruments", icon: Guitar },
    { label: "Painting", value: "painting", icon: Palette },
    { label: "DIY crafts", value: "diy_crafts", icon: ScissorsLineDashed },
    { label: "Dancing", value: "dancing", icon: Music },
    { label: "Acting", value: "acting", icon: Tv },
    { label: "Poetry", value: "poetry", icon: PenLine },
    { label: "Gardening", value: "gardening", icon: Rose },
    { label: "Blogging", value: "blogging", icon: Rss },
    { label: "Content creation", value: "content_creation", icon: NotepadText },
    { label: "Designing", value: "designing", icon: Wallpaper },
    { label: "Doodling", value: "doodling", icon: Brush }
  ],

  fun: [
    { label: "Movies", value: "movies", icon: Popcorn },
    { label: "Music", value: "music", icon: Music2 },
    { label: "Gaming", value: "gaming", icon: GamepadDirectional },
    { label: "Travelling", value: "travelling", icon: PlaneTakeoff },
    { label: "Reading", value: "reading", icon: BookOpenText },
    { label: "Sports", value: "sports", icon: Trophy },
    { label: "Social Media", value: "social_media", icon: Share2 },
    { label: "Biking", value: "biking", icon: Bike },
    { label: "Binge Watching", value: "binge_watching", icon: TvMinimalPlay },
    { label: "Clubbing", value: "clubbing", icon: Martini },
    { label: "Shopping", value: "shopping", icon: Handbag },
    { label: "Theater & Events", value: "theater", icon: Theater },
    { label: "Anime", value: "anime", icon: Dog },
    { label: "Standups", value: "standups", icon: Mic }
  ],

  fitness: [
    { label: "Running", value: "running", icon: FaRunning },
    { label: "Cycling", value: "cycling", icon: BiCycling },
    { label: "Yoga", value: "yoga", icon: GrYoga },
    { label: "Walking", value: "walking", icon: FaWalking },
    { label: "Working Out", value: "working_out", icon: CgGym },
    { label: "Trekking", value: "trekking", icon: TbTrekking },
    { label: "Aerobics/Zumba", value: "aerobics", icon: MdSportsGymnastics },
    { label: "Swimming", value: "swimming", icon: FaSwimmer }
  ],

  other: [
    { label: "Pets", value: "pets", icon: PawPrint },
    { label: "Foodie", value: "foodie", icon: IoFastFoodSharp },
    { label: "Vegan", value: "vegan", icon: LuVegan },
    { label: "News & Politics", value: "news_politics", icon: ImNewspaper },
    { label: "Social Service", value: "social_service", icon: MdSocialDistance },
    { label: "Entrepreneurship", value: "entrepreneurship", icon: RiBriefcase4Line },
    { label: "Home Decor", value: "home_decor", icon: GiPaintedPottery },
    { label: "Investments", value: "investments", icon: GiReceiveMoney },
    { label: "Fashion & Beauty", value: "fashion", icon: FaShirt }
  ]
};