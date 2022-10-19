import axios from 'axios';
import React, { useEffect, useState } from 'react';


const DisplaySearchedStocks = () => {
    const [displayStock, setStockDisplay] = useState([]);

    useEffect(() =>{

    }, [])
    async function handleSubmit(event){
        event.preventDefault()

        let response = await axios.get('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/', { headers: {
            'X-RapidAPI-Key': '86d3b4a83bmsh0dd08eec6709231p1c4988jsn55fac02dce50',
            'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'}})
            setStockDisplay(response.data)
            console.log("Searched Stock", displayStock)
    }
}

export default DisplaySearchedStocks;