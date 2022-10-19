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
import Search from "./components/Search/Search";

function App() {
  const [stocks, setStocks] = useState([]);
  const [showWatchlist, setShowWatchList] = useState(true);

  useEffect(() => {
    fetchSearchedStock()
  }, [])

  const fetchSearchedStock = async () => {
    let response = await axios.get('https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news', { headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
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
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
      <>
      {showWatchlist ? (
        <div>
          <button onClick={() => setShowWatchList(!showWatchlist)}>Display Watchlist</button>
        </div>
      ) : (
        <ul className='list'>
        <li className='listItem'>Id</li>
        <li className='listItem'>Watchlist</li>
        <li className='listItem'>Target Price</li>
        <li className='listItem'>User Id</li>
      </ul>
      )}
      </>
      <Footer />
    </div>
  );
}

export default App;
