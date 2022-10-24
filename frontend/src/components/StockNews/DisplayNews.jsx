export default function DisplayStockNews(props){

    function handleClick(news){

        console.log(news)
        let newsId = news.id.newsId
    }
    
    {props.stockNews.map((description, link) => {
    return(
       <h5>
        {props.stockNews.description[0]}

        </h5>
    )
})}
}