import { createContext, ReactNode, useState } from "react";
import { ISubmitForm } from "../components/Dashboard";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IData {
  result: ISubmitForm;
  setUser: React.Dispatch<React.SetStateAction<ISubmitForm>>;
  length: number;
}

export const someContext = createContext<IData>({} as IData);

export const DataProvider = ({ children }: IAuthProviderProps) => {
  const [result, setResult] = useState<ISubmitForm[]>([]);

  return (
    <DataContext.Provider value={{ result, setResult }}>
      {children}
    </DataContext.Provider>
  );
};
