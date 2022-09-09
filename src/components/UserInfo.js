import api from "../utils/api";
import { CalendarIcon } from "@primer/octicons-react";

import { useEffect, useState } from "react";

function UserInfo({ username, children }) {
  const [data, setData] = useState(null);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const fetchUserData = () => {
    api.get(`/users/${username}`).then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  if (data === null) return <p>Loading ...</p>;
  return (
    <div className="bg-gray-900">
      <div className="grid grid-cols-3 md:grid-cols-3 pb-5 gap-5">
        <div className="flex justify-center items-center pb-5 ">
          <img
            src={data.avatar_url}
            alt="Profile"
            className="rounded-full w-36 md:w-36 border-4 border-transparent ring-2 ring-purple-500"
          />
        </div>
        <div className="col-span-2 flex flex-col justify-center text-left">
          <h1 className="text-4xl sm:text-3xl md:text-4xl font-extrabold text-gray-200 pb-5">
            {data.name}
          </h1>
          <h2 className="mb-3">
            <a
              className="text-3xl sm:text-3xl md:text-3xl font-bold text-purple-500 hover:underline hover:underline-2"
              href={data.html_url}
            >
              @{username}
            </a>
          </h2>
          <h3 className="text-xl font-semibold text-gray-400">
            <CalendarIcon
              size={24}
              className="text-xl font-semibold text-gray-400"
            />{" "}
            Joined on {formatDate(data.created_at)}
          </h3>
        </div>
      </div>
      <div className="text-center grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-5 py-5">
        <Card title={data.public_repos} desc="Public Repositories" />
        <Card title={data.public_gists} desc="Public Gists" />
        <Card title={data.followers} desc="Followers" />
        <Card title={data.following} desc="Following" />
      </div>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="bg-gray-800 rounded-md p-5">
      <h3 className="text-xl lg:text-2xl font-bold text-gray-200">{title}</h3>
      <h3 className="text-lg leading-5 font-semibold text-gray-400">{desc}</h3>
    </div>
  );
}
export default UserInfo;
