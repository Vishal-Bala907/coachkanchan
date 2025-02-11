import UpdateCourse from "@/components/admin/update-course/UpdateCourse";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <UpdateCourse courseId={id} />;
};

export default Page;
