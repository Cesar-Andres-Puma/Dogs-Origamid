import { HelmetProvider } from "react-helmet-async";
import { Global } from "../style/global";
import "./App.css";
import { RouterApp } from "./router";

function App() {
  return (
    <>
      <HelmetProvider>
        <Global />
        <RouterApp />
      </HelmetProvider>
    </>
  );
}

export default App;
