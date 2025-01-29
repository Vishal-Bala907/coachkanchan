import BreadCrumb from "@/components/common/BreadCrumb"
import GalleryArea from "./GalleryArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const Gallery = () => {
   return (
      <>
         <HeaderOne headerTop={false} />
         <BreadCrumb title="Our Gallery" />
         <GalleryArea />
         <FooterOne />
      </>
   )
}

export default Gallery
