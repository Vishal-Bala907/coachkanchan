"use client"
import ImagePopup from "@/modals/ImagePopup";
import Image from "next/image";
import { useState } from "react";

// Import all gallery images
import gallery_img1 from "@/assets/img/gallery/01.jpg";
import gallery_img2 from "@/assets/img/gallery/02.jpg";
import gallery_img3 from "@/assets/img/gallery/03.jpg";
import gallery_img4 from "@/assets/img/gallery/04.jpg";
import gallery_img5 from "@/assets/img/gallery/05.jpg";
import gallery_img6 from "@/assets/img/gallery/06.jpg";

const GalleryArea = () => {
   const [photoIndex, setPhotoIndex] = useState<number | null>(null);
   const [isOpen, setIsOpen] = useState(false);

   const handleImagePopup = (i: number) => {
      setPhotoIndex(i);
      setIsOpen(true);
   };

   const images = [
      gallery_img1.src,
      gallery_img2.src,
      gallery_img3.src,
      gallery_img4.src,
      gallery_img5.src,
      gallery_img6.src,
   ];

   return (
      <>
         <div className="gallery-section">
            <div className="gallery-wrapper">
               <div className="row g-4">
                  <div className="col-lg-6">
                     <div className="row g-4">
                        <div className="col-lg-12">
                           <div className="gallery-image">
                              <Image src={gallery_img1} alt="gallery-img" />
                              <a
                                 onClick={() => handleImagePopup(0)}
                                 style={{ cursor: "pointer" }}
                                 className="icon img-popup"
                              >
                                 <i className="fa-solid fa-magnifying-glass"></i>
                              </a>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                           <div className="gallery-image-2 bg-cover">
                              <Image
                                 src={gallery_img2}
                                 alt="gallery-img"
                                 style={{ objectFit: "cover" }}
                              />
                              <a
                                 onClick={() => handleImagePopup(1)}
                                 style={{ cursor: "pointer" }}
                                 className="icon img-popup"
                              >
                                 <i className="fa-solid fa-magnifying-glass"></i>
                              </a>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                           <div className="gallery-image-2 bg-cover">
                              <Image
                                 src={gallery_img3}
                                 alt="gallery-img"
                                 style={{ objectFit: "cover" }}
                              />
                              <a
                                 onClick={() => handleImagePopup(2)}
                                 style={{ cursor: "pointer" }}
                                 className="icon img-popup"
                              >
                                 <i className="fa-solid fa-magnifying-glass"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="gallery-image-3 bg-cover">
                        <Image
                           src={gallery_img4}
                           alt="gallery-img"
                           style={{ objectFit: "cover" }}
                        />
                        <a
                           onClick={() => handleImagePopup(3)}
                           style={{ cursor: "pointer" }}
                           className="icon img-popup"
                        >
                           <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className="gallery-image-4 bg-cover">
                        <Image
                           src={gallery_img5}
                           alt="gallery-img"
                           style={{ objectFit: "cover" }}
                        />
                        <a
                           onClick={() => handleImagePopup(4)}
                           style={{ cursor: "pointer" }}
                           className="icon img-popup"
                        >
                           <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="gallery-image-4 bg-cover">
                        <Image
                           src={gallery_img6}
                           alt="gallery-img"
                           style={{ objectFit: "cover" }}
                        />
                        <a
                           onClick={() => handleImagePopup(5)}
                           style={{ cursor: "pointer" }}
                           className="icon img-popup"
                        >
                           <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {isOpen && photoIndex !== null && (
            <ImagePopup
               images={images}
               setIsOpen={setIsOpen}
               photoIndex={photoIndex}
               setPhotoIndex={setPhotoIndex}
            />
         )}
      </>
   );
};

export default GalleryArea;
