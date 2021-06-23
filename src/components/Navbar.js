import { PersonIcon, RepoIcon } from "@primer/octicons-react";

function Navbar({ tab, setTab }) {
  return (
    <nav className="flex justify-evenly bg-gray-800 h-16 p-3">
      <button
        className={`flex items-center text-white focus:outline-none py-2 px-5 rounded-md ${
          tab === "user" ? "bg-gray-900" : null
        }`}
        onClick={() => setTab("user")}
      >
        <PersonIcon size={24} /> <span className="text-xl">User</span>
      </button>
      <button
        className={`flex items-center text-white focus:outline-none py-2 px-5 rounded-md ${
          tab === "repo" ? "bg-gray-900" : null
        }`}
        onClick={() => setTab("repo")}
      >
        <RepoIcon size={24} /> <span className="text-xl">Repositories</span>
      </button>
    </nav>
  );
}
export default Navbar;
