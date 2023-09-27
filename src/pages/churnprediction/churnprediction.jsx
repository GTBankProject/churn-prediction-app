import { Sidebar } from "../../component/components/sidebar";
import "../../component/comstyles/component.css";
import { Navbar } from "../../component/components/navbar";
import { ChurnFormCard } from "../../component/components/formcard";
import { ChurnAdvice, ChurnpredictionTab } from "../../component/components/info";
export function ChurnPrediction() {
  return (
    <div className="flex bg-slate-100">
      <Sidebar />
      <div className=" flex flex-col w-screen">
        <Navbar />
        <div className="flex flex-row ml-8 mt-5">
        < ChurnFormCard/>
        <div className="col">
        < ChurnpredictionTab/>
        <ChurnAdvice/>
        </div>
        </div>
      </div>
    </div>
  );
}
