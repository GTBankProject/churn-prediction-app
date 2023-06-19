import "../comstyles/component.css";
import {
  FaGithubAlt,
  FaUser,
  FaUniversity,
  FaChartPie,
  FaFolderOpen,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="h-20 flex items-center justify-center text-white bg-[#8f3404]">
        CHURN PREDICTION
      </div>
      <div className="sidebar-header drop-shadow-lg h-20">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/GTBank_logo.svg/1200px-GTBank_logo.svg.png"
          style={{ width: 80, height: 50, margin: 20 }}
        />
      </div>
      <div className="sidebar-main">
        <ul>
          <li className="group hover:text-black">
            <FaUniversity className="icons" />
            <Link to="/dashboard">Overview</Link>
          </li>
          <li className="group hover:text-black ">
            <FaUser className="icons" />
            <Link to="/customers">Customers</Link>
          </li>
          <li className="group hover:text-black ">
            <FaChartPie className="icons" />
            <Link to="/churn-prediction">Churn Prediction</Link>
          </li>
          <li className="group hover:text-black ">
            <FaFolderOpen className="icons" />
            <Link to="/report">Report</Link>
          </li>
          <li className="group hover:text-black ">
            <FaGithubAlt className="icons" />
            Churn Bot
          </li>
          <li className="group hover:text-black active:text-black">
            <FaSignOutAlt className="icons" />
            LogOut
          </li>
        </ul>
      </div>
    </div>
  );
}
