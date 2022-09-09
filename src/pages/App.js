import { useState } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const history = useHistory();
  const fetchStats = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/user",
      search: `?id=${username}`,
    });
  };
  return (
    <div className="h-full flex justify-center items-center bg-gray-900 overflow-hidden lg:p-24 md:p-10 p-5">
      <div className="p-10 mb-20">
        <h1 className="text-center text-4xl sm:text-4xl md:text-5xl font-extrabold text-gray-200 pb-10">
          Enter Your Github Username
        </h1>
        <form onSubmit={fetchStats} className="text-center">
          <input
            className="w-3/5 text-center focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none w-90 text-big text-gray-300 placeholder-gray-500 border border-gray-600 ring-2 ring-gray-600 rounded-md py-2 bg-gray-800"
            placeholder=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
