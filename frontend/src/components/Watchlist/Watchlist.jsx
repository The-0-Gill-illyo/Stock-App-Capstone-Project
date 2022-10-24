import React, { useState } from 'react';
import DisplayStockSearch from '../StockSearch/DisplayStockDetails';
import AddStock from './AddStock';


const Watchlist = (props) =>{
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
            {props.parentEntries.map((stock, index) => {
                return (
                    <tr key={index}>
                        <td>{stock.id}</td>
                        <td>{stock.stock_name}</td>
                        <td>{stock.target_price}</td>
                        <td>{stock.user_id}</td>
                        <button type="submit">Add to Watchlist</button>
                    </tr>
                );
            })}
            </tbody>
        </table>
      );
}
export default Watchlist;
