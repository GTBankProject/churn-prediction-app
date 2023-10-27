import { FaWalking, FaUsersSlash, FaGem, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { ACTIVE_USER, CHURN_USER, TOTAL_USER } from "../../api/routes";
import { PredictionChurn } from "./charts";

export function ChurnAdvice() {
  return (
    <p className="p-4">
      <span className="pb-2 font-medium">CHURN ADVISE: </span>
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
        <div className="bg-[#4d7c0f]  h-16 w-20 flex rounded-lg items-center justify-center">
          <FaGem className="icons" style={{ height: 24, width: 30 }} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mt-8 text-[30px]  font-extrabold font-mono">
          {data}
        </span>
        <span>Active Users</span>
      </div>
      <div className="relative h-24 w-60 ...">
        <div className="absolute inset-x-0 bottom-0 h-8 ... bg-slate-300 text-blue-700">
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
        <div className="bg-[#c2410c] h-16 w-20  flex rounded-lg items-center justify-center">
          <FaUsersSlash className="icons" style={{ height: 24, width: 30 }} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mt-8 text-[30px]  font-extrabold font-mono">
          {data}
        </span>
        <span>Churned Users</span>
      </div>
      <div className="relative h-24 w-60 ...">
        <div className="absolute inset-x-0 bottom-0 h-8 ... bg-slate-300 text-blue-700">
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
        <div className="bg-blue-100 h-16 w-20  flex rounded-lg items-center justify-center">
          <FaUsers className="icons" style={{ height: 24, width: 30 }} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mt-8 text-[30px]  font-extrabold font-mono">
          {data}
        </span>
        <span>Total Users</span>
      </div>
      <div className="relative h-24 w-60 ...">
        <div className="absolute inset-x-0 bottom-0 h-8 ... bg-slate-300 text-blue-700">
          Check out statistics
        </div>
      </div>
    </div>
  );
}
export function ReturnedUsers() {
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
        <div className="bg-[#6d28d9]  h-16 w-20  flex rounded-lg items-center justify-center">
          <FaWalking className="icons" style={{ height: 24, width: 30 }} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mt-8 text-[30px]  font-extrabold font-mono">
          {data}
        </span>
        <span>Returned Users</span>
      </div>
      <div className="relative h-24 w-60 ...">
        <div className="absolute inset-x-0 bottom-0 h-8 ... bg-slate-300 text-blue-700">
          View all Users
        </div>
      </div>
    </div>
  );
}
export function ChurnpredictionTab() {
  return (
    <div className="card p-2 flex flex-row items-center">
      <div className="flex flex-col p-2 justify-center ">
        <div>
          <span className="font-bold">The Customer is Likely to</span>
        </div>
        <div className="text-[#ce4a01] ">
          <span className="text-[54px]">Churn</span>
        </div>
      </div>
    </div>
  );
}
