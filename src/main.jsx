import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProviders from "./Providers/AuthProviders";



const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </QueryClientProvider>
  </React.StrictMode>
);
