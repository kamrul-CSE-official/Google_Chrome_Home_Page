import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar: React.FC = () => {
  const [first, setfirst] = useState("");
  //   const handleSearchChange = (event: String) => {
  //     console.log(event.target.value);
  //   };
  return (
    <div className="text-center p-4">
      <div className="w-auto flex items-center justify-center gap-2">
        <div className="w-1/2">
          <input
            // onChange={handleSearchChange(event:String)}
            type="text"
            placeholder="Search..."
            className="input input-bordered input-warning w-full"
          />
        </div>
        <div className="w-auto flex items-center justify-center gap-2">
          <select className="select select-error">
            <option>Google</option>
            <option>Bing</option>
            <option>DuckDuckGo</option>
            <option>Sanity</option>
          </select>
          <button className="btn btn-success">Search</button>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default SearchBar;
