"use client";
import ImportantLink from "@/Components/ImportantLink/ImportantLink";
import Search from "../Components/SearchComponents/Search";

const Page = () => {
  return (
    <div className="h-screen w-full p-4">
      <div>
        <Search />
      </div>

      <div>
        <ImportantLink />
      </div>
    </div>
  );
};

export default Page;
