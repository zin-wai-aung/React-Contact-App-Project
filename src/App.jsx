import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignIn, SignUp, Home } from "../src/page";
import {NotFound } from "./components";
import { Toaster } from "@/components/ui/toaster";
import useDarkMode from "use-dark-mode";

const App = () => {
  const darkMode = useDarkMode(true);

  return (
    <main
      className={`${
        darkMode.value ? "dark" : ""
      } text-foreground bg-background`}
    >
      <div className="w-full h-screen">
        <Toaster />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
