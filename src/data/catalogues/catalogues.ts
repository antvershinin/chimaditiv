import { deepContrastPigments } from "../../assets/catalogues/deepContrast";
import { forBlackPigments } from "../../assets/catalogues/forBlack";
import { smartPearlPigments } from "../../assets/catalogues/smartPearl";
import { IPigment, standartPigments } from "../../assets/catalogues/standart";
import cat1 from "../../assets/home/catalogue/catalogue1.jpeg";
import cat2 from "../../assets/home/catalogue/catalogue2.jpeg";
import cat3 from "../../assets/home/catalogue/catalogue3.jpeg";
import cat4 from "../../assets/home/catalogue/catalogue4.jpeg";

export interface ICatalogue {
  name: string;
  bgimage: string;
  adress: string;
  description: string;
  desctiptionShort: string;
  pigments: IPigment[];
}

export const catalogues: ICatalogue[] = [
  {
    name: "Каталог Standart",
    bgimage: cat1,
    adress: "standart",
    description:
      'Каталог "Standart" - это коллекция перламутровых пигментов, разработанных для водных и органо-растворимых связующих. Пигменты из этого каталога отличаются высоким блеском, разнообразием уникальных цветов и высокой устойчивостью к внешним воздействиям.',
    pigments: standartPigments,
    desctiptionShort: "Высокий блеск, уникальные цвета",
  },
  {
    name: "Каталог Black Only",
    bgimage: cat2,
    adress: "black_only",
    description:
      'Пигменты серии "Black Only" представляют собой уникальные интерферентные эффекты для использования на черной подложке. Благодаря своей природе и использования новых технологий, расширяют линейку стандартных интерферентных оттенков, демонстрируя новый уровень выразительности.',
    desctiptionShort: "Интерферентные пигменты, идеальны на черном фоне",
    pigments: forBlackPigments,
  },
  {
    name: "Каталог Deep Contrast",
    bgimage: cat3,
    adress: "deep_contrast",
    description:
      'Пигменты серии "Deep Contrast" разработаны в результате длительных исследований оптических свойств перламутровых пигментов и являются эклектичным сочетанием высокотехнологичных эффектов и повседневной натуральности. Идеально подходят для 3D-элементов, выделяя каждый изгиб поверхности. Гармонично меняют оттенок основного цвета от более светлого к более темному в зависимости от угла зрения и освещения.',
    desctiptionShort: "Разработаны для фактурной поверхности и 3D элементов",
    pigments: deepContrastPigments,
  },
  {
    name: "Каталог Smart Pearl",
    bgimage: cat4,
    adress: "smart_pearl",
    description:
      'Серия "SMART PEARL" состоит из новых разработок, не вошедших в другие каталоги.',
    desctiptionShort: "Новые разработки",
    pigments: smartPearlPigments,
  },
];
