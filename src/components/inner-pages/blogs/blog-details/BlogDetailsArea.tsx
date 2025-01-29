import Image from "next/image";
import BlogDetailsComment from "./BlogDetailsComment";
import BlogSidebar from "../blog-sidebar";
import BlogForm from "@/components/forms/BlogForm";

import icon_1 from "@/assets/img/icon/construct.svg";
import icon_2 from "@/assets/img/icon/comments.svg";
import blog_thumb1 from "@/assets/img/news/post5.jpg";
import blog_thumb2 from "@/assets/img/news/post6.jpg";
import Link from "next/link";

interface ContentType {
  title_1: string;
  title_2: string;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  desc_3: JSX.Element;
  desc_4: JSX.Element;
}

const blog_details_content: ContentType = {
  title_1: "Sustainable Packaging: The Future of Plastic Manufacturing",
  title_2: "Why Sustainable Packaging Matters",
  desc_1: (
      <>
        The packaging industry is undergoing a transformation, driven by the urgent need for sustainable solutions. At Navkar, we are at the forefront of this change, combining innovation with environmental stewardship to redefine the way plastic packaging is manufactured. Here’s how Navkar is leading the charge toward a greener future.
      </>
  ),
  desc_2: (
      <>
        Sustainability is no longer an option—it’s a necessity. With increasing environmental concerns, industries are moving towards eco-friendly packaging solutions to reduce waste and minimize their carbon footprint. Navkar recognizes this responsibility and has integrated sustainability into every aspect of its operations.
      </>
  ),
  desc_3: (
      <>
        One of the cornerstones of sustainable packaging is the use of eco-friendly materials. At Navkar, we focus on:
        <ul>
          <li><strong>Recyclable Plastics:</strong> Ensuring our products can be reprocessed and reused, reducing landfill waste.</li>
          <li><strong>Bio-Based Alternatives:</strong> Exploring materials derived from renewable sources to lower environmental impact.</li>
          <li><strong>Lightweight Packaging:</strong> Reducing material usage without compromising durability.</li>
        </ul>
        Our state-of-the-art manufacturing facilities are designed to optimize energy consumption. By adopting energy-efficient equipment and green technology like solar-powered systems, we minimize power usage and reduce emissions.
      </>
  ),
  desc_4: (
      <>
        Sustainable packaging offers numerous benefits:
        <ul>
          <li><strong>Environmental Impact:</strong> Reduces pollution and conserves natural resources.</li>
          <li><strong>Brand Value:</strong> Companies adopting eco-friendly practices gain trust and loyalty.</li>
          <li><strong>Regulatory Compliance:</strong> Aligns with evolving environmental laws and standards.</li>
        </ul>
        At Navkar, we believe in creating a future where innovation meets responsibility. By continuously investing in research and development, we aim to set new benchmarks for sustainable packaging in the industry. Join us in shaping a sustainable future and explore our eco-friendly packaging solutions today.
      </>
  ),
};

const { title_1, title_2, desc_1, desc_2, desc_3, desc_4 } =
    blog_details_content;

const BlogDetailsArea = () => {
  return (
      <section className="news-section fix section-padding">
        <div className="container">
          <div className="news-details-area">
            <div className="row g-5">
              <div className="col-12 col-lg-8">
                <div className="blog-post-details">
                  <div className="single-blog-post">
                    <div
                        className="post-featured-thumb bg-cover"
                        style={{
                          backgroundImage: `url(/assets/img/news/post1.jpg)`,
                        }}
                    ></div>
                    <div className="post-content">
                      <ul className="post-list d-flex align-items-center">
                        <li>
                          <Image src={icon_1} alt="icon-img" />
                          Construct Ion
                        </li>
                        <li>
                          <Image src={icon_2} alt="icon-img" />0 Comments
                        </li>
                      </ul>
                      <h3>{title_1}</h3>
                      <p>{desc_1}</p>
                      <div className="hilight-text mt-5 mb-4">
                        <p>{desc_2}</p>
                        <svg
                            width="36"
                            height="26"
                            viewBox="0 0 36 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              d="M0 15.3698H7.71428L2.57139 25.5546H10.2857L15.4286 15.3698V0.0924683H0V15.3698Z"
                              fill="#EC2D2D"
                          ></path>
                          <path
                              d="M20.5703 0.0924683V15.3698H28.2846L23.1417 25.5546H30.856L35.9989 15.3698V0.0924683H20.5703Z"
                              fill="#EC2D2D"
                          ></path>
                        </svg>
                      </div>
                      <p className="mt-4 mb-5">{desc_3}</p>
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <div className="details-image">
                            <Image src={blog_thumb1} alt="img" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="details-image">
                            <Image src={blog_thumb2} alt="img" />
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-5">{title_2}</h3>
                      <p>{desc_4}</p>
                    </div>
                  </div>
                  <div className="row tag-share-wrap mt-4 py-4 bor-top bor-bottom mt-5 mb-5">
                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      <div className="social-share">
                        <span className="me-3">Share:</span>
                        <Link href="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link href="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <BlogDetailsComment /> */}
                  {/* <BlogForm /> */}
                </div>
              </div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
  );
};

export default BlogDetailsArea;