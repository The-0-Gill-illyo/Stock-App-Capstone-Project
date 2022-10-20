import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth"
import axios from "axios";



const StockSearch = (props) => {
    const [searchStocks, setSearchStocks] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [user, token] = useAuth();

    useEffect(() => {
  
  // console.log("Search Page")
  }, [token]);

    async function handleSubmit(event){
      event.preventDefault()

      let newSearch;

      console.log(searchInput)
      props.StockSearchProperties(newSearch)

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
            </div>
  );

}
    export default StockSearch;