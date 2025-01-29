import blog_shape1 from "@/assets/img/arrow-shape.png";
import blog_data from "@/data/BlogData";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section className="news-section fix section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="wow fadeInUp"> NEWS & BLOG</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Our Latest News & Blog
            </h2>
          </div>
          <div className="news-button wow fadeInUp" data-wow-delay=".5s">
            <Link href="/news-details" className="theme-btn-2">
              View All News
              <span className="shape-img">
                <Image src={blog_shape1} alt="shape-img" />
              </span>
            </Link>
          </div>
        </div>

        <div className="row">
          {blog_data
            .filter((items) => items.page === "home_1")
            .map((item, idx) => (
              <div
                key={item.id}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={item.data_wow_delay}
              >
                <div className="single-news-items">
                  <div className="news-image">
                    <Image src={item.thumb} alt="news-img" />
                    <ul className="post-date">
                      <li>
                        <i className="fa-regular fa-calendar-days"></i>
                        {item.date}
                      </li>
                    </ul>
                  </div>
                  <div className="news-content">
                    <ul className="post-list d-flex align-items-center">
                      <li>
                        <i className="fa-solid fa-user"></i>
                        By Admin
                      </li>
                      <li>
                        <i className="fa-solid fa-tag"></i>
                        {item.tag}
                      </li>
                    </ul>
                    <h4>
                      <Link href="/news-details">{item.title}</Link>
                    </h4>
                    <Link
                      href={`/blog-${idx}`}
                      className="theme-btn-2 padding-style"
                    >
                      Read More
                      <span className="shape-img">
                        <Image src={blog_shape1} alt="shape-img" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
