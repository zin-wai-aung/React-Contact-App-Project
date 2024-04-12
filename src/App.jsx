import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignIn, SignUp, Home } from "../src/page";
import { NotFound } from "./components";
import { Toaster } from "@/components/ui/toaster";
import useDarkMode from "use-dark-mode";
import DetailContact from "./page/home/tool/DetailContact.page";
import Contact from "./page/home/tool/Contact.page";

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
          <Route path="sign_up" element={<SignUp />} />
          <Route path="home" element={<Home />} >
            <Route index element={<Contact />} />
            <Route path="contact/:id" element={<DetailContact />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
