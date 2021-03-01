import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "./NewsPage.css";

const NewsPage = () => {
  moment.locale("ja");
  const [newsData, setNews] = useState([]);

  useEffect(async () => {
    await getNews();
  }, []);

  const getNews = async () => {
    const pageSize = 10;
    const url = `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=735dccc6a61b4ea8ac03bdb82b9395ba`;
    const res = await axios.get(url);
    // console.log(`res : ${JSON.stringify(res.data.articles)}`);
    setNews(res.data.articles);
    return res;
  };

  const getNewsTitle = (text) => {
    return text.substr(0, text.indexOf("-"));
  };

  return (
    <div>
      <div className="container">
        <h1>News</h1>
        {newsData.map((news) => (
          <div className="card space-bottom">
            <div className="card-body">
              <div className="row">
                <div className="col-md-9">
                  <div className="news-author">{news.author}</div>
                  <div className="news-title space-bottom">
                    {getNewsTitle(news.title)}
                  </div>
                  <a href={news.url} target="_blank">
                    続きを読む
                  </a>
                  <div className="news-author">
                    {moment(news.publishedAt, "YYYY/MM/DD HH:mm:S").fromNow()}
                  </div>
                </div>
                <div className="col-md-3">
                  <img className="news-image" src={news.urlToImage} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewsPage;
