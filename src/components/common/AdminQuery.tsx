import React, { useEffect } from "react";
import dummyData from "@/types/queryData";
import { Query, QueryUser } from "@/types/query";
import AdminQuerySidebar from "./query/AdminQuerySidebar";
import AdminQueryArea from "./query/AdminQueryArea";
import { getAllQueries } from "../server/common/courseReview";
const AdminQuery = () => {
  // fetch the queries
  const [queries, setQueries] = React.useState<Query[] | []>([]);
  const [user, setQueryUsers] = React.useState<QueryUser[] | []>([]);
  const [selectedUserId, setSelectedUserId] = React.useState<String | null>("");

  useEffect(() => {
    getAllQueries()
      .then((res) => {
        // console.log(res);

        setQueryUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        minHeight: "85vh",
      }}
      className="d-flex flex-lg-row "
    >
      <AdminQuerySidebar
        dummyData={user}
        setQueries={setQueries}
        setSelectedUserId={setSelectedUserId}
      />
      <AdminQueryArea
        queries={queries}
        selectedUserId={selectedUserId}
        setQueries={setQueries}
      />
    </div>
  );
};

export default AdminQuery;
