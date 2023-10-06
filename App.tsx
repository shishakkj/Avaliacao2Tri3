import Home from "./src/screens/Home";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar/>
        <Routes/>
    </>
  );
}