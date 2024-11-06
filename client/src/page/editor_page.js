import React from "react";
import Code_Editor from "../components/code_editor";
import { Userlist } from "../components/users";

export default function Codepage(){
return(
    <div>
           <div className="flex h-screen bg-gray-900 text-white">
            {/* Left Sidebar for User List */}
            <aside className="w-1/6 bg-gray-800 p-4 flex flex-col space-y-4">
                <h2 className="text-lg font-semibold mb-2">Users</h2>
                <ul className="space-y-2">
                    <li className="p-2 bg-gray-700 rounded-md hover:bg-gray-600">User 1</li>
                    <li className="p-2 bg-gray-700 rounded-md hover:bg-gray-600">User 2</li>
                    <li className="p-2 bg-gray-700 rounded-md hover:bg-gray-600">User 3</li>
                    <li className="p-2 bg-gray-700 rounded-md hover:bg-gray-600">User 4</li>
                </ul>
            </aside>

            {/* Main Section for Code Editor */}
            <main className="flex-1 bg-gray-900 p-4">
                <h2 className="text-lg font-semibold mb-4">Code Editor</h2>
                <Code_Editor/>
            </main>

            {/* Right Sidebar for Video Sharing */}
            <aside className="w-1/4 bg-gray-800 p-4 flex flex-col space-y-4">
                <h2 className="text-lg font-semibold mb-2">Video Sharing</h2>
                <div className="bg-gray-700 w-full h-2/3 rounded-md flex items-center justify-center">
                    <span>Video Screen</span>
                </div>
                <button className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
                    Start Video
                </button>
            </aside>
        </div>
    );
       
    </div>
)
}