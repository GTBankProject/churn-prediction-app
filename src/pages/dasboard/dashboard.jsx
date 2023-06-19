import { Sidebar } from "../../component/components/sidebar";
import {
  // ActiveVsInactive,
  // ActiveVsInactive,
  // LossVsProfit,
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
import { SidebarTable } from "../../component/components/tables";

export function Dashboard() {
  return (
    <div className="flex bg-slate-100">
      <Sidebar />
      <div className=" flex flex-col w-screen">
        <Navbar />
        <div className="flex flex-row mt-10 ml-3">
          <div className="flex flex-col m-0">
            <div className="flex flex-row">
              <ActiveUsers />
              <ChurnUsers />
              <TotalUsers />
              <ReturnedUsers />
            </div>
            <div className="flex flex-row pt-8">
              <PredictionChurn />
              <QuatalyChurn />
            </div>
          </div>
          <SidebarTable />
        </div>
      </div>
    </div>
  );
}
