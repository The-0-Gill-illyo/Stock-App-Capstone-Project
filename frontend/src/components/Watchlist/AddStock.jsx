import React, { useState } from 'react';
import StockSearch from '../StockSearch/StockSearch';
import Watchlist from './Watchlist';

const AddStock = (props) =>{

    const [stockName, setStockName] = useState("")
    const [targetPrice, setTargetPrice] = useState(0)

    function handleSubmit(event){
        event.preventDefault();
        let newStock = {
            stockName: stockName,
            targetPrice: targetPrice
        };
        console.log(newStock)
        props.adddNewEntryProperty(newStock)
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>Stock Name</label>
            <input type='letter' value={stockName} onChange={(event)=> setStockName(event.target.value)}/>
            <label>Target Price</label>
            <input type='number' value={targetPrice}  onChange={(event)=> setTargetPrice(parseFloat(event.target.value))}/>
       </form>
        </div>
    )
}

export default AddStock;