import React, { useState } from 'react';


const AddStock = (props) => {

    const [stockName, setStockName] = useState("");
    const [targetPrice, setTargetPrice] = useState(0);

    

    function handleSubmit(event){
        event.preventDefault();

        let newStock = {
            stockName: stockName,
            targetPrice: targetPrice,
            };
           console.log(newStock);
           props.AddStockProperty(newStock)
        }

    return(
        <div>
            <form onSubmit={handleSubmit} className='form-grid'>
                <div className='form-grid'>
                <label>Stock Name</label>
                <input type='letter' className='form-grid' value={stockName} onChange={(event)=> setStockName(event.target.value)}/>
                <label>Target Price</label>
                <input type='number' className='form-grid' value={targetPrice}  onChange={(event)=> setTargetPrice(parseFloat(event.target.value))}/>
                </div>
                <button type="submit" className='btn btn-primary' style={{'marginTop': '1em'}}>Add To Watchlist</button>
            </form>
  
        </div>
        
        
    )
}

export default AddStock;