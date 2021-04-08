import { PersonIcon, RepoIcon } from "@primer/octicons-react";

function Navbar({ setTab }) {
  return (
    <nav>
      <button onClick={() => setTab("user")}>
        <PersonIcon size={24} /> User
      </button>
      <button onClick={() => setTab("repo")}>
        <RepoIcon size={24} />
        Repositories
      </button>
    </nav>
  );
}
export default Navbar;
