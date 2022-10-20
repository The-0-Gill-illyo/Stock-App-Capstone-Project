// General Imports
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Watchlist from "./components/Watchlist/Watchlist";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import StockSearch from "./components/StockSearch/StockSearch";

function App() {
  const [stocks, setStocks] = useState([]);
  const [showWatchlist, setShowWatchList] = useState(true);

  useEffect(() => {
    fetchSearchedStock()
  }, [])

  const fetchSearchedStock = async () => {
    let response = await axios.get(`https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news`, { headers: {
      'X-RapidAPI-Key': '86d3b4a83bmsh0dd08eec6709231p1c4988jsn55fac02dce50',
      'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
    }
  }
  )
    setStocks(response.data)}
    
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
        <Route path="/register" element={<RegisterPage RegisterPageProperties={stocks}/>} />
        <Route path="/login" element={<LoginPage LoginPageProperties={stocks}/>}/>
        <Route path="/home" element={<HomePage HomePageProperties={stocks}/>}/>
        <Route path="/watchlist" element={<Watchlist parentWatchlist={stocks}/>} />
        <Route path="/StockSearch" element={<StockSearch StockSearchProperties={fetchSearchedStock}/>} />
      </Routes>
      <>
      <div>
      {showWatchlist ? (
        <button onClick={() => setShowWatchList(!showWatchlist)}>Display Watchlist</button>
        ) : (
          <ul className='list'>
          <a href="http://localhost:3000/Watchlist/" target="_blank" rel="noreferrer"><li className='listItem'>Watch List</li></a>
          <a href="http://localhost:3000/StockSearch/" target="_blank" rel="noreferrer"><li className='listItem'>Stock Search</li></a>
      

        <button onClick={() => setShowWatchList(!showWatchlist)}>Hide Watchlist</button>
      </ul>
      )}
      </div>
      </>
      <Footer />
    </div>
  );
}

export default App;
