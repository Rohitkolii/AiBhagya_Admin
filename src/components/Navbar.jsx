import { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar({ setOpenSidebar }) {
  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-between px-4 fixed border-b-1 border-gray-200">
      <h1 className="text-xl font-bold text-black">AIBHAGYA</h1>

      <button
        className="lg:hidden text-2xl cursor-pointer"
        onClick={() => setOpenSidebar(prev => !prev)}
      >
        ☰
      </button>

      <FaUserCircle className="text-3xl hidden lg:block" />
    </header>
  );
}
