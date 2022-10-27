import Watchlist from "../Watchlist/Watchlist"

export default function DisplayStockSearch(props){

    function handleClick(stock){

        console.log(stock)
        let stockId = stock.id.stockId
        console.log(stockId)
    }
    
    
    return(
        <div>
        <form onSubmit={handleClick}>
        <h1>
            Ticker Symbol: {props.searchStocks.symbol}
            <br></br>
            Ask: {props.searchStocks.ask}
            <br></br>
            Currency: {props.searchStocks.currency}
            <br></br>
             50-Day Average: {props.searchStocks.fiftyDayAverage}
             <br></br>
            50-Day Average Change: {props.searchStocks.fiftyDayAverageChange}
            <br></br>
            52-Week High: {props.searchStocks.fiftyTwoWeekHigh}
            <br></br>
            52-Week High Change: {props.searchStocks.fiftyTwoWeekHighChange}
            <br></br>
            52-Week Low: {props.searchStocks.fiftyTwoWeekLow}
            <br></br>
            532-Week Low Change: {props.searchStocks.fiftyTwoWeekLowChange}
            <br></br>
            Trailing Annual Dividend: {props.searchStocks.trailingAnnualDividendRate}
            <br></br>
            Trailing P/E: {props.searchStocks.trailingPE}
            <br></br>
            Daily 3-Month Average: {props.searchStocks.averageDailyVolume3Month}
        </h1>
        </form>
        {/* <Watchlist/> */}
        </div>
        )
        }
