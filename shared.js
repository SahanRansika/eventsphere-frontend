// Backend Gateway/VM එකේ External IP එක සහ Port එක මෙතැනට දෙන්න
const API_BASE_URL = "http://YOUR_BACKEND_VM_IP:8080";

// Generic fetch API function (Auth tokens සහ JSON handle කිරීමට)
async function apiRequest(endpoint, method = "GET", body = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  // JWT token එකක් LocalStorage හි ඇත්නම් එකතු කිරීම
  const token = localStorage.getItem("token");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config = {
    method: method,
    headers: headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    if (!response.ok) {
      throw new Error(`HTTP Error Status: ${response.status}`);
    }

    // Return empty response for 204 No Content
    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
}

// Example: User Login Request
async function loginUser(email, password) {
  try {
    const data = await apiRequest("/api/v1/auth/login", "POST", { email, password });
    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login Successful!");
    }
  } catch (err) {
    alert("Login failed! Check credentials.");
  }
}