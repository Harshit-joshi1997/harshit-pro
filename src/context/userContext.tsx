// src/context/UserContext.js or .tsx
import { createContext, useContext, useState } from "react";

const UserContext = createContext(1);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}