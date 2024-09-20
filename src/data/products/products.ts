import { ICatalogue } from "../catalogues/catalogues";
import pearlescent from "../../assets/home/products/pearlescent.png";
import aluminium from "../../assets/home/products/aluminium.png";
import glitters from "../../assets/home/products/glitters.png";
import tactile from "../../assets/home/products/tactile.png";

export const products: ICatalogue[] = [
  {
    name: "Перламутровые пигменты",
    desctiptionShort: `Перламутровые пигменты`,
    description: "",
    adress: "pearlescent_pigments",
    bgimage: pearlescent,
    products: [],
  },
  {
    name: "Алюминиевые пигменты",
    desctiptionShort: "Алюминиевые пигменты",
    description: "Пигменты длинное описание",
    adress: "aluminium_pigments",
    bgimage: aluminium,
    products: [],
  },
  {
    name: "ПЭТ Глиттеры",
    desctiptionShort: "ПЭТ Глиттеры",
    description: "Пигменты длинное описание",
    adress: "pet_glitters",
    bgimage: glitters,
    products: [],
  },
  {
    name: "Тактильные добавки",
    desctiptionShort: "Тактильные добавки",
    description: "Пигменты длинное описание",
    adress: "tactile_additives",
    bgimage: tactile,
    products: [],
  },
];
