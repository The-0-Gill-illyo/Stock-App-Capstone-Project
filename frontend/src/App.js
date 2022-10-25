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
import AddStock from "./components/Watchlist/AddStock";
import CompanyProfile from "./components/CompanyProfile/CompanyProfile";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import StockSearch from "./components/StockSearch/StockSearch";
import StockNews from "./components/StockNews/StockNews";


function App() {
  const [stocks, setStocks] = useState([]);
  



    
  return (
    <div className="body">
      <Navbar NavBarProperties={stocks} />
  
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
        <Route path="/watchlist" element={<Watchlist AddStock={AddStock}/>} />
        <Route path="/stocknews/" element={<StockNews />} />
        <Route path="/stocksearch" element={<StockSearch />} />
        <Route path="/addstock" element={<AddStock/>} /> 
        <Route path="/companyProfile" element={<CompanyProfile/>} /> 
        <Route path="/companyProfile/searchInput" element={<CompanyProfile/>} /> 
      </Routes>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
