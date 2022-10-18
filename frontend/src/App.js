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
// import Watchlist from "./pages/Watchlist/watchlist";
import axios from "axios";

function App() {

  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchSearchedStock()
  }, [])

  const fetchSearchedStock = async () => {
    let response = await axios.get('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL,MSFT', { headers: {
    'X-RapidAPI-Key': '86d3b4a83bmsh0dd08eec6709231p1c4988jsn55fac02dce50',
    'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
  }
})
    setStocks(response.data)
}
  return (
    <div>
      <Navbar />
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
      </Routes>
          <div className="search">
            <input type="text" className="searchTerm" placeholder="Music Library Search"></input>
            <button type='submit' className="searchButton">
            <i className="fa-fa search">search</i>
            </button>
          </div>
      <Footer />
    </div>
  );
}

export default App;


// const options = {
//   method: 'GET',
//   url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL,MSFT',
  // headers: {
  //   'X-RapidAPI-Key': '86d3b4a83bmsh0dd08eec6709231p1c4988jsn55fac02dce50',
  //   'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
  // }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });