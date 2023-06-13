"use client";
import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FcSearch } from "react-icons/fc";
import "./Search.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState(""); // Use useState instead of useReducer

  const searchInputChange = (event) => {
    let search = event.target.value;
    setSearchValue(search);
  };

  const handleGoogleSearch = (event) => {
    event.preventDefault();
    alert(searchValue);
  };

  const [text] = useTypewriter({
    words: [
      "তোমরা তোমাদের চোখকে নিচু করে রাখ এবং লজ্জাস্থানের হেফজত করো। (মুসনাদে আহমাদ)",
      "হে আলি! বার বার দৃষ্টি ক্ষেপণ করো না। কারণ হঠাৎ দৃষ্টিতে তোমার কোনো দোষ নেই। তবে ইচ্ছাকৃত দ্বিতীয় দৃষ্টি অবশ্যই দোষের। (আবু দাউদ)",
      "দৃষ্টি নিয়ন্ত্রণ ছাড়া পাপ নিয়ন্ত্রণ অসম্ভব",
    ],
    typeSpeed: 170,
    delaySpeed: 1500,
    loop: 3,
  });

  const [text2] = useTypewriter({
    words: ["Google", "Facebook", "Chat GPT"],
    typeSpeed: 100,
    delaySpeed: 1800,
    loop: 3,
  });

  return (
    <div>
      <div className="text-center w-full flex-1 items-center justify-center">
        <form onSubmit={handleGoogleSearch}>
          <div className="relative m-4 p-5">
            <a className="absolute top-0 mx-auto">
              <h4 className="txt-ne h3 text-white">
                {text} <Cursor />
              </h4>
            </a>
          </div>
          <div className="text-center">
            <input
              type="text"
              placeholder={`${text2}`}
              className="input input-bordered input-success text-white font-bold w-1/2 inp"
              value={searchValue}
              onChange={searchInputChange}
            />
            <button
              type="submit"
              className="btn btn-success mx-2 hover:text-white delay-75"
            >
              Search
              <FcSearch size="25" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
