import { useState } from "react";

const Watchlist = (props) => {
  const [showWatchlist, setShowWatchList] = useState(true);

  return (
    <div>
      {showWatchlist ? (
        <div>
          <button onClick={() => setShowWatchList(!showWatchlist)}>Display Watchlist</button>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Watchlist</th>
              <th>Target Price</th>
              <th>User Id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.parentEntries.Id}</td>
              <td>{props.parentEntries.watchlist}</td>
              <td>{props.parentEntries.target_price}</td>
              <td>{props.parentEntries.user_Id}</td>
            </tr>
          </tbody>
          <button onClick={() => setShowWatchList(!showWatchlist)}>Hide Watchlist</button>
        </table>
      )}
    </div>
  );
};

export default Watchlist;
