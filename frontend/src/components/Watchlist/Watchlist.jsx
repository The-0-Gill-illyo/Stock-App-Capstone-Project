import React, { useState } from 'react';
import DisplayWatchlistDetails from './DisplayWatchListEntries';
import AddStock from './AddStock';
import './Watchlist.css';


function Watchlist() {

    const [entries, setEntries] = useState ([])

    function addNewEntry(entry){
  
    let tempEntries = [entry, ...entries];
    
    setEntries(tempEntries);
    console.log(tempEntries.addNewEntry)
    }
    return (
        <div>
            <DisplayWatchlistDetails parentEntries={entries} />
            <div>
            <AddStock AddStockProperty={addNewEntry} />
            </div>
            <div>
            <h1>{}</h1>
            </div>
        </div>

 
      );
}
export default Watchlist;
