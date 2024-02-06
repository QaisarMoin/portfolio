import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="bg-[url('public/images/blue.jpg')] h-[100vh] bg-cover bg-center">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
