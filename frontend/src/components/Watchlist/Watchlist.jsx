import React, { useState } from 'react';
import './Watchlist.css';


const Watchlist = (props) =>{

    const [addStocks, setAddStocks] = useState([])

    function addNewStock(entry){
        let tempEntries = [entry, ...addStocks];
        tempEntries.push(addNewStock)
        setAddStocks(addStocks)
        console.log(tempEntries)
    }

    return (
        <div className='watchlist-container'>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Sock Name</th>
                <th>Target Price</th>
                <th>User Id</th>
            </tr>
            </thead>
            <tbody>
            {addStocks.map((stock, index) => {
                return (
                    <tr key={index}>
                        <td>{stock.id}</td>
                        <td>{stock.stock_name}</td>
                        <td>{stock.target_price}</td>
                        <td>{stock.user_id}</td>
                        {/* <button className="button" type="submit" >Add to Watchlist</button> */}
                    </tr>
                );
            })}
            </tbody>
        </table>
        </div>
      );
}
export default Watchlist;
