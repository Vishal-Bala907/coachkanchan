import Link from "next/link"

const Tags = () => {
   return (
      <div className="single-sidebar-widget">
         <div className="wid-title">
            <h5>Tags</h5>
         </div>
         <div className="tagcloud">
            <Link href="/news">News</Link>
            <Link href="/news-details">Construction</Link>
            <Link href="/news-details">Road</Link>
            <Link href="/news-details">Building</Link>
            <Link href="/news-details">Refining</Link>
         </div>
      </div>
   )
}

export default Tags
