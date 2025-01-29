import Image from "next/image";
import BlogForm from "@/components/forms/BlogForm";

import icon_1 from "@/assets/img/icon/construct.svg";
import icon_2 from "@/assets/img/icon/comments.svg";
import blog_thumb1 from "@/assets/img/news/post5.jpg";
import blog_thumb2 from "@/assets/img/news/post6.jpg";
import Link from "next/link";
import BlogSidebar from "../../blog-sidebar";

interface ContentType {
  title_1: string;
  title_2: string;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  desc_3: JSX.Element;
  desc_4: JSX.Element;
}

const blog_details_content: ContentType = {
  title_1: "Packaging Innovations for Pharmaceuticals: Meeting Safety and Precision Standards",
  title_2: "Why Choose Navkar for Pharmaceutical Packaging?",
  desc_1: (
      <>
        The pharmaceutical industry demands the highest level of safety, precision, and compliance in packaging to protect products and ensure patient well-being. Navkar is a trusted partner in providing innovative solutions tailored to these critical requirements.
      </>
  ),
  desc_2: (
      <>
        <h4>Unique Challenges in Pharmaceutical Packaging</h4>
        <ul>
          <li><strong>Product Integrity:</strong> Ensuring that medicines remain uncontaminated and effective throughout their shelf life.</li>
          <li><strong>Accurate Dosing:</strong> Precision in measuring liquid or powdered medications to avoid under or overdosing.</li>
          <li><strong>Regulatory Compliance:</strong> Adhering to strict standards set by global health authorities for packaging.</li>
        </ul>
      </>
  ),
  desc_3: (
      <>
        <h4>Navkar’s Solutions for Safety and Precision</h4>
        <ul>
          <li><strong>Leak-Proof Bottles:</strong> Designed with advanced technology to prevent spills or contamination, ensuring the integrity of liquid medications.</li>
          <li><strong>Accurate Measuring Cups:</strong> Created with precision to enable exact dosing, simplifying usage for both healthcare professionals and patients.</li>
          <li><strong>Tamper-Evident Closures:</strong> Providing clear evidence of any interference, these closures enhance product safety and build consumer trust.</li>
        </ul>
      </>
  ),
  desc_4: (
      <>
        <h4>Beyond Safety: Innovation in Design</h4>
        <p>Navkar’s pharmaceutical packaging solutions are not just functional but also innovative, ensuring ease of use, aesthetic appeal, and enhanced brand identity.</p>
        <h4>Why Choose Navkar for Pharmaceutical Packaging?</h4>
        <ul>
          <li><strong>Expertise in Material Science:</strong> Our team uses high-quality materials that meet pharmaceutical-grade standards.</li>
          <li><strong>Customized Solutions:</strong> From unique designs to specific functional features, we cater to the diverse needs of the pharmaceutical industry.</li>
          <li><strong>Commitment to Excellence:</strong> Each product undergoes rigorous testing to ensure compliance and reliability.</li>
        </ul>
        <p>With Navkar’s packaging innovations, pharmaceutical companies can achieve the perfect balance of safety, precision, and quality. Trust us to deliver solutions that safeguard health and uphold your brand’s reputation.</p>
      </>
  ),
};

const { title_1, title_2, desc_1, desc_2, desc_3, desc_4 } = blog_details_content;

const BlogContent3 = () => {
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
                </div>
              </div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
  );
};

export default BlogContent3;