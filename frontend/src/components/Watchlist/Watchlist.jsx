import React, { useState } from 'react';
import AddStock from './AddStock';

const Watchlist = () =>{

    const [addStocks, setAddStocks] = useState([])

    function addNewStock(entry){
        let tempEntries = [entry, ...addStocks];
        setAddStocks(tempEntries)
    }

    return (
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
                    </tr>
                );
            })}
            </tbody>
            <AddStock addNewEntryProperty={addNewStock}/>
        </table>
      );
}
export default Watchlist;
