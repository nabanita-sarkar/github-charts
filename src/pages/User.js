import UserInfo from "../components/UserInfo";
import Repos from "../components/Repos";
import { useLocation } from "react-router-dom";

function User() {
  const location = useLocation().search;
  const params = new URLSearchParams(location);
  const username = params.get("id");
  return (
    <>
      <h1>{username}</h1>
      {/* <UserInfo username={username} />
      <Repos username={username} /> */}
    </>
  );
}
export default User;
