import { useEffect } from "react";
import axios from "../../api/axios";
import { CUSTOMER_URL } from "../../api/routes";
import { Navbar } from "../../component/components/navbar";
import { Sidebar } from "../../component/components/sidebar";
import CustomerTable from "../../component/components/tables";

import "../../component/comstyles/component.css";
export function Customer() {
  useEffect(() => {
    axios
      .get(CUSTOMER_URL, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => console.log(response));
  });
  return (
    <div className="flex bg-slate-100">
      <Sidebar />
      <div className=" flex flex-col w-screen">
        <Navbar />
        <div className="flex de-flex mt-10 mx-auto">
          <CustomerTable />
        </div>
      </div>
    </div>
  );
}
