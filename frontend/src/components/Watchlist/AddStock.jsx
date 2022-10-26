import React, { useState } from 'react';
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
        props.AddStockProperty(newStock)
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>Stock Name</label>
            <input type='letter' value={stockName} onChange={(event)=> setStockName(event.target.value)}/>
            <label>Target Price</label>
            <input type='number' value={targetPrice}  onChange={(event)=> setTargetPrice(parseFloat(event.target.value))}/>
            <button type="submit">Add To Watchlist</button>
       </form>
       {/* <Watchlist /> */}
        </div>
    )
}

export default AddStock;