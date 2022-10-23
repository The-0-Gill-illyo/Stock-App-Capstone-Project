export default function DisplayStockNews(props){

    function handleClick(news){

        console.log(news)
        let newsId = news.id.newsId
    }
    
    return(
       <h1>
        <a href="{props.stockNews.link}">{props.stockNews.guid}</a>
        <br></br>

        </h1>
    )
}