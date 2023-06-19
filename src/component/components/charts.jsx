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
} from "recharts";
import {
  PieData,
  StatusData,
  ChurnBarData,
  BarData2,
  ScatterData,
  RadaData,
  ScatterDataBalance,
} from "./chartdata";

import "../comstyles/component.css";

export function ActiveVsInactive() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h3>Customer Status</h3>
      <PieChart width={210} height={180}>
        <Pie dataKey="value" data={PieData} outerRadius={80} innerRadius={65} />
      </PieChart>
    </div>
  );
}
export function CardVsNoCard() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h3>Credit Card</h3>
      <PieChart width={210} height={180}>
        <Pie
          dataKey="value3"
          data={PieData}
          outerRadius={80}
          innerRadius={65}
        />
      </PieChart>
    </div>
  );
}
export function MaleVsFemale() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h3>Gender</h3>
      <PieChart width={210} height={180}>
        <Pie
          dataKey="value1"
          data={PieData}
          outerRadius={80}
          innerRadius={65}
        />
      </PieChart>
    </div>
  );
}
export function Age() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h3>Age</h3>
      <PieChart width={210} height={180}>
        <Pie
          dataKey="value2"
          data={PieData}
          outerRadius={80}
          innerRadius={65}
        />
      </PieChart>
    </div>
  );
}
export function CustomerStatus() {
  return (
    <div className="card p-5 mt-5 shadow-sm">
      <h3>Active Customers</h3>
      <BarChart width={350} height={300} data={StatusData}>
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
    <div className="card p-5 mt-5">
      <h3>QUATERLY CUSTOMER MATRIX</h3>
      <BarChart width={330} height={300} data={BarData2}>
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <YAxis />
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
      <LineChart width={530} height={300} data={ChurnBarData}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Legend />
        <Line type="monotone" dataKey="churn" stroke="#CE4A01" />
      </LineChart>
    </div>
  );
}
export function ChurnRate() {
  return (
    <div className="card p-5 mt-5">
      <h3>CHURN RATE</h3>
      <LineChart width={370} height={200} data={ChurnBarData}>
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
      <ResponsiveContainer width={310} height={300}>
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
