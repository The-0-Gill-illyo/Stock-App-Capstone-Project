import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayStockDetails from "./DisplayStockDetails";
import Watchlist from "../Watchlist/Watchlist";



const StockSearch = () => {
    const [searchStocks, setSearchStocks] = useState([]);
    const [searchInput, setSearchInput] = useState("");


    useEffect(() => {
  
  // console.log("Search Page")
  }, []);

    async function handleSubmit(event){
      event.preventDefault()

      let newSearch;

      console.log(searchInput)
      // props.parentStockSearch(newSearch)

      try{
        let response = await axios.get(`https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/${searchInput}`, { headers: {
          'X-RapidAPI-Key': '86d3b4a83bmsh0dd08eec6709231p1c4988jsn55fac02dce50',
          'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'}})
          console.log(response.data)

          setSearchStocks(response.data[0]);
      } catch(error){
        console.log(error.response.data)
      }
    }
    

        return ( 
            <div>
              <form onSubmit={handleSubmit}>                           
                <input type="text"  className="searchTerm" onChange={(event)=>setSearchInput(event.target.value)} placeholder="SEARCH"></input>
                <button type='submit' className="searchButton">
                <i className="fa-fa search">search</i>
                </button>
              </form>
              <DisplayStockDetails searchStocks={searchStocks}/>
              <button type='submit'>Add to Watchlist</button>  

            </div>
  );

}
    export default StockSearch;