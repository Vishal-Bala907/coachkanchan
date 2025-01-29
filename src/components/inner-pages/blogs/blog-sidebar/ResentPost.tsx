import Link from "next/link";

interface DataType {
  id: number;
  img: string;
  title: string;
  date: string;
}
[];

const recent_post: DataType[] = [
  {
    id: 1,
    img: "/assets/img/news/pp1.jpg",
    title: "Sustainable Packaging",
    date: "15 Dec, 2024",
  },
  {
    id: 2,
    img: "/assets/img/news/pp2.jpg",
    title: "Custom Blow & Injection Molded Plastic Solutions",
    date: "29 Feb, 2024",
  },
  {
    id: 3,
    img: "/assets/img/news/pp3.jpg",
    title: "Energetically Envisioned is User Friendly",
    date: "18 Dec, 2024",
  },
];

const ResentPost = () => {
  return (
    <div className="single-sidebar-widget">
      <div className="wid-title">
        <h5>Resent post</h5>
      </div>
      <div className="popular-posts">
        {recent_post.map((item, idx) => (
          <div key={item.id} className="single-post-item">
            <div
              className="thumb bg-cover"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div className="post-content">
              <div className="post-date">
                <i className="far fa-calendar-alt"></i>
                {item.date}
              </div>
              <h6>
                <Link href={`/blog-${idx}`}>{item.title}</Link>
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResentPost;
