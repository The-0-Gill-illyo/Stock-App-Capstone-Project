import React, { useState } from 'react';


const Watchlist = () =>{

    const [entries, setEntries] = useState([{id: 1,stock_name: "AAPL", target_price: 100.50, user_id: 1}])
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
            {entries.map((stock, ...index) => {
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
        </table>
      );
}
export default Watchlist;
