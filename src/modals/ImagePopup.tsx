"use client";
import React from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

interface ImagePopupProps {
   images: string[];
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   photoIndex: number | null;
   setPhotoIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const ImagePopup: React.FC<ImagePopupProps> = ({
   images,
   setIsOpen,
   photoIndex,
   setPhotoIndex,
}) => {
   if (photoIndex === null) return null;

   return (
      <Lightbox
         mainSrc={images[photoIndex]}
         nextSrc={images[(photoIndex + 1) % images.length]}
         prevSrc={images[(photoIndex + images.length - 1) % images.length]}
         onCloseRequest={() => setIsOpen(false)}
         onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
         }
         onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
         }
      />
   );
};

export default ImagePopup;
