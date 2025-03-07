const ArticlesLoading = () => {
  return (
    <section className="fix-height container mx-auto px-5 animate-pulse">
      {/* Search Bar */}

      <div className="flex w-full justify-center mb-6">
        <input
          type="text"
          className="w-full p-3 my-9 text-xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
          placeholder="Search articles..."
          disabled
        />
      </div>

      {/* Article Skeletons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-full h-9 bg-gray-300 rounded-md"></div>
              <div className="mt-4 h-6 bg-gray-300 rounded-md w-3/4"></div>
              <div className="mt-2 h-4 bg-gray-300 rounded-md w-full"></div>
              <div className="mt-2 h-4 bg-gray-300 rounded-md w-5/6"></div>
              <div className="mt-4 h-10  bg-gray-300 rounded-md w-1/3"></div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ArticlesLoading;
