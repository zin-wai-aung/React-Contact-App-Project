import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <NextThemesProvider attribute="class" defaultTheme="purple-dark">
      <Router>
        <Provider store={store}>
          <main className="purple-dark text-foreground bg-background">
            <App />
          </main>
        </Provider>
      </Router>
    </NextThemesProvider>
  </NextUIProvider>
);
