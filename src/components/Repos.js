import {
  RepoIcon,
  RepoForkedIcon,
  IssueOpenedIcon,
  StarIcon,
} from "@primer/octicons-react";
import api from "../utils/api";
import { useEffect, useState } from "react";

function Repos({ username }) {
  const [repos, setRepos] = useState(null);

  const fetchRepos = async () => {
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
  );
}
export default Repos;
