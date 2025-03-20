import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const User = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("User must be used within a UserProvider");
  }

  const { user, login, logout } = context;

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>

      <h2>User name is {user ? user.name : "Guest"}</h2>
      <h3>User email is {user ? user.email : "Not available"}</h3>
    </div>
  );
};

export default User;
