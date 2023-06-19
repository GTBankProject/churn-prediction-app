import { FaUser } from "react-icons/fa";
export function Navbar() {
  return (
    <span className="flex flex-row-reverse h-14 w-full pt-5 items-center">
      <div className="border h-10 w-10 flex justify-center content-center items-center rounded-full mr-10 bg-white ">
        <FaUser className="icons" style={{ height: 25, width: 25 }} />
      </div>
      <h2 className="pr-5">Welcome</h2>
    </span>
  );
}
