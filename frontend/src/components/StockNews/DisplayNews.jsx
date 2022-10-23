export default function DisplayStockNews(props){

    function handleClick(news){

        console.log(news)
        let newsId = news.id.newsId
    }
    
    return(
       <h1>
        {props.stockNews.description}
        <br></br>
        <a href="{props.stockNews.link}">{props.stockNews.link}</a>
        <br></br>

        </h1>
    )
}