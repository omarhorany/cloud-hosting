"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchArticlesInput = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted!");
    console.log(searchText);
    // query string
    router.push(`/articles/search?swaerchText=${searchText}`);
  };
  return (
    <form onSubmit={formSubmitHandler} className="my-5 w-full md:m-2/3 m-auto">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="search"
        placeholder="Search for articles"
        className="w-full p-3 my-5 rounded text-xl border-none text-gray-900 focus:outline-none focus:ring-2  focus:ring-purple-500"
      />
    </form>
  );
};

export default SearchArticlesInput;
