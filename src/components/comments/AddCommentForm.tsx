"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const AddCommentForm = () => {
  const [text, setText] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return toast.error("Please write something");

    console.log("Form submitted!");
    console.log({ text });

    setText(""); // Clear input after submission
  };

  return (
    <form
      onSubmit={formSubmitHandler}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        rows={4}
      />
      <button
        type="submit"
        className="w-full mt-3 bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition duration-200"
      >
        Comment
      </button>
    </form>
  );
};

export default AddCommentForm;