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
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          dignissimos praesentium quis reprehenderit, similique id est nostrum
          repellat quia unde sapiente provident corporis officiis, cupiditate
          omnis culpa nisi rem nihil?
        </p>
      </div>
    </div>
  );
};

export default Page;
