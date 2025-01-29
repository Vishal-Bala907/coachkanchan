import { StaticImageData } from "next/image";

import avatar_1 from "@/assets/img/testimonial/07.jpg"

interface DataType{
   id:number;
   data_wow_delay:string;
   desc_1:string;
   desc_2:string;
   active_class?:string;
   avatar:StaticImageData;
   name:string;
   designation:string;
}[];

const testimonial_data:DataType[]=[
   {
      id:1,
      data_wow_delay:".3s",
      desc_1:"posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit.",
      desc_2:"Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.",
      avatar:avatar_1,
      name:"Daniel Smith",
      designation:"Senior engineer",
   },
   {
      id:2,
      data_wow_delay:".5s",
      desc_1:"posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit.",
      desc_2:"Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.",
      avatar:avatar_1,
      name:"Daniel Smith",
      designation:"Senior engineer",
      active_class:"active"
   },
   {
      id:3,
      data_wow_delay:".7s",
      desc_1:"posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit.",
      desc_2:"Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.",
      avatar:avatar_1,
      name:"Daniel Smith",
      designation:"Senior engineer",
   },
   {
      id:4,
      data_wow_delay:".3s",
      desc_1:"posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit.",
      desc_2:"Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.",
      avatar:avatar_1,
      name:"Daniel Smith",
      designation:"Senior engineer",
   },
   {
      id:5,
      data_wow_delay:".5s",
      desc_1:"posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit.",
      desc_2:"Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.",
      avatar:avatar_1,
      name:"Daniel Smith",
      designation:"Senior engineer",
      active_class:"active"
   },
   {
      id:6,
      data_wow_delay:".7s",
      desc_1:"posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit.",
      desc_2:"Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.",
      avatar:avatar_1,
      name:"Daniel Smith",
      designation:"Senior engineer",
   },
];

export default testimonial_data;