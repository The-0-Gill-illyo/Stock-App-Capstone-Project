// General Imports
import { Routes, Route } from "react-router-dom";
import React, {  useState } from 'react';
import "./App.css";
import background from "./img/adeolu-eletu-E7RLgUjjazc-unsplash.jpg";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Watchlist from "./components/Watchlist/Watchlist";
import CompanyProfile from "./components/CompanyProfile/CompanyProfile";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import StockSearch from "./components/StockSearch/StockSearch";
import StockNews from "./components/StockNews/StockNews";



function App() {

  const [stocks, setStocks] = useState([]);
    


  return (
    <div className="body">
      <Navbar />
  
        <div style={{backgroundImage: `url(${background})` }}>
          <img src="frontend/src/img/adeolu-eletu-E7RLgUjjazc-unsplash.jpg" alt=""/>

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage HomePageProperties={stocks} />
            </PrivateRoute>
          }
          />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/watchlist" element={<Watchlist parentEntries={stocks}/>} />
        <Route path="/stocknews/" element={<StockNews />} />
        <Route path="/stocksearch" element={<StockSearch />} />
        <Route path="/companyProfile" element={<CompanyProfile/>} /> 
      </Routes>
      </div>
      
      <Footer />
    </div>
    
  );
}

export default App;
