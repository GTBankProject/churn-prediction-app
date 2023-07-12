import { FaWalking, FaFunnelDollar, FaGem, FaUsers } from "react-icons/fa";

export function ChurnAdvice() {
  return (
    <p>
      <h2 className="pb-2 font-medium">CHURN ADVISE</h2>
      Based on the various parameters placed into consideration its relevant the
      various factors are placed into consideration in order of relevance
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
  return (
    <div className="flex flex-col card-sm  shadow-md ">
      <h2 className="flex justify-start pl-2 text-[#ce4a01]">Active Users</h2>
      <hr />
      <div className="flex flex-row justify-start p-4 items-center">
        <div className="bg-[#c2410c] h-10 w-10 flex justify-center items-center rounded-full mr-10 ">
          <FaFunnelDollar className="icons" style={{ height: 25, width: 25 }} />
        </div>
        <div className="font-bold text-xl"></div>
      </div>
    </div>
  );
}
export function ChurnUsers() {
  return (
    <div className="flex flex-col card-sm  shadow-md ">
      <h2 className="flex justify-start pl-2 text-[#ce4a01]">Churned Users</h2>
      <hr />
      <div className="flex flex-row justify-start p-4 items-center">
        <div className="bg-[#4d7c0f] h-10 w-10 flex justify-center items-center rounded-full mr-10 ">
          <FaGem className="icons" style={{ height: 25, width: 25 }} />
        </div>
        <div>
          <h3></h3>
        </div>
      </div>
    </div>
  );
}
export function TotalUsers() {
  return (
    <div className="flex flex-col card-sm  shadow-md ">
      <h2 className="flex justify-start pl-2 text-[#ce4a01]">Total Users</h2>
      <hr />
      <div className="flex flex-row justify-start p-4 items-center">
        <div className="bg-[#6d28d9] h-10 w-10 flex justify-center items-center rounded-full mr-10 ">
          <FaUsers className="icons" style={{ height: 25, width: 25 }} />
        </div>
        <div>
          <h3></h3>
        </div>
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
