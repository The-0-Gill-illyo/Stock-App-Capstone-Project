import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import Watchlist from "../Watchlist/Watchlist";


const Search = () => {
  const [searchStocks, setSearchStocks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [stocks, setStock] = useState([])

  useEffect(() => {
  fetchSearchResults()
  }, [searchInput])

  function passedSearchTerms(searchTerm){
    setSearchInput(searchTerm)
  }
  const fetchSearchResults = async () => {
    let response = await axios.get('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL,MSFT', { headers: {
        'X-RapidAPI-Key': '86d3b4a83bmsh0dd08eec6709231p1c4988jsn55fac02dce50',
        'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'}})
    setSearchGames(response.data)
    console.log("Stock", stocks)
  }

  

      return ( 
        <div>
          <SearchBar searchStocks={passedSearchTerms}/>
          {stocks.map((stock, index) => {
                return(
                  <div key={index}>
                    <h3>{stock.target_price}</h3>
                    <Watchlist parentEntries = {stock}/>
                  </div>
                )
              })}
        </div>
        );
        
      }
      export default Search;