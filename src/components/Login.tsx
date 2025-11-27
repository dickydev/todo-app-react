import React, { useState } from "react";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
  navigateToRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, navigateToRegister }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => onLogin(username, password)}>Login</button>
      <p>
        Belum punya akun?
        <button onClick={navigateToRegister}>Register</button>
      </p>
    </div>
  );
};

export default Login;
