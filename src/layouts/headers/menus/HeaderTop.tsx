import Link from "next/link";

const HeaderTop = () => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="top-header-wrapper">
          <ul>
            <li>
              <i className="fas fa-paper-plane me-2"></i>
              <Link href="mailto:info@example.com" className="link">
                info@kanchan.co.in
              </Link>
            </li>
            <li>
              {/* <i className="fas fa-map-marker-alt me-2"></i> */}
              {/* F-7, Arunoday Complex, Opp. Little Hut, GIDC Estate Ankleshwar. */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
