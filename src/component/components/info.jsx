import { FaWalking, FaFunnelDollar, FaGem, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { ACTIVE_USER, CHURN_USER, TOTAL_USER } from "../../api/routes";

export function ChurnAdvice() {
  return (
    <p className="p-4">
      <h2 className="pb-2 font-medium">CHURN ADVISE</h2>
      Based on the various parameters placed <br />
      into consideration its relevant the various factors are placed into <br />
      consideration in order of relevance
      <br />
      <br />
      <a href="" className="text-[#ce4a01] font-bold">
        1. Age <br />
      </a>
      <a href="" className="text-[#ce4a01] font-bold">
        2. Location <br />
      </a>
      <a href="" className="text-[#ce4a01] font-bold">
        3. Credit Score <br />
      </a>
    </p>
  );
}
export function ActiveUsers() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(ACTIVE_USER, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className="flex flex-col card-sm items-center shadow-md xl: w-60 md: w-38 lg: w-50    ">
      <div className="pt-10">
        <div className="bg-[#c2410c] h-20 w-24 flex rounded-lg items-center justify-center">
          <FaFunnelDollar className="icons" style={{ height: 45, width: 55 }} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mt-5 text-[30px]  font-extrabold font-mono">
          28304823
        </span>
        <span>Inactive Users</span>
      </div>
      <div class="relative h-24 w-60 ...">
        <div class="absolute inset-x-0 bottom-0 h-8 ... bg-slate-300 text-blue-700">
          View detail inactive users
        </div>
      </div>
    </div>
  );
}
export function ChurnUsers() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(CHURN_USER, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className="flex flex-col card-sm items-center shadow-md xl: w-60 md: w-38 lg: w-50    ">
      <div className="pt-10">
        <div className="bg-[#4d7c0f]  h-20 w-24 flex rounded-lg items-center justify-center">
          <FaGem className="icons" style={{ height: 45, width: 55 }} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mt-5 text-[30px]  font-extrabold font-mono">
          28304823
        </span>
        <span>Active Users</span>
      </div>
      <div class="relative h-24 w-60 ...">
        <div class="absolute inset-x-0 bottom-0 h-8 ... bg-slate-300 text-blue-700">
          View detail active users
        </div>
      </div>
    </div>
  );
}
export function TotalUsers() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(TOTAL_USER, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className="flex flex-col card-sm items-center shadow-md xl: w-60 md: w-38 lg: w-50  ">
      <div className="pt-10">
        <div className="bg-[#6d28d9]  h-20 w-24 flex rounded-lg items-center justify-center">
          <FaUsers className="icons" style={{ height: 45, width: 55 }} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mt-5 text-[30px]  font-extrabold font-mono">
          28304823
        </span>
        <span>Churned Users</span>
      </div>
      <div class="relative h-24 w-60 ...">
        <div class="absolute inset-x-0 bottom-0 h-8 ... bg-slate-300 text-blue-700">
          Check out statistics
        </div>
      </div>
    </div>
  );
}
export function ReturnedUsers() {
  return (
    <div className="flex flex-col card-sm items-center shadow-md xl: w-60 md: w-38 lg: w-50  ">
      <div className="pt-10">
        <div className="bg-blue-100 h-20 w-24 flex rounded-lg items-center justify-center">
          <FaWalking className="icons" style={{ height: 45, width: 55 }} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mt-5 text-[30px]  font-extrabold font-mono">
          28304823
        </span>
        <span>Total Users</span>
      </div>
      <div class="relative h-24 w-60 ...">
        <div class="absolute inset-x-0 bottom-0 h-8 ... bg-slate-300 text-blue-700">
          View all Users
        </div>
      </div>
    </div>
  );
}
export function ChurnpredictionTab() {
  return (
    <div className="card p-2 grid grid-cols-3 divide-x ">
      <div className="flex flex-col p-2 justify-center">
        <div>
          <span className="font-bold">Customer Churn</span> is
        </div>
        <div className="text-[#ce4a01] ">
          <span className="text-[114px]">57</span>
          <span className="text-[54px]">%</span>
        </div>
        <div className="text-[12px]">higher than the average</div>
      </div>
      <div className="flex flex-col p-2 justify-center">
        <div>
          <span className="font-bold">Credit Score</span> is
        </div>
        <div className="text-[#ce4a01] ">
          <span className="text-[114px]">57</span>
          <span className="text-[54px]">%</span>
        </div>
        <div className="text-[12px]">higher than the average</div>
      </div>
      <div className="flex flex-col p-2 justify-center">
        <div>
          <span className="font-bold">Customer Balance</span> is
        </div>
        <div className="text-[#ce4a01] ">
          <span className="text-[114px]">57</span>
          <span className="text-[54px]">%</span>
        </div>
        <div className="text-[12px]">higher than the average</div>
      </div>
    </div>
  );
}
