import Categories from "./Categories";
import ResentPost from "./ResentPost";
import Search from "./Search";
import Tags from "./Tags";

const BlogSidebar = () => {
  return (
    <div className="col-12 col-lg-4">
      <div className="main-sidebar">
        {/* <Search /> */}
        {/* <Categories /> */}
        <ResentPost />
        {/* <Tags /> */}
      </div>
    </div>
  );
};

export default BlogSidebar;
