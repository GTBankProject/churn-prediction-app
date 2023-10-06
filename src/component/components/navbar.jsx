import { FaUser } from "react-icons/fa";
export function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
      <div className="flex flex-row-reverse h-14 w-full items-center fixed bg-white">
        <div className="border h-10 w-10 flex justify-center content-center items-center rounded-full mr-10 justify-center">
          <FaUser className="icons" style={{ height: 25, width: 25 }} />
        </div>
        <h2 className="pr-5">Welcome</h2>
      </div>
    </nav>
  );
}
