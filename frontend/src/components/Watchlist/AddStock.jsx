import React, { useState } from 'react';
// import Watchlist from './Watchlist';


const AddStock = (props) =>{

    return(
        <form>
            <label>Stock Name</label>
            <input type='letters' />
            <label>Target Price</label>
            <input type='numbers' />
            <button type='Add to Watchlist'>Add to Watchlist</button>
        </form>
        // <div>
        //    {/* <Watchlist addStocks={addStocks}/> */}
        // </div>
    )
}

export default AddStock;