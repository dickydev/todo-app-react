import { useState } from "react";
import { type User } from "./types/user";
import AuthPage from "./pages/AuthPage";
import TodoPage from "./pages/TodoPage";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      {!user ? (
        <AuthPage onAuthenticated={(loggedUser) => setUser(loggedUser)} />
      ) : (
        <TodoPage />
      )}
    </div>
  );
};

export default App;
