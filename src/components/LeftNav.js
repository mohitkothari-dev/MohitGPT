import React, { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { LuPanelLeftClose } from "react-icons/lu";
import { FiUser, FiMessageSquare } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { ContextApp } from "../utils/Context";
function LeftNav() {
  const { setShowSlide, showSlide, handleQuery } = useContext(ContextApp);
  return (
    // top section
    <div
      className={
        !showSlide
          ? "h-screen bg-gray-900 w-[300px] border-r border-gray-500 hidden lg:flex items-center justify-between p-2 text-white flex-col translate-x-0"
          : "hidden"
      }
    >
      <div className="flex items-start justify-between w-full">
        <span
          className="border border-gray-600  rounded w-[80%] py-2 text-xs flex gap-1 items-center justify-center cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <AiOutlineDelete fontSize={18} />
          Clear Chat
        </span>
        <span
          className="border border-gray-600  rounded px-3 py-[9px] flex items-center justify-center cursor-pointer"
          title="Close sidebar"
          onClick={() => setShowSlide(!showSlide)}
        >
          <LuPanelLeftClose />
        </span>
      </div>
      {/* middle section  */}
      <div className="h-[80%] w-full p-2 flex items-start justify-start flex-col overflow-hidden overflow-y-auto text-sm scroll my-2">
        {/* msg  */}
        <span
          className="rounded w-full py-3 px-2 text-xs my-2 flex gap-1 items-center justify-between cursor-pointer hover:bg-gray-800 transition-all duration-300 overflow-hidden "
          value={"Summarize Mohit's entire profile in 3 sentences."}
          onClick={handleQuery}
        >
          <span className="flex gap-2 items-center justify-center text-base">
            <FiMessageSquare />
            <span className="text-sm">Summarize Mohit's entire profile in 3 sentences.</span>
          </span>
        </span>
        <span
          className="rounded w-full py-3 px-2 text-xs my-2 flex gap-2 items-center justify-between cursor-pointer hover:bg-gray-800 transition-all duration-300 overflow-hidden  "
          value={"Did he use OpenAI API in any of his project?"}
          onClick={handleQuery}
        >
          <span className="flex gap-2 items-center justify-center text-base">
            <FiMessageSquare />
            <span className="text-sm">Did he use OpenAI API in any of his project?</span>
          </span>
        </span>
      </div>
      {/* bottom section  */}
      <div className="w-full border-t border-gray-600 flex flex-col gap-2 items-center justify-center p-2">
        <span className="rounded w-full py-2 px-2 text-xs flex gap-1 items-center justify-between cursor-pointer hover:bg-gray-800 transition-all duration-300">
          <span className="flex gap-1 items-center justify-center text-sm">
            <FiUser />
            Coming Soon...
          </span>
          <span className="rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800">
            NEW
          </span>
        </span>
        <span className="rounded w-full py-2 px-2 text-xs flex gap-1 items-center justify-between cursor-pointer hover:bg-gray-800 transition-all duration-300">
          <span className="flex gap-2 items-center justify-center text-sm font-bold">
            <img
              src="/user.png"
              alt="user"
              className="w-8 h-8 object-cover rounded-sm"
            />
            User
          </span>
          <span className="rounded-md  px-1.5 py-0.5 text-xs font-medium uppercase text-gray-500">
            <SlOptions />
          </span>
        </span>
      </div>
    </div>
  );
}

export default LeftNav;
