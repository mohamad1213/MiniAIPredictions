import { useState } from "react";
import { predictSales } from "../services/api";

export default function PredictForm() {
  const [jumlah, setJumlah] = useState(0);
  const [harga, setHarga] = useState(0);
  const [diskon, setDiskon] = useState(0);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await predictSales({
        jumlah_penjualan: Number(jumlah),
        harga: Number(harga),
        diskon: Number(diskon),
      });
      setResult(data.prediction);
    } catch (err) {
      console.error("Gagal prediksi:", err);
      setResult("Error prediksi");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div>
        <h2>Predict Sales</h2>
        <label htmlFor="jumlah_penjualan">Jumlah Penjualan:</label>
        <input
          type="number"
          placeholder="Jumlah Penjualan"
          value={jumlah}
          onChange={(e) => setJumlah(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="harga">Harga:</label>
        <input
          type="number"
          placeholder="Harga"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="diskon">Diskon:</label>
        <input
          type="number"
          placeholder="Diskon"
          value={diskon}
          onChange={(e) => setDiskon(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>{loading ? "Predicting..." : "Predict"}</button>
      {loading && <p>Loading...</p>}
      {result && !loading && <p style={{ marginTop: "10px" }}>Prediction: {result}</p>}
    </form>
  );
}