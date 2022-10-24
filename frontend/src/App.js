// General Imports
import { Routes, Route } from "react-router-dom";
import React, {  useState } from 'react';
import "./App.css";

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
  const [showWatchlist, setShowWatchList] = useState(true);



    
  return (
    <div>
      <Navbar NavBarProperties={stocks} />
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
        <Route path="/watchlist" element={<Watchlist/>} />
        <Route path="/stocknews/" element={<StockNews />} />
        <Route path="/stocksearch" element={<StockSearch />} />
        <Route path="/addstock" element={<AddStock/>} /> 
        <Route path="/companyProfile" element={<CompanyProfile/>} /> 
        <Route path="/companyProfile/searchInput" element={<CompanyProfile/>} /> 
      </Routes>
      <>
      <div>
      {showWatchlist ? (
        <button onClick={() => setShowWatchList(!showWatchlist)}>Display Options</button>
        ) : (
          <ul className='list'>
          <a href="http://localhost:3000/Watchlist/"><li className='listItem'>Watch List</li></a>
          <a href="http://localhost:3000/StockSearch/"><li className='listItem'>Stock Search</li></a>
          <a href="http://localhost:3000/StockNews/"><li className='listItem'>Stock News</li></a>
          <a href="http://localhost:3000/CompanyProfile/"><li className='listItem'>Company Profile</li></a>
      

        <button onClick={() => setShowWatchList(!showWatchlist)}>Hide Optionts</button>
      </ul>
      )}
      </div>
      </>

      <Footer />
    </div>
    
  );
}

export default App;
