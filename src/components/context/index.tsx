import {
  Dispatch,
  useState,
  ReactNode,
  createContext,
  SetStateAction,
} from "react";

export const EndDateContext = createContext<{
  date: string;
  setEndDate: Dispatch<SetStateAction<string>>;
}>({ date: "", setEndDate: () => {} });

const Context = ({ children }: { children: ReactNode }) => {
  const [date, setDate] = useState<string>("");
  // const [theme, setTheme] = useState<string>('light'); // or 'dark' or any other theme

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  // };

  return (
    // <EndDateContext.Provider value={{ date, setEndDate: setDate,  theme, toggleTheme }}>
    <EndDateContext.Provider value={{ date, setEndDate: setDate }}>
      {children}
    </EndDateContext.Provider>
  );
};

export default Context;
