import { StaticImageData } from "next/image";

import team_1 from "@/assets/img/team/02.jpg"
import team_2 from "@/assets/img/team/03.jpg"
import team_3 from "@/assets/img/team/04.jpg"
import team_4 from "@/assets/img/team/05.jpg"
import team_5 from "@/assets/img/team/06.jpg"
import team_6 from "@/assets/img/team/07.jpg"

interface DataType {
   id: number;
   thumb: StaticImageData;
   number: string;
   name: string;
   designation: string;
}[];

const team_data: DataType[] = [
   {
      id: 1,
      thumb: team_1,
      number: "+91 2659 302 003",
      name: "Sana p. Lesh",
      designation: "Senior engineer"
   },
   {
      id: 2,
      thumb: team_2,
      number: "+91 2659 302 003",
      name: "Frank V. Cox",
      designation: "Senior engineer"
   },
   {
      id: 3,
      thumb: team_3,
      number: "+91 2659 302 003",
      name: "Lesh Sandro",
      designation: "Senior engineer"
   },
   {
      id: 4,
      thumb: team_4,
      number: "+91 2659 302 003",
      name: "Alex Rony",
      designation: "Senior engineer"
   },
   {
      id: 5,
      thumb: team_5,
      number: "+91 2659 302 003",
      name: "Alex Shikhon",
      designation: "Senior engineer"
   },
   {
      id: 6,
      thumb: team_6,
      number: "+91 2659 302 003",
      name: "Sana p. Lesh",
      designation: "Senior engineer"
   },
];

export default team_data;