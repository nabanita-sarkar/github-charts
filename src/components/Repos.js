import {
  RepoIcon,
  RepoForkedIcon,
  IssueOpenedIcon,
  StarIcon,
} from "@primer/octicons-react";
import api from "../utils/api";
import { useEffect, useState } from "react";
import langColors from "../utils/langColors";

function Repos({ username }) {
  const [repos, setRepos] = useState(null);

  const fetchRepos = () => {
    api.get(`/users/${username}/repos`).then((res) => {
      setRepos(res.data);
    });
  };
  useEffect(() => {
    fetchRepos();
  }, []);

  if (repos === null) return null;

  return (
    <div className="bg-gray-900  lg:p-24 md:p-10 p-5">
      <h3 className="text-center text-2xl lg:text-3xl font-bold text-purple-500 mt-10 mb-5">
        All Repositories
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {repos.map((repo) => {
          return (
            <a key={repo.id} href={repo.html_url}>
              <div className="flex flex-col h-full bg-gray-800 rounded-md p-5 transition-transform hover:scale-105">
                <h1 className="break-words text-xl font-bold text-gray-300 hover:underline hover:underline-2">
                  <RepoIcon size={24} /> {repo.name}
                </h1>
                <p className="text-gray-400 mb-5">{repo.description}</p>
                <div className="flex items-end mt-auto">
                  <div className="flex justify-start items-baseline gap-2">
                    {repo.language && (
                      <>
                        <div
                          style={{
                            borderColor: `${langColors[repo.language]}`,
                            // backgroundColor: `${langColors[repo.language]}`,
                          }}
                          className="h-3 w-3 border-2 rounded"
                        ></div>
                        <span className="text-gray-400 ">{repo.language}</span>
                      </>
                    )}
                  </div>
                  <div className="gap-2 text-gray-400 ml-auto flex flex-none items-center align-middle ">
                    {/* <div className=" mr-2"> */}
                    <StarIcon className="text-base align-middle -mr-1" />{" "}
                    <span>{repo.stargazers_count}</span>
                    {/* </div>
                    <div className="text-gray-400 mr-2"> */}
                    <RepoForkedIcon className="text-base -mr-1" />{" "}
                    <span>{repo.forks_count}</span>
                    {/* </div>
                    <div className="text-gray-400"> */}
                    <IssueOpenedIcon className="text-base -mr-1" />{" "}
                    <span>{repo.open_issues_count}</span>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
export default Repos;
