import { useState } from "react";


export default function DisplayStockNews(){
    const [grabArticles, setGrabArticles] = useState([]);

    function handleClick(news){

        console.log(news)
        let newsId = news.id.newsId
    };


    const article = grabArticles.map(title => (
        <nav>
        <div>
        <h5>{title.description}</h5>
        <h5>{title.link}</h5>
        </div>
        </nav>
        ));

        
        return <div>{article.setGrabArticles}</div>
}