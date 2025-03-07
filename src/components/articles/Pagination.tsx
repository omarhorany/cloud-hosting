"use client";
import { useState } from "react";

const pages = [1, 2, 3, 4, 5];

const Pagination = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePrev = () => {
    if (selectedPage > 1) setSelectedPage(selectedPage - 1);
  };

  const handleNext = () => {
    if (selectedPage < pages.length) setSelectedPage(selectedPage + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-10">
      {/* Prev Button */}
      <button
        className={`py-2 px-4 border rounded-lg text-lg font-semibold transition 
          ${
            selectedPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        onClick={handlePrev}
        disabled={selectedPage === 1}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          className={`py-2 px-4 border rounded-lg text-lg font-semibold transition 
            ${
              selectedPage === page
                ? "bg-purple-800 text-white border-gray-800"
                : "border-gray-400 text-gray-700 hover:bg-gray-200"
            }`}
          onClick={() => setSelectedPage(page)}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`py-2 px-4 border rounded-lg text-lg font-semibold transition 
          ${
            selectedPage === pages.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        onClick={handleNext}
        disabled={selectedPage === pages.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
