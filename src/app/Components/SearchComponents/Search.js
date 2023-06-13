import React from "react";
import { FcSearch } from "react-icons/fc";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <div className="text-center w-full flex-1 items-center justify-center">
        <form>
          <div className="relative m-4 p-5">
            <a className="absolute top-0 mx-auto">
              <h4 className="txt-ne h3">
                <div>
                  “নিশ্চয় আল্লাহ্ সব কিছু দেখেন, এবং প্রতিটি জিনিসেরই তিনি হিসাব
                  নিবেন।” 📖
                </div>
              </h4>
            </a>
          </div>
          <input
            type="text"
            placeholder="Google..."
            className="input input-bordered input-success w-1/2"
          />
          <button className="btn btn-success mx-1 hover:text-white">
            Search <FcSearch size="25" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
