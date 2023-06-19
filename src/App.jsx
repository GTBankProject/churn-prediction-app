import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Dashboard } from "./pages/dasboard/dashboard";
import { Sidebar } from "./component/components/sidebar";
import { Customer } from "./pages/customers/customers";
import { ChurnPrediction } from "./pages/churnprediction/churnprediction";
import { Report } from "./pages/report/report";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Routes path="*" element={<Sidebar />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/churn-prediction" element={<ChurnPrediction />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
