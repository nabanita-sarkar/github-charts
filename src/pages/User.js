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
    <>
      <Navbar setTab={setTab} />
      <h1>{username}</h1>
      {tab === "user" ? (
        // <UserInfo username={username} />
        <>
          <p>User</p>
          <Chart username={username} />
        </>
      ) : (
        // <Repos username={username} />
        <p>Repo</p>
      )}
    </>
  );
}
export default User;
