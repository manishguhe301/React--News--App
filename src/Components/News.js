import React, { useContext } from "react";
import Loading from "./Loading";
import NewsArticle from "./NewsArticle";
import { NewsContext } from "./NewsData";

const News = () => {
  const { Data } = useContext(NewsContext);
  // console.log(Data);
  return (
    <>
      <h1 className="NEWS">News📡</h1>
      <div className="All_Cards">
        {Data ? (
          Data.articles.map((news, index) => {
            return <NewsArticle data={news} key={index} />;
          })
        ) : (
          <Loading />
        )}
        {/* <NewsArticle data={Data} /> */}
      </div>
    </>
  );
};

export default News;
