import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./config/query-clinet.js";

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <App />
      <CssBaseline />
      <ToastContainer/>
    </BrowserRouter>
  </QueryClientProvider>
);
