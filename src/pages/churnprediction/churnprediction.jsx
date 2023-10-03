import { Sidebar } from "../../component/components/sidebar";
import "../../component/comstyles/component.css";
import { Navbar } from "../../component/components/navbar";
import { ChurnFormCard } from "../../component/components/formcard";
import {
  ChurnAdvice,
  ChurnpredictionTab,
} from "../../component/components/info";
export function ChurnPrediction() {
  return (
    <div className="flex bg-slate-100">
      <Navbar />
      <Sidebar />
      <div className="ml-[20%] mt-20 h-screen">
        <div className="flex flex-row ">
          <ChurnFormCard />
          <div className="col">
            <ChurnpredictionTab />
            <ChurnAdvice />
          </div>
        </div>
      </div>
    </div>
  );
}
