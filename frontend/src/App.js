// General Imports
import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./App.css";
import background from "./img/adeolu-eletu-E7RLgUjjazc-unsplash.jpg";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Footer from "./components/Footer/Footer";
import CompanyProfile from "./components/CompanyProfile/CompanyProfile";
import AddStock from "./components/AddStock/AddStock";
import DisplayWatchlist from "./components/DisplayWatchList/DisplayWatchList";
import StockNews from "./components/StockNews/StockNews";
import StockSearch from "./components/StockSearch/StockSearch";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import Navbar from "./components/NavBar/NavBar";



function App() {

  const [entries, setEntries] = useState ([])

  function addNewEntry(entry){

  let tempEntries = [entry, ...entries];
  
  setEntries(tempEntries);
  }

  return (
    <div style={{backgroundImage: `url(${background})` }}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage  />
            </PrivateRoute>
          }
          />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/stocknews/" element={<StockNews />} />
        <Route path="/stocksearch" element={<StockSearch />} />
        <Route path="/companyProfile" element={<CompanyProfile/>} /> 
      </Routes>
      <div>
      <AddStock AddStockProperty={addNewEntry} />
      </div>
      <div>
        <DisplayWatchlist parentEntries={entries}/>
      </div>
      <div>
          <img src="frontend/src/img/adeolu-eletu-E7RLgUjjazc-unsplash.jpg" alt=""/>
      </div>
      <div>
      
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
