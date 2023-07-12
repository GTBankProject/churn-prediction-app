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
      <div className="sidebar-header drop-shadow-lg h-20">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/GTBank_logo.svg/1200px-GTBank_logo.svg.png"
          style={{ width: 80, height: 50, margin: 20 }}
        />
        <div className="flex items-center justify-center text-[#8f3404]">
          CHURN PREDICTION
        </div>
      </div>
      <div className="sidebar-main">
        <ul>
          <li>
            <span className="group hover:text-white flex items-center hover:bg-[#8f3404] p-3 px-8">
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </span>
          </li>
          <li>
            <span className="group hover:text-white flex items-center hover:bg-[#8f3404] p-3 px-6">
              <FaUser className="icons" />
              <Link to="/customers">Customers</Link>
            </span>
          </li>
          <li>
            <span className="group hover:text-white flex items-center hover:bg-[#8f3404] p-3 px-6">
              <FaChartPie className="icons" />
              <Link to="/churn-prediction">Churn Prediction</Link>
            </span>
          </li>
          <li>
            <span className="group hover:text-white flex items-center hover:bg-[#8f3404] p-3 px-6 ">
              <FaFolderOpen className="icons" />
              <Link to="/report">Report</Link>
            </span>
          </li>
          <li>
            <span className="group hover:text-white flex items-center hover:bg-[#8f3404] p-3 px-6">
              <FaGithubAlt className="icons" />
              Churn Bot
            </span>
          </li>
          <li>
            <span className="group hover:text-white flex items-center hover:bg-[#8f3404] p-3 px-6">
              <FaSignOutAlt className="icons" />
              LogOut
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
