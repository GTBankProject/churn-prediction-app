import { FaWalking, FaFunnelDollar, FaGem, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { ACTIVE_USER, CHURN_USER, TOTAL_USER } from "../../api/routes";


export function ChurnAdvice() {
  return (
    <p className="p-4">
      <h2 className="pb-2 font-medium">CHURN ADVISE</h2>
      Based on the various parameters placed <br/>into consideration its relevant the
      various factors are placed into <br/>consideration in order of relevance
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
      .then((response) =>
      setData(response.data));

  }, []);

  return (
    <div className="flex flex-col card-sm  shadow-md ">
      <h2 className="flex justify-start pl-2 text-[#ce4a01]">Active Users</h2>
      <hr />
      <div className="flex flex-row justify-start p-4 items-center">
        <div className="bg-[#c2410c] h-10 w-10 flex justify-center items-center rounded-full mr-10 ">
          <FaFunnelDollar className="icons" style={{ height: 25, width: 25 }} />
        </div>
        <div className="font-bold text-xl">{data}</div>
      </div>
    </div>
  );
}
export function ChurnUsers() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(CHURN_USER , {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) =>
      setData(response.data));

  }, []);

  return (
    <div className="flex flex-col card-sm  shadow-md ">
      <h2 className="flex justify-start pl-2 text-[#ce4a01]">Churned Users</h2>
      <hr />
      <div className="flex flex-row justify-start p-4 items-center">
        <div className="bg-[#4d7c0f] h-10 w-10 flex justify-center items-center rounded-full mr-10 ">
          <FaGem className="icons" style={{ height: 25, width: 25 }} />
        </div>
        <div className="font-bold text-xl">{data}</div>
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
      .then((response) =>
      setData(response.data));

  }, []);

  return (
    <div className="flex flex-col card-sm  shadow-md ">
      <h2 className="flex justify-start pl-2 text-[#ce4a01]">Total Users</h2>
      <hr />
      <div className="flex flex-row justify-start p-4 items-center">
        <div className="bg-[#6d28d9] h-10 w-10 flex justify-center items-center rounded-full mr-10 ">
          <FaUsers className="icons" style={{ height: 25, width: 25 }} />
        </div>
        <div className="font-bold text-xl">{data}</div>
      </div>
    </div>
  );
}
export function ReturnedUsers() {

  return (
    <div className="flex flex-col card-sm  shadow-md ">
      <h2 className="flex justify-start pl-2 text-[#ce4a01]">Returned Users</h2>
      <hr />
      <div className="flex flex-row justify-start p-4 items-center">
        <div className="bg-[#1d4ed8] h-10 w-10 flex justify-center items-center rounded-full mr-10 ">
          <FaWalking className="icons" style={{ height: 25, width: 25 }} />
        </div>
        <div>
          <h3></h3>
        </div>
      </div>
    </div>
  );
}
export function ChurnpredictionTab(){
  return(
    <div className="card p-2 grid grid-cols-3 divide-x ">
      <div className="flex flex-col p-2 justify-center">
        <div><span className="font-bold">Customer Churn</span> is</div>
        <div className="text-[#ce4a01] "><span className="text-[114px]">57</span><span className="text-[54px]">%</span></div>
        <div className="text-[12px]">higher than the average</div>
      </div>
      <div className="flex flex-col p-2 justify-center">
        <div><span className="font-bold">Credit Score</span> is</div>
        <div className="text-[#ce4a01] "><span className="text-[114px]">57</span><span className="text-[54px]">%</span></div>
        <div className="text-[12px]">higher than the average</div>
      </div>
      <div className="flex flex-col p-2 justify-center">
        <div><span className="font-bold">Customer Balance</span> is</div>
        <div className="text-[#ce4a01] "><span className="text-[114px]">57</span><span className="text-[54px]">%</span></div>
        <div className="text-[12px]">higher than the average</div>
      </div>
    </div>
  );
}
