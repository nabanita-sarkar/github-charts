import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [hasGotUsername, setHasGotUsername] = useState(false);
  const [username, setUsername] = useState("");
  const [data, setData] = useState();
  const [repos, setRepos] = useState();

  const fetchUserData = async (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${username}`).then((res) => {
      setData(res.data);
    });
    axios.get(`https://api.github.com/users/${username}/repos`).then((res) => {
      setRepos(res.data);
      setHasGotUsername(true);
    });
  };
  return (
    <div className="flex justify-center items-center bg-gray-900 overflow-hidden text-center h-full p-24">
      <div>
        {hasGotUsername === false ? (
          <div className="p-10 mb-20">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-gray-200 pb-10">
              Enter Your Github Username
            </h1>
            <form onSubmit={fetchUserData}>
              <input
                className="focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none w-90 text-big text-gray-300 placeholder-gray-500 border border-gray-600 ring-2 ring-gray-600 rounded-md py-2 pl-10 bg-gray-800"
                placeholder=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </form>
          </div>
        ) : null}
        {hasGotUsername ? (
          <div>
            <div className="grid grid-cols-1 pb-5 ">
              <div className="flex justify-center items-center pb-5 ">
                <img
                  src={data.avatar_url}
                  alt="Profile"
                  className="rounded-full w-48 md:w-64 border-4 border-transparent ring-2 ring-purple-500"
                />
              </div>
              <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-gray-200 pb-5">
                {data.name}
              </h1>
              <a
                className="text-4xl sm:text-4xl md:text-5xl font-bold text-purple-500 mb-5 hover:underline hover:underline-2"
                href={data.html_url}
              >
                @{username}
              </a>
              <h3 className="text-2xl font-bold text-gray-400">
                {data.created_at}
              </h3>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
