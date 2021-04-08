import { useState } from "react";
import axios from "axios";
import "./App.css";
import {
  RepoIcon,
  RepoForkedIcon,
  IssueOpenedIcon,
  StarIcon,
} from "@primer/octicons-react";
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
    <div className="flex justify-center items-center bg-gray-900 overflow-hidden h-full lg:p-24 md:p-10 p-5">
      <div>
        {hasGotUsername === false ? (
          <div className="p-10 mb-20">
            <h1 className="text-center text-4xl sm:text-4xl md:text-5xl font-extrabold text-gray-200 pb-10">
              Enter Your Github Username
            </h1>
            <form onSubmit={fetchUserData} className="text-center">
              <input
                className="text-center focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none w-90 text-big text-gray-300 placeholder-gray-500 border border-gray-600 ring-2 ring-gray-600 rounded-md py-2 bg-gray-800"
                placeholder=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </form>
          </div>
        ) : null}
        {hasGotUsername ? (
          <div>
            <div className="text-center grid grid-cols-1 pb-5 ">
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

            <div className="text-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
              <div className="bg-gray-800 rounded-md p-5">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-200">
                  {data.public_repos}
                </h3>
                <h3 className="text-xl font-bold text-gray-400">
                  Public Repositories
                </h3>
              </div>
              <div className="bg-gray-800 rounded-md p-5">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-200">
                  {data.public_gists}
                </h3>
                <h3 className="text-xl font-bold text-gray-400">
                  Public Gists
                </h3>
              </div>
              <div className="bg-gray-800 rounded-md p-5">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-200">
                  {data.followers}
                </h3>
                <h3 className="text-xl font-bold text-gray-400">Followers</h3>
              </div>
              <div className="bg-gray-800 rounded-md p-5">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-200">
                  {data.following}
                </h3>
                <h3 className="text-xl font-bold text-gray-400">Following</h3>
              </div>
            </div>
            <h3 className="text-center text-2xl lg:text-3xl font-bold text-purple-500 mt-10 mb-5">
              All Repositories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
              {repos.map((repo) => {
                return (
                  <a key={repo.id} href={repo.html_url}>
                    <div className="bg-gray-800 rounded-md p-5 hover:transform scale-125">
                      <h1 className="text-xl font-bold text-gray-300 hover:underline hover:underline-2">
                        <RepoIcon size={24} /> {repo.name}
                      </h1>
                      <p className="text-gray-400">{repo.description}</p>

                      <div className="flex mt-5 ">
                        <span className="text-gray-400 flex justify-start">
                          Language {repo.language}
                        </span>
                        <div className="ml-auto flex items-center align-middle ">
                          <span className="text-gray-400 mr-2">
                            <StarIcon className="text-base align-middle" />{" "}
                            {repo.stargazers_count}
                          </span>
                          <span className="text-gray-400 mr-2">
                            <RepoForkedIcon className="text-base" />{" "}
                            {repo.forks_count}
                          </span>
                          <span className="text-gray-400">
                            <IssueOpenedIcon className="text-base" />{" "}
                            {repo.open_issues_count}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
