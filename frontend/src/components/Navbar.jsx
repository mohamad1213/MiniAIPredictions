export default function Navbar({ onLogout }) {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      backgroundColor: "#1976d2",
      color: "#fff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>My Dashboard</h1>
      <button
        onClick={onLogout}
        style={{
          padding: "8px 16px",
          backgroundColor: "#fff",
          color: "#1976d2",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Logout
      </button>
    </nav>
  );
}