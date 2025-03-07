import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="fix-height  flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <h1 className="text-4xl font-bold text-gray-800">404</h1>
            <p className="text-lg text-gray-600 mt-2">Oops! The page you're looking for doesn't exist.</p>
            <Link
                href="/"
                className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;