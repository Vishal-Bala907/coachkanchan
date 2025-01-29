"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import team_shape from "@/assets/img/team/arrow-shape.png";
import team_shape2 from "@/assets/img/arrow-shape.png";
import team_thumb1 from "@/assets/img/team/01.jpg";
import team_thumb2 from "@/assets/img/team/08.jpg";
import team_thumb3 from "@/assets/img/team/09.jpg";
import team_thumb4 from "@/assets/img/team/10.jpg";

interface DataType {
  id: number;
  title: string;
  name: string;
  thumb: StaticImageData;
}
[];

const team_data: DataType[] = [
  {
    id: 1,
    title: "Electrical engineer",
    name: "Daniel T. Hill",
    thumb: team_thumb1,
  },
  {
    id: 2,
    title: "Senior engineer",
    name: "Robert Daniel",
    thumb: team_thumb2,
  },
  {
    id: 3,
    title: "Marketing Head",
    name: "Sana P. Lesh",
    thumb: team_thumb3,
  },
  {
    id: 4,
    title: "Marketing Head",
    name: "Frank V. Cox",
    thumb: team_thumb4,
  },
];

const Team = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  return (
    <section
      className="team-section fix section-padding bg-cover"
      style={{ backgroundImage: `url(/assets/img/team/team-bg.jpg)` }}
    >
      <div className="container">
        <div className="team-wrapper">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="team-left-content">
                <div className="arrow-shape">
                  <Image src={team_shape} alt="img" />
                </div>
                <div className="section-title">
                  <span className="wow fadeInUp">EXPERT TEAM MEMBERS</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Our expert team will assist Your projects
                  </h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp">
                  With manufacturing facilities in Ankleshwar and Panoli, we
                  specialize in providing custom-made and industry-standard
                  packaging solutions for Agrochemicals, Pesticides, Fungicides,
                  Bio-nutrients, Farm Chemicals, and more.
                </p>
                {/* <div className="team-button wow fadeInUp" data-wow-delay=".7s">
                  <Link href="/team" className="theme-btn-2">
                    View All Teams
                    <span className="shape-img">
                      <Image src={team_shape2} alt="shape-img" />
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>

            <div className="col-xl-7 col-lg-7 mt-5 mt-lg-0">
              <div className="in-team-wrapper">
                     


                {team_data.map((item) => (
                  <div
                    key={item.id}
                    className={`team-item-2 ${
                      item.id === activeId ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveId(item.id)}
                  >
                    <div className="team-member-content">
                      <h4 className="team-member-title">{item.title}</h4>
                      <h4 className="team-member-name">{item.name}</h4>
                    </div>
                    <div className="team-thumb">
                      <Image src={item.thumb} alt="team-member" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
