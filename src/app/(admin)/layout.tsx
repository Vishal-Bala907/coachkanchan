import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

const layout = ({ children }: any) => {
  return (
    <Wrapper>
      <HeaderOne headerTop={true} />
      {children}
      <FooterOne />
    </Wrapper>
  );
};

export default layout;
