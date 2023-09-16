import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { CUSTOMER_URL } from "../../api/routes";
import { Navbar } from "../../component/components/navbar";
import { Sidebar } from "../../component/components/sidebar";
import CustomerTable from "../../component/components/tables";

import "../../component/comstyles/component.css";

export function Customer() {
  const [data, setData] = useState(null); // State to store API response

  useEffect(() => {
    axios
      .get(CUSTOMER_URL, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("API Response:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  return (
    <div className="flex bg-slate-100">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Navbar />
        <div className="flex de-flex mt-10 mx-auto">
          <CustomerTable data={data} />
        </div>
      </div>
    </div>
  );
}
