export default function DisplayNews(props){
    function handleClick(news){

        console.log(news)
        let newId = news.id.newsId
    }
    
    return(
       <h1>{props.stockNews.idex}</h1>
    )
}