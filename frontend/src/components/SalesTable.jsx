import { useEffect, useState } from "react";
import { getSales } from "../services/api";

export default function SalesTable() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getSales();
        console.log("Raw sales data:", response);

        if (response && response.data) {
          setSales(response.data);
        } else {
          console.error("Unexpected data structure:", response);
        }
      } catch (err) {
        console.error("Failed to fetch sales data:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <h2>Sales Table</h2>
      <table border="1" cellPadding="5" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Jumlah Penjualan</th>
            <th>Harga</th>
            <th>Diskon</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((s) => (
            <tr key={s.product_id}>
              <td>{s.product_id}</td>
              <td>{s.product_name}</td>
              <td>{s.jumlah_penjualan}</td>
              <td>{s.harga}</td>
              <td>{s.diskon}</td>
              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}