import React from "react";
import Sidebar from "./Components/SIdebar";
import Layout from "./Pages/Layout";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import OtpVerification from "./Pages/OtpVerification";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/otp" element={<OtpVerification />} />
      </Routes>
    </>
  );
};

export default App;
