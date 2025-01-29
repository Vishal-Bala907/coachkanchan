import { StaticImageData } from "next/image";

import blog_thumb1 from "@/assets/img/news/01.jpg"
import blog_thumb2 from "@/assets/img/news/02.jpg"
import blog_thumb3 from "@/assets/img/news/03.jpg"
import blog_thumb4 from "@/assets/img/news/04.jpg"
import blog_thumb5 from "@/assets/img/news/05.jpg"
import blog_thumb6 from "@/assets/img/news/06.jpg"
import blog_thumb7 from "@/assets/img/news/07.jpg"
import blog_thumb8 from "@/assets/img/news/08.jpg"
import blog_thumb9 from "@/assets/img/news/09.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   date: string;
   tag: string;
   title: string;
   data_wow_delay?: string
   desc?:string;
   bg_img?:string;
}[];

const blog_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    thumb: blog_thumb1,
    date: "January 24, 2024",
    tag: "Eco-Friendly",
    title: "Sustainable Packaging",
    data_wow_delay: ".3s",
  },
  {
    id: 2,
    page: "home_1",
    thumb: blog_thumb2,
    date: "January 29, 2024",
    tag: "Quality-Assurance",
    title: "Custom Blow ",
    data_wow_delay: ".5s",
  },
  {
    id: 3,
    page: "home_1",
    thumb: blog_thumb3,
    date: " January 14, 2024",
    tag: " Innovative-Designs",
    title: "Packaging Innovations",
    data_wow_delay: ".7s",
  },

  // inner_page
  {
    id: 1,
    page: "blog_1",
    thumb: blog_thumb1,
    date: "January 24, 2024",
    tag: "Construct Ion",
    title: "Sustainable Packaging",
    data_wow_delay: ".3s",
  },
  {
    id: 2,
    page: "blog_1",
    thumb: blog_thumb2,
    date: "January 29, 2024",
    tag: "Constructions",
    title: "Construction Site Security Information",
    data_wow_delay: ".5s",
  },
  {
    id: 3,
    page: "blog_1",
    thumb: blog_thumb3,
    date: " January 14, 2024",
    tag: " Heavy Shipping",
    title: " The Great Depression Building Design",
    data_wow_delay: ".7s",
  },
  {
    id: 4,
    page: "blog_1",
    thumb: blog_thumb4,
    date: "January 24, 2024",
    tag: "Construct Ion",
    title: "Sustainable Packaging",
    data_wow_delay: ".3s",
  },
  {
    id: 5,
    page: "blog_1",
    thumb: blog_thumb5,
    date: "January 29, 2024",
    tag: "Constructions",
    title: "Construction Site Security Information",
    data_wow_delay: ".5s",
  },
  {
    id: 6,
    page: "blog_1",
    thumb: blog_thumb6,
    date: " January 14, 2024",
    tag: " Heavy Shipping",
    title: " The Great Depression Building Design",
    data_wow_delay: ".7s",
  },
  {
    id: 7,
    page: "blog_1",
    thumb: blog_thumb7,
    date: "January 24, 2024",
    tag: "Construct Ion",
    title: "Energetically Envisioned is User Friendly",
    data_wow_delay: ".3s",
  },
  {
    id: 8,
    page: "blog_1",
    thumb: blog_thumb8,
    date: "January 29, 2024",
    tag: "Constructions",
    title: "Construction Site Security Information",
    data_wow_delay: ".5s",
  },
  {
    id: 9,
    page: "blog_1",
    thumb: blog_thumb9,
    date: " January 14, 2024",
    tag: " Heavy Shipping",
    title: " The Great Depression Building Design",
    data_wow_delay: ".7s",
  },
  {
    id: 10,
    page: "blog_1",
    thumb: blog_thumb7,
    date: "January 24, 2024",
    tag: "Construct Ion",
    title: "Energetically Envisioned is User Friendly",
    data_wow_delay: ".3s",
  },

  // blog_2

  {
    id: 1,
    page: "blog_2",
    thumb: blog_thumb1,
    date: "January 24, 2024",
    tag: "Construct Ion",
    title: "Energetically Envisioned is User Friendly",
    data_wow_delay: ".3s",
  },
  {
    id: 2,
    page: "blog_2",
    thumb: blog_thumb2,
    date: "January 29, 2024",
    tag: "Constructions",
    title: "Construction Site Security Information",
    data_wow_delay: ".5s",
  },
  {
    id: 3,
    page: "blog_2",
    thumb: blog_thumb3,
    date: " January 14, 2024",
    tag: " Heavy Shipping",
    title: " The Great Depression Building Design",
    data_wow_delay: ".3s",
  },
  {
    id: 4,
    page: "blog_2",
    thumb: blog_thumb4,
    date: "January 24, 2024",
    tag: "Construct Ion",
    title: "Energetically Envisioned is User Friendly",
    data_wow_delay: ".5s",
  },
  {
    id: 5,
    page: "blog_2",
    thumb: blog_thumb5,
    date: "January 29, 2024",
    tag: "Constructions",
    title: "Construction Site Security Information",
    data_wow_delay: ".3s",
  },
  {
    id: 6,
    page: "blog_2",
    thumb: blog_thumb6,
    date: " January 14, 2024",
    tag: " Heavy Shipping",
    title: " The Great Depression Building Design",
    data_wow_delay: ".5s",
  },
  {
    id: 7,
    page: "blog_2",
    thumb: blog_thumb7,
    date: "January 24, 2024",
    tag: "Construct Ion",
    title: "Energetically Envisioned is User Friendly",
    data_wow_delay: ".3s",
  },

  // blog_3

  {
    id: 1,
    page: "blog_3",
    thumb: blog_thumb1,
    date: "15",
    tag: "Construct Ion",
    title: "Energetically Envisioned is User Friendly",
    bg_img: "assets/img/news/post1.jpg",
    desc: "We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing needs. Infrastructure related installation projects.",
  },
  {
    id: 2,
    page: "blog_3",
    thumb: blog_thumb2,
    date: "18",
    tag: "Constructions",
    title: "Construction Site Security Information",
    bg_img: "assets/img/news/post2.jpg",
    desc: "We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing needs. Infrastructure related installation projects.",
  },
  {
    id: 3,
    page: "blog_3",
    thumb: blog_thumb3,
    date: " 25",
    tag: " Heavy Shipping",
    title: " The Great Depression Building Design",
    bg_img: "assets/img/news/post3.jpg",
    desc: "We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing needs. Infrastructure related installation projects.",
  },
  {
    id: 4,
    page: "blog_3",
    thumb: blog_thumb2,
    date: "18",
    tag: "Constructions",
    title: "Construction Site Security Information",
    bg_img: "assets/img/news/post2.jpg",
    desc: "We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing needs. Infrastructure related installation projects.",
  },
];

export default blog_data;