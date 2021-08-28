import UserInfo from "../components/UserInfo";
import Repos from "../components/Repos";
import Chart from "../components/Chart";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function User() {
  const location = useLocation().search;
  const params = new URLSearchParams(location);
  const username = params.get("id");

  const [tab, setTab] = useState("user");

  return (
    <body className="bg-gray-900 h-screen">
      <Navbar tab={tab} setTab={setTab} />
      {tab === "user" ? (
        <>
          <UserInfo username={username} />
          <Chart username={username} />
        </>
      ) : (
        <Repos username={username} />
      )}
    </body>
  );
}
export default User;
