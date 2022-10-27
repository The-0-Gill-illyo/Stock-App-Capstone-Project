
import AddStock from './AddStock';
import './Watchlist.css';


const Watchlist = (props) =>{



    
    return (
        <div className='watchlist-container'>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Stock Name</th>
                <th>Target Price</th>
                <th>User Id</th>
            </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((stock, index) => {
                console.log(stock)
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{stock.id}</td>
                        <td>{stock.stock_name}</td>
                        <td>{stock.target_price}</td>
                        <td>{stock.user_id}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
        <AddStock />
        </div>
      );
}
export default Watchlist;
