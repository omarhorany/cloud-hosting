"use client";
import Link from "next/link";

interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
    return (
        <div className="fix-height  flex flex-col items-center justify-center h-screen bg-gray-50 px-4">
            <div className="max-w-lg w-full bg-white p-8 shadow-md rounded-xl text-center border border-gray-200">
                <h1 className="text-7xl font-extrabold text-red-500">404</h1>
                <h2 className="text-2xl font-semibold text-gray-900 mt-4">
                    Oops! Page Not Found
                </h2>

                <p className="text-sm text-red-500 mt-3 italic">
                    Error: {error.message}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={reset}
                        className="px-5 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition"
                    >
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="px-5 py-3 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;