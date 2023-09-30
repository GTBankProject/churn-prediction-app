import { Sidebar } from "../../component/components/sidebar";
import {
  QuatalyChurn,
  PredictionChurn,
} from "../../component/components/charts";
import "../../component/comstyles/component.css";
import {
  ActiveUsers,
  ChurnUsers,
  ReturnedUsers,
  TotalUsers,
} from "../../component/components/info";
import { Navbar } from "../../component/components/navbar";

export function Dashboard() {
  return (
    <div className="flex bg-slate-100 flex-col">
      <Navbar />
      <Sidebar />
      <div className="pt-10">
        <div className="main-container flex flex-col">
        <div className="flex flex-row m-12">
          <div className="flex flex-col m-0 ">
            <div className="flex flex-row">
              <ActiveUsers />
              <ChurnUsers />
              <TotalUsers />
              <ReturnedUsers />
            </div>
            <div className="flex flex-col pt-8 card ">
              <QuatalyChurn />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
