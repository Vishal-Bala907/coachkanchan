import Image from "next/image";
import shape_1 from "@/assets/img/mask-shape.png";
import Link from "next/link";

const BreadCrumb = ({ title }: any) => {
  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{
        backgroundImage: `url(/assets/img/gallery/sunset-5033708_1920.jpg`,
      }}
    >
      <div className="mask-shape">
        <Image src={shape_1} alt="shape-img" />
      </div>
      <div className="container">
        <div className="page-heading">
          <h1>{title}</h1>
          <ul className="breadcrumb-items">
            <li>
              <Link href="/">Home Page</Link>
            </li>
            <li>
              <i className="fa-solid fa-chevron-right"></i>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
