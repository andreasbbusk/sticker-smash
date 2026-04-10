import { ImageSourcePropType } from "react-native";

export type Sticker = {
  id: string;
  name: string;
  description: string;
  image: ImageSourcePropType;
};

export const stickers: Sticker[] = [
  {
    id: "cool-kitten",
    name: "Cool Kitten",
    description: "A laid-back sticker that works well for fun, playful edits.",
    image: require("../assets/images/emoji1.png") as ImageSourcePropType,
  },
  {
    id: "laugh-attack",
    name: "Laugh Attack",
    description: "A cheerful sticker for photos that need a little extra energy.",
    image: require("../assets/images/emoji2.png") as ImageSourcePropType,
  },
  {
    id: "star-eyes",
    name: "Star Eyes",
    description: "A bright reaction sticker that makes favorite moments stand out.",
    image: require("../assets/images/emoji3.png") as ImageSourcePropType,
  },
  {
    id: "party-mood",
    name: "Party Mood",
    description: "A festive sticker for snapshots that deserve celebration.",
    image: require("../assets/images/emoji4.png") as ImageSourcePropType,
  },
  {
    id: "love-bug",
    name: "Love Bug",
    description: "A sweet sticker that fits portraits, pets, and feel-good photos.",
    image: require("../assets/images/emoji5.png") as ImageSourcePropType,
  },
  {
    id: "sunny-smile",
    name: "Sunny Smile",
    description: "A simple happy sticker for light, casual photo edits.",
    image: require("../assets/images/emoji6.png") as ImageSourcePropType,
  },
  {
    id: "art",
    name: "Art palette",
    description: "A art palette sticker for photos that need a little extra creativity.",
    image: require("../assets/images/art.png") as ImageSourcePropType,
  },
];

export function getStickerById(id: string) {
  return stickers.find((sticker) => sticker.id === id);
}
