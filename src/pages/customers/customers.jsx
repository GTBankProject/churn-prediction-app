import { Navbar } from "../../component/components/navbar";
import { Sidebar } from "../../component/components/sidebar";
import CustomerTable from "../../component/components/tables";

import "../../component/comstyles/component.css";

export function Customer() {
  return (
    
    <div className="flex bg-slate-100">
      <Navbar />
      <div className="ml-[20%] mt-20 h-screen">
        <CustomerTable />
      </div>
      
      <Sidebar />
    </div>
  );
}
