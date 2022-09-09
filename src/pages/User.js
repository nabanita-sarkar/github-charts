import UserInfo from "../components/UserInfo";
import Repos from "../components/Repos";
import Chart from "../components/Chart";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function User() {
  const location = useLocation().search;
  const params = new URLSearchParams(location);
  const username = params.get("id");

  const [tab, setTab] = useState("user");

  const [readme, setReadme] = useState("");

  useEffect(() => {
    const data = `https://raw.githubusercontent.com/${username}/${username}/main/README.md`;

    axios(data)
      .then((val) => {
        setReadme(val.data);
      })
      .catch(() => {
        const data = `https://raw.githubusercontent.com/${username}/${username}/master/README.md`;
        axios(data).then((val) => {
          setReadme(val.data);
        });
      });
  }, [username]);

  return (
    <body className="bg-gray-900 h-screen">
      <Navbar tab={tab} setTab={setTab} />
      {tab === "user" ? (
        <>
          <UserInfo username={username} />
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols1 sm:grid-cols-1">
            <article className="prose lg:prose-xl m-16">
              <ReactMarkdown skipHtml>{readme}</ReactMarkdown>
            </article>
            <Chart username={username} />
          </div>
        </>
      ) : (
        <Repos username={username} />
      )}
    </body>
  );
}
export default User;
