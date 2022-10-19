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
    let response = await axios.get('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/%7Bsymbol%7D', { headers: {
        'X-RapidAPI-Key': '86d3b4a83bmsh0dd08eec6709231p1c4988jsn55fac02dce50',
        'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'}})
    setSearchStocks(response.data)
    console.log("Stock", stocks)
  }

  

      return ( 
        <div>
          <SearchBar searchStocks={passedSearchTerms}/>
          {stocks.map((target_price, index) => {
                return(
                  <div key={index}>
                    <h3>{target_price.stock}</h3>
                    <Watchlist parentEntries = {target_price}/>
                  </div>
                )
              })}
        </div>
        );
        
      }
      export default Search;