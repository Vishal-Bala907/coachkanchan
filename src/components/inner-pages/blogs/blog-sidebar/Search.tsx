"use client"

const Search = () => {
   return (
      <div className="single-sidebar-widget">
         <div className="wid-title">
            <h5>Search</h5>
         </div>
         <div className="search-widget">
            <form onSubmit={(e) => e.preventDefault()}>
               <input type="text" placeholder="Search here" />
               <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
         </div>
      </div>
   )
}

export default Search
