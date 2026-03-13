import SalesTable from "../components/SalesTable";
import PredictForm from "../components/PredictForm";
import Navbar from "../components/Navbar";

export default function Dashboard({ onLogout }) {
  return (
    <div>
      <Navbar onLogout={onLogout} />

      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", gap: "40px" }}>
          <div style={{ flex: 2 }}>
            <SalesTable />
          </div>
          <div style={{ flex: 1 }}>
            <PredictForm />
          </div>
        </div>
      </div>
    </div>
  );
}