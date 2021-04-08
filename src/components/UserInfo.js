import api from "../utils/api";
import { useEffect, useState } from "react";

function UserInfo({ username }) {
  const [data, setData] = useState(null);
  console.log(username);

  const fetchUserData = async () => {
    api.get(`/users/${username}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  if (data === null) return <p>Loading ...</p>;
  return (
    <div className="bg-gray-900  lg:p-24 md:p-10 p-5">
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
        <h3 className="text-2xl font-bold text-gray-400">{data.created_at}</h3>
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
          <h3 className="text-xl font-bold text-gray-400">Public Gists</h3>
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
    </div>
  );
}
export default UserInfo;
