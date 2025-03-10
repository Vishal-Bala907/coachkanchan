import React from "react";
import BookingForm from "./BookingForm";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

const BookEvent = () => {
  return (
    <>
      <HeaderOne headerTop={true} />
      <BookingForm />
      <FooterOne />
    </>
  );
};

export default BookEvent;
