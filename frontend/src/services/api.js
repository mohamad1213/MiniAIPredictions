const BASE_URL = "http://localhost:8000";

export async function loginUser(username, password) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  return data.access_token;
}

export async function getSales() {
  const res = await fetch(`${BASE_URL}/sales`);
  return res.json(); // langsung data sales
}

export async function predictSales(data) {
  const res = await fetch(`${BASE_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json(); // langsung data prediction
}