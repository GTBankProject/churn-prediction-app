import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  YAxis,
  Line,
  LineChart,
  Tooltip,
  ScatterChart,
  Scatter,
  XAxis,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  Label,
} from "recharts";
import {
  StatusData,
  ChurnBarData,
  BarData2,
  ScatterData,
  RadaData,
  ScatterDataBalance,
} from "./chartdata";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { ACTIVE_VS_INACTIVE, GENDER_URL, CARD, EDUCATION } from "../../api/routes";
import "../comstyles/component.css";

export function CustomerStat() {

  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(ACTIVE_VS_INACTIVE, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) =>
      setData(response.data));

  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <h3>Active Vs Inactive</h3>
      <PieChart width={180} height={180}>
        <Pie
          dataKey="value"
          data={data}
          outerRadius={80}
          innerRadius={45}
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}
export function CardVsNoCard() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(CARD, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) =>
      setData(response.data));

  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <h3>Card Vs No Card</h3>
      <PieChart width={180} height={180}>
        <Pie
          dataKey="value"
          data={data}
          outerRadius={80}
          innerRadius={45}
        />
        <Tooltip/>
      </PieChart>
    </div>
  );
}
export function MaleVsFemale() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(GENDER_URL, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) =>
      setData(response.data));

  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <h3>Male Vs Female</h3>
      <PieChart width={180} height={180}>
        <Pie
          dataKey="value"
          data={data}
          outerRadius={80}
          innerRadius={45}
        />
        <Tooltip/>
      </PieChart>
    </div>
  );
}
export function Age() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(EDUCATION, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) =>
      setData(response.data));

  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <h3>Education Level</h3>
      <PieChart width={180} height={180}>
        <Pie
          dataKey="value"
          data={data}
          outerRadius={80}
          innerRadius={45}
        />
        <Tooltip/>
      </PieChart>
    </div>
  );
}
export function CustomerStatus() {
  return (
    <div className="card p-5 mt-5 shadow-sm">
      <h3>Active Customers</h3>
      <BarChart width={300} height={280} data={StatusData}>
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <YAxis />
        <Bar dataKey="Active" fill="#CE4A01" />
        <Bar dataKey="Inactive" fill="#2394cc" />
      </BarChart>
    </div>
  );
}
export function QuatalyChurn() {
  return (
    <div className=" p-5 mt-5 md: w-200px">
      <h3>QUATERLY CUSTOMER MATRIX</h3>
      <BarChart width={960} height={300} data={BarData2}>
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <YAxis />
        <XAxis />
        <Bar dataKey="retained" fill="#CE4A01" />
        <Bar dataKey="churn" fill="#2394cc" />
      </BarChart>
    </div>
  );
}

export function PredictionChurn() {
  return (
    <div className="card p-5 mt-5">
      <h3>CHURN PREDICTION</h3>
      <LineChart width={400} height={300} data={ChurnBarData}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <XAxis />
        <Legend />
        <Label />
        <Line type="monotone" dataKey="churn" stroke="#CE4A01" />
      </LineChart>
    </div>
  );
}
export function ChurnRate() {
  return (
    <div className="card p-5 mt-5">
      <h3>CHURN RATE</h3>
      <LineChart width={250} height={180} data={ChurnBarData}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Legend />
        <Line type="monotone" dataKey="churn" stroke="#CE4A01" />
      </LineChart>
    </div>
  );
}

export function CreditScore() {
  return (
    <div className=" p-5 card">
      <h3>Credit Score</h3>
      <ResponsiveContainer width={310} height={280}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="creditScore" />
          <YAxis type="number" dataKey="y" name="Balance" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="CreditScore" data={ScatterData} fill="#8884d8" />
          <Scatter name="Balance" data={ScatterDataBalance} fill="#CE4A01" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
export function Locations() {
  return (
    <div className="card flex flex-col items-center">
      <h3>Locations</h3>
      <ResponsiveContainer width={310} height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="50%" data={RadaData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="region" />
          <Radar
            name="Accra"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
