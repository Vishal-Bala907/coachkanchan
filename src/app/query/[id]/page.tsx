import UserQueryArea from "@/components/common/query/UserQueryArea";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <UserQueryArea id={id} />
    </div>
  );
};

export default Page;
