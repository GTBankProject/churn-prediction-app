import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { CUSTOMER_URL } from "../../api/routes";
import { rows, columns, column, dataTable } from "./datatable";
import { DataGrid } from "@mui/x-data-grid";
import "../comstyles/component.css";

export function SidebarTable() {
  return (
    <div className="card">
      <h3 className="m-5 text-[#ce4a01] font-bold">TOP CUSTOMERS</h3>
      <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-white">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3 bg-white">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white bg-white"
            >
              John Newton
            </th>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-[#ce4a01] dark:text-blue-500 hover:underline"
              >
                Detail
              </a>
            </td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 bg-white">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white bg-white"
            >
              Elizabeth
            </th>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-[#ce4a01] dark:text-blue-500 hover:underline"
              >
                Detail
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white bg-white"
            >
              Reedemer
            </th>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-[#ce4a01] dark:text-blue-500 hover:underline"
              >
                Detail
              </a>
            </td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white bg-white"
            >
              Mark
            </th>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-[#ce4a01] dark:text-blue-500 hover:underline"
              >
                Detail
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function CustomerTable() {
  const [records, setRecords] = useState(rows);

  // const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(CUSTOMER_URL, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        console.log(data.data);
      });
  }, []);


  function handleSearch(event) {
    const newData = rows.filter((row) => {
      return row.Name.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setRecords(newData);
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row-reverse pb-3">
        <div className="flex items-right h-8 border rounded-lg  bg-white overflow-hidden">
          <div className="grid h-full w-12 text-gray-300" />

          <input
            className="peer h-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search Name"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div
        style={{ height: 500, backgroundColor: "white" }}
        className=" shadow-lg w-auto"
      >
        <DataGrid
          rows={records}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export function Summary() {
  return (
    <div
      style={{ height: 365, width: 610, backgroundColor: "white" }}
      className=" shadow-lg  mt-5"
    >
      <DataGrid rows={dataTable} columns={column} />
    </div>
  );
}
