"use client";
import { useState } from "react";
import faq_img from "@/assets/img/faq.jpg";
import Image from "next/image";

interface DataType {
  id: number;
  title: string;
  desc: JSX.Element;
  space?: string;
  data_wow_delay: string;
}
[];

const faq_data: DataType[] = [
  {
    id: 1,
    data_wow_delay: ".3s",
    space: "mb-3",
    title: "What services does Kanchan Ma’am offer?",
    desc: (
      <>
        <ol type="1">
          <li>
            <b>Personal Growth Coaching </b> – Transform your mindset for
            success.
          </li>
          <li>
            <b>Business & Career Training</b> – Develop leadership and
            professional skills.
          </li>
          <li>
            <b> Seminar & Webinar Programs</b> – Interactive sessions on
            motivation, productivity, and mindset.
          </li>
          <li>
            <b>Emotional Intelligence & Stress Management</b> – Techniques to
            master emotions and build resilience.
          </li>
        </ol>
        {/* Yes, we specialize in designing and manufacturing custom bottles, caps,
        closures, and measuring cups tailored to your specific needs. */}
      </>
    ),
  },
  {
    id: 2,
    data_wow_delay: ".5s",
    space: "mb-3",
    title: "Who can benefit from these coaching programs?",
    desc: (
      <>
        <ul>
          <li>
            Anyone looking for personal or professional growth can benefit,
            including:
            <ul>
              <li>Entrepreneurs & Business Owners</li>
              <li>Working Professionals & Corporate Teams</li>
              <li>Students & Job Seekers</li>
              <li> Individuals Seeking Self-Improvement</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    data_wow_delay: ".7s",
    space: "mb-3",
    title: "How can I book a coaching session?",
    desc: (
      <>
        You can book a session through the Contact Us page or by reaching out
        via:
        <table>
          <tbody>
            <tr>
              <td>Email : </td>
              <td> info@coachkanchan.com</td>
            </tr>
            <tr>
              <td>Phone / WhatsApp:</td>
              <td>90962 07767</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 4,
    data_wow_delay: ".9s",
    title: "Are these programs available online?",
    desc: (
      <>
        Yes! Kanchan Ma’am offers both online and offline coaching. You can join
        live webinars, book one-on-one coaching calls, or attend in-person
        seminars.
      </>
    ),
  },
  {
    id: 5,
    data_wow_delay: ".9s",
    title: "What types of courses are available?",
    desc: (
      <>
        <ul>
          <li> Mindset Mastery Program</li>
          <li> Success Blueprint for Entrepreneurs</li>
          <li>Confidence & Leadership Coaching</li>
          <li> Breakthrough Goal-Setting Workshop</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    data_wow_delay: ".9s",
    title: "Can companies book Kanchan Ma’am for corporate training?",
    desc: (
      <>
        Absolutely! Kanchan Ma’am conducts corporate training programs designed
        for employee motivation, leadership development, and team productivity.
        Contact us for a customized workshop.
      </>
    ),
  },
  {
    id: 7,
    data_wow_delay: ".9s",
    title: "Where can I find success stories and testimonials?",
    desc: (
      <>
        You can visit our Gallery and Testimonials sections to see photos,
        videos, and success stories of people who have transformed their lives
        through Kanchan Ma’am’s coaching.
      </>
    ),
  },
];

const Faq = ({ style }: any) => {
  const [activeId, setActiveId] = useState<number>(1);

  const toggleAccordion = (id: number) => {
    setActiveId((prevActiveId) => (prevActiveId === id ? -1 : id));
  };

  return (
    <>
      {faq_data.map((item) => (
        <div
          key={item.id}
          className={`accordion-item ${style ? "mb-3" : ""} ${
            item.space
          } wow fadeInUp`}
          data-wow-delay={item.data_wow_delay}
        >
          <h5 className="accordion-header">
            <button
              onClick={() => toggleAccordion(item.id)}
              className={`accordion-button ${
                activeId !== item.id ? "collapsed" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#faq${item.id}`}
              aria-expanded="false"
              aria-controls={`${item.id}`}
            >
              {item.title}
            </button>
          </h5>
          <div
            id={`${item.id}`}
            className={`accordion-collapse collapse ${
              activeId === item.id ? "show" : ""
            }`}
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">{item.desc}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
