import App from "./App";
import { createRoot } from "react-dom/client";
import AppContextProvider from "./context/AppContext";



const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
