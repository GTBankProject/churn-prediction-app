import { Sidebar } from "../../component/components/sidebar";
import "../../component/comstyles/component.css";
import { Navbar } from "../../component/components/navbar";
import { PredictionChurn } from "../../component/components/charts";
import { Summary } from "../../component/components/tables";
import { ChurnAdvice } from "../../component/components/info";
export function ChurnPrediction() {
  return (
    <div className="flex bg-slate-100">
      <Sidebar />
      <div className=" flex flex-col w-screen">
        <Navbar />
        <div className="flex flex-col ml-8 mt-5">
          <div className="flex flex-row">
            <PredictionChurn />
            <Summary />
          </div>
          <ChurnAdvice />
        </div>
      </div>
    </div>
  );
}
