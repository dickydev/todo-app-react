import React, { useState } from "react";

interface RegisterProps {
  onRegister: (username: string, password: string) => void;
  navigateToLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister, navigateToLogin }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange =
    (field: "username" | "password") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setCredentials((prev) => ({ ...prev, [field]: value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedUsername = credentials.username.trim();
    if (!trimmedUsername || !credentials.password) return;
    onRegister(trimmedUsername, credentials.password);
  };

  const isDisabled =
    credentials.username.trim().length === 0 || credentials.password.length === 0;

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="register-username">Username</label>
        <input
          id="register-username"
          type="text"
          placeholder="username"
          autoComplete="username"
          value={credentials.username}
          onChange={handleChange("username")}
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          placeholder="password"
          autoComplete="new-password"
          value={credentials.password}
          onChange={handleChange("password")}
        />

        <button type="submit" disabled={isDisabled}>
          Register
        </button>
      </form>
      <p>
        Sudah punya akun?
        <button onClick={navigateToLogin}>Login</button>
      </p>
    </div>
  );
};

export default Register;
