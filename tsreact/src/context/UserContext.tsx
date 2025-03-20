import { createContext, useState } from "react";

type User = {
  name: string;
  email: string;
} | null;

interface UserContextProps {
  user: User;
  login: () => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(null);

  const login = () => {
    setUser({ name: "Ilyes", email: "ilyes@example.com" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
