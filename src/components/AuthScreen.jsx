import { useState } from "react";

const USERS_KEY = "boq_users";
const DEMO_ID = "LT_2026";
const DEMO_KEY = "CREATECH";

function readUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export default function AuthScreen({ onAuthSuccess }) {
  const [mode, setMode] = useState("login");
  const [role, setRole] = useState("Engineer");
  const [employeeId, setEmployeeId] = useState("");
  const [accessKey, setAccessKey] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  function resetErrors() {
    setError("");
  }

  function handleLogin(event) {
    event.preventDefault();
    resetErrors();

    const trimmedId = employeeId.trim();

    if (trimmedId === DEMO_ID && accessKey === DEMO_KEY) {
      onAuthSuccess({
        name: "L&T Construction Demo User",
        role,
        employeeId: DEMO_ID
      });
      return;
    }

    const users = readUsers();
    const user = users.find((item) => item.employeeId === trimmedId && item.accessKey === accessKey);

    if (!user) {
      setError("Invalid Employee ID or Access Key.");
      return;
    }

    onAuthSuccess(user);
  }

  function handleRegister(event) {
    event.preventDefault();
    resetErrors();

    const trimmedName = fullName.trim();
    const trimmedId = employeeId.trim();

    if (!trimmedName || !trimmedId || !accessKey) {
      setError("Please fill all fields.");
      return;
    }

    if (accessKey.length < 4) {
      setError("Access Key must be at least 4 characters.");
      return;
    }

    const users = readUsers();
    const exists = users.some((item) => item.employeeId === trimmedId);

    if (exists) {
      setError("Employee ID already registered. Please login.");
      return;
    }

    const newUser = {
      name: trimmedName,
      role,
      employeeId: trimmedId,
      accessKey
    };

    writeUsers([...users, newUser]);
    onAuthSuccess(newUser);
  }

  return (
    <div className="auth-page">
      <div className="auth-bg" />
      <section className="auth-card">
        <h1>L&T Construction Secure Login</h1>

        <div className="auth-switch">
          <button
            type="button"
            className={mode === "login" ? "active" : ""}
            onClick={() => {
              setMode("login");
              resetErrors();
            }}
          >
            Login
          </button>
          <button
            type="button"
            className={mode === "register" ? "active" : ""}
            onClick={() => {
              setMode("register");
              resetErrors();
            }}
          >
            New User
          </button>
        </div>

        <form className="auth-form" onSubmit={mode === "login" ? handleLogin : handleRegister}>
          {mode === "register" ? (
            <label>
              Full Name
              <input
                type="text"
                placeholder="Enter full name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
              />
            </label>
          ) : null}

          <label>
            Role
            <select value={role} onChange={(event) => setRole(event.target.value)}>
              <option>Engineer</option>
              <option>Manager</option>
              <option>Admin</option>
            </select>
          </label>

          <label>
            Employee ID
            <input
              type="text"
              placeholder="Employee ID"
              value={employeeId}
              onChange={(event) => setEmployeeId(event.target.value)}
            />
          </label>

          <label>
            Access Key
            <input
              type="password"
              placeholder="Access Key"
              value={accessKey}
              onChange={(event) => setAccessKey(event.target.value)}
            />
          </label>

          {error ? <p className="auth-error">{error}</p> : null}

          <button type="submit" className="auth-submit">
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <p className="auth-note">Demo credentials: LT_2026 / CREATECH</p>
      </section>
    </div>
  );
}


