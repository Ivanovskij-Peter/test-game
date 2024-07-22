import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  FC,
} from "react";

interface UserContextProps {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}
export type ReactFC<Props extends Record<PropertyKey, unknown> = {}> = FC<
  PropsWithChildren<Props>
>;

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: ReactFC = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
