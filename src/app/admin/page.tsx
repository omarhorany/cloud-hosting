import React from "react";
import AddArticlesForm from "./AddArticlesForm";

const AdminPage = () => {
  return (
    <div className="fix-height flex items-center justify-center min-h-screen p-4 sm:p-6">
      <div className="w-full shadow-xl rounded-2xl p-6 bg-purple-200 ">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
          Add New Articles
        </h2>
        <AddArticlesForm />
      </div>
    </div>
  );
};

export default AdminPage;