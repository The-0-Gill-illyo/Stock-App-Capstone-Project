

const Watchlist = (props) =>{
    return (
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
            {props.parentWatchlist.map((stock, ...index) => {
                return (
                    <tr key={index}>
                        <td>{stock.id}</td>
                        <td>{stock.watchlist}</td>
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
