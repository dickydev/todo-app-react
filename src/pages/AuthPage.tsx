import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { type User } from "../types/user";

interface AuthPageProps {
  onAuthenticated: (user: User) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onAuthenticated }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [registerdUser, setRegisterdUser] = useState<User | null>(null);

  const handleResgiter = (username: string, password: string) => {
    const newUser: User = { username, password };
    setRegisterdUser(newUser);
    alert("Berhasil membuat user baru, silahkan login!");
    setIsLogin(true);
  };

  const handleLogin = (username: string, password: string) => {
    if (
      registerdUser &&
      registerdUser.username === username &&
      registerdUser.password === password
    ) {
      onAuthenticated(registerdUser);
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div>
      {isLogin ? (
        <Login
          onLogin={handleLogin}
          navigateToRegister={() => setIsLogin(false)}
        />
      ) : (
        <Register
          onRegister={handleResgiter}
          navigateToLogin={() => setIsLogin(true)}
        />
      )}
    </div>
  );
};
export default AuthPage;
