import { Sidebar } from "../../component/components/sidebar";
import {
  Age,
  CardVsNoCard,
  CustomerStatus,
  CreditScore,
  MaleVsFemale,
  ChurnRate,
  Locations,
  CustomerStat,
} from "../../component/components/charts";
import "../../component/comstyles/component.css";
import { Navbar } from "../../component/components/navbar";
export function Report() {
  return (
    <div className="flex bg-slate-100">
      <Navbar />
      <Sidebar />
      <div className="flex de-flex ml-[20%] mt-20 card-container h-screen">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <CustomerStat />
              <MaleVsFemale />
              <CardVsNoCard />
              <Age />
            </div>
            <div className="flex flex-row">
              <CustomerStatus />
              <CreditScore />
            </div>
          </div>
          <div className="flex flex-col">
            <Locations />
            <ChurnRate />
          </div>
        </div>
      </div>
    </div>
  );
}
