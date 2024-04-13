import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
// import dotenv from 'dotenv';
// dotenv.config();


const NewsBoard = ({catagory}) => {
  const [article, setArticle] = useState([]);
  //const NEWS_API_KEY = "975cf7b7a0714bd09a4eb01cc5f19370";
  //https://newsapi.org/v2/top-headlines?country=in&category=catagory&apiKey=975cf7b7a0714bd09a4eb01cc5f19370
  
  const apiKey = process.env.REACT_APP_KEY;
  console.log(apiKey)



  function getData() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&category=${catagory}&apiKey=${apiKey}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticle(data.articles);
      });
  }

  useEffect(() => {
    getData();
  }, [catagory]);
  return (
    <div>
      <h2 className="text-center m-2"> 
        Letest <span className="badge bg-danger text-light p-2">News</span>
      </h2>
      {article.map((news, index) => {
        //console.log(news);
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;



