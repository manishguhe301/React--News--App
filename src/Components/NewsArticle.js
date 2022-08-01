import React from "react";

const NewsArticle = ({ data }) => {
  return (
    <>
      <div className="Card">
        <img
          className="Card_img"
          src={data.urlToImage}
          alt="ImageNotAvailable"
        />
        <h5 className="Card_title">{data.title}</h5>
        <p className="Card_desc">{data.description}</p>

        <span className="Card_source">Source: {data.source.name}</span>
        <br />
        <span className="Card_datetime">
          Date: {data.publishedAt.slice(0, 10)}
        </span>
        <br />
        <a href={data.url} target="_blank" className="a">
          Click here to view full article
        </a>
      </div>
    </>
  );
};

export default NewsArticle;

//{/* width={'25%'} */}
//    {/* <img className="Card_img" src={data.urlToImage} alt="img" width={'25%'}/> */}
