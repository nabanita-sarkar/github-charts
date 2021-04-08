import UserInfo from "../components/UserInfo";
import Repos from "../components/Repos";
import { useParams, useLocation } from "react-router-dom";

function User() {
  let { id } = useParams();
  const location = useLocation();
  const username = location.state.username;
  console.log(location);
  console.log(id);
  return (
    <>
      <UserInfo username={username} />
      <Repos username={username} />
    </>
  );
}
export default User;
