import { useState } from "react";
import { loginUser } from "../services/api";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser(username, password); // langsung string
      console.log("Login token:", token);
      if (token && typeof token === "string" && token.length > 0) {
        onLogin(token); // langsung masuk Dashboard
      } else {
        setError("Login gagal: token tidak ditemukan");
      }
    } catch (err) {
      console.error(err);
      setError("Login gagal: ada error jaringan");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}