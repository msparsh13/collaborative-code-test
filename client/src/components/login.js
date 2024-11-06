import React from "react";

export function LoginForm() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-80 bg-gray-800 p-6 rounded-lg shadow-lg">
                <form className="flex flex-col space-y-4">
                    <input
                        type="text"
                        className="p-3 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Name"
                    />
                    <input
                        type="text"
                        className="p-3 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Login ID"
                    />
                    <button
                        type="submit"
                        className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
