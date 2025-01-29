import { StaticImageData } from "next/image";

import service_Icon1 from "@/assets/img/service/icon.svg";
import service_Icon2 from "@/assets/img/service/icon-2.svg";
import service_Icon3 from "@/assets/img/service/icon-3.svg";
import service_Icon4 from "@/assets/img/service/icon-4.svg";
import service_Icon5 from "@/assets/img/service/icon-5.svg";
import service_Icon6 from "@/assets/img/service/icon-6.svg";

import service_thumb1 from "@/assets/img/service/05.jpg";
import service_thumb2 from "@/assets/img/service/06.jpg";
import service_thumb3 from "@/assets/img/service/07.jpg";
import service_thumb4 from "@/assets/img/service/08.jpg";
import service_thumb5 from "@/assets/img/service/09.jpg";
import service_thumb6 from "@/assets/img/service/10.jpg";

interface DataType {
  id: number;
  page: string;
  icon: StaticImageData;
  title: string;
  desc: string;
  data_wow_delay?: string;
}
[];

const service_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    data_wow_delay: "0.3s",
    icon: service_Icon4,
    title: "Personal Growth Coaching",
    desc: "Transform your mindset to achieve success in life & work. Identify and eliminate mental roadblocks. Develop a positive and growth-oriented mindset.Build confidence and leadership skills.",
  },
  {
    id: 2,
    page: "home_1",
    data_wow_delay: "0.5s",
    icon: service_Icon5,
    title: "Business & Career Mindset Training",
    desc: "Unlock professional success with a winning mindset. Goal setting and strategic thinking. Leadership and decision-making skills. High-performance habits for business growth.  ",
  },
  {
    id: 3,
    page: "home_1",
    data_wow_delay: "0.7s",
    icon: service_Icon6,
    title: "Seminar & Webinar Programs",
    desc: " Live and online sessions to empower individuals and teams. Interactive training on self-motivation, leadership & productivity. Custom-designed workshops for organizations & students. Real-life strategies for achieving excellence. ",
  },
  {
    id: 4,
    page: "home_1",
    data_wow_delay: "0.3s",
    icon: service_Icon4,
    title: "Emotional Intelligence & Stress Management",
    desc: "Master your emotions and build resilience. Techniques to handle stress and anxiety. Develop emotional intelligence for better relationships. Practical strategies to improve focus and well-being. ",
  },
  //   {
  //     id: 5,
  //     page: "home_1",
  //     data_wow_delay: "0.5s",
  //     icon: service_Icon5,
  //     title: "House Renovation",
  //     desc: "We have facility to produce advance work various industrial applications based on specially developed technol-ogy.",
  //   },
  //   {
  //     id: 6,
  //     page: "home_1",
  //     data_wow_delay: "0.7s",
  //     icon: service_Icon6,
  //     title: "Green Building",
  //     desc: "We have facility to produce advance work various industrial applications based on specially developed technol-ogy.",
  //   },

  // home_3

  {
    id: 1,
    page: "inner_page",
    data_wow_delay: ".3s",
    icon: service_thumb1,
    title: "Personal Growth Mastery",
    desc: "Transform your mindset and unlock your full potential with powerful strategies for self-improvement and success.",
  },
  {
    id: 2,
    page: "inner_page",
    data_wow_delay: ".5s",
    icon: service_thumb2,
    title: "Confidence & Leadership",
    desc: "Develop unshakable confidence, enhance leadership skills, and learn to influence and inspire those around you.",
  },
  {
    id: 3,
    page: "inner_page",
    data_wow_delay: ".7s",
    icon: service_thumb3,
    title: "Overcoming Limiting Beliefs",
    desc: "Break free from self-doubt and limiting beliefs that hold you back, and step into a life of purpose and abundance.",
  },
  {
    id: 4,
    page: "inner_page",
    data_wow_delay: ".3s",
    icon: service_thumb4,
    title: "Peak Performance Coaching",
    desc: "Achieve peak performance in your personal and professional life with proven techniques for focus, discipline, and motivation.",
  },
  {
    id: 5,
    page: "inner_page",
    data_wow_delay: ".5s",
    icon: service_thumb5,
    title: "Mindfulness & Stress Management",
    desc: "Learn powerful mindfulness techniques to manage stress, enhance mental clarity, and cultivate a peaceful, balanced life.",
  },
  {
    id: 6,
    page: "inner_page",
    data_wow_delay: ".7s",
    icon: service_thumb6,
    title: "Success & Goal Setting",
    desc: "Design a roadmap to success with actionable goal-setting strategies that turn dreams into reality.",
  },
];

export default service_data;
