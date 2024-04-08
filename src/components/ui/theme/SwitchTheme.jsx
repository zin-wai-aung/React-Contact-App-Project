import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import useDarkMode from "use-dark-mode";

export default function App() {
  const darkMode = useDarkMode(true);

  return (
    <Switch
      defaultSelected={darkMode.value}
      size="lg"
      color="danger"
      onChange={darkMode.toggle}
      startContent={<MoonIcon />}
      endContent={<SunIcon />}
    ></Switch>
  );
}
