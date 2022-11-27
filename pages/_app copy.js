import { useState, createContext, useContext } from "react";
import "../styles/globals.css";
import Nav from "../components/nav/Nav";

const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [age, setAge] = useState(10);
  return (
    <UserContext.Provider value={age}>
      <Nav id="" />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
