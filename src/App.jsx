import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const JobDetailsContext = createContext([]);

function App() {
  const jobDetails = useLoaderData();
  // console.log(jobDetails);
  return (
    <>
      <JobDetailsContext.Provider value={jobDetails}>
        <Header />
        <Outlet />
        <Footer />
        <ToastContainer />
      </JobDetailsContext.Provider>
    </>
  );
}

export default App;
