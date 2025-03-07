import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const CommentItem = () => {
    return (
        <div className="bg-white w-full shadow-md border border-gray-200 rounded-lg p-4 my-3 transition-transform hover:scale-[1.02]">
            {/* Comment Header */}
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <strong className="text-gray-900 text-sm md:text-base">Omar</strong>
                    <span className="text-xs text-gray-500">🗓️ 1/1/2025</span>
                </div>
            </div>

            {/* Comment Text */}
            <p className="text-gray-700 mt-3 text-sm md:text-base leading-relaxed">
                Thanks for this article! Really informative.
            </p>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-3">
                <button className="text-blue-500 hover:text-blue-700 transition duration-200">
                    <FaEdit size={16} />
                </button>
                <button className="text-red-500 hover:text-red-700 transition duration-200">
                    <FaTrash size={16} />
                </button>
            </div>
        </div>
    );
};

export default CommentItem;