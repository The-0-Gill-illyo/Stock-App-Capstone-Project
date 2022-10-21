import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockNews = () => {
    const [stockNews, setStockNews] = useState("");

    useEffect(() => {
  
        }, []);
      
          async function handleSubmit(event){
            event.preventDefault()
      
            let newsSearch;
      
            console.log(stockNews)
            // props.StockNews(newsSearch)

            try{
                let response = await axios.get(`https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news`, { headers: {
                'X-RapidAPI-Key': '86d3b4a83bmsh0dd08eec6709231p1c4988jsn55fac02dce50',
                'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'}})
                console.log(response.data)
        } catch(error){ 
          console.log(error.response.data)
      }           
            }
      
        return ( 
            <div>
              <form onSubmit={handleSubmit}>             
                <input type="text"  className="searchTerm" onChange={(event)=>setStockNews(event.target.value)} placeholder="SEARCH"></input>
                <button type='submit' className="searchButton">
                <i className="fa-fa search">search</i>
                </button>
              </form>
            </div>
        );      
}   
    export default StockNews; 