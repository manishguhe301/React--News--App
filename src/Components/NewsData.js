import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

const NewsData = (props) => {
  const [Data, setData] = useState();

  const ApiKey = "ae76b9b218f44d2b923aacc4372a4ba4";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=rich&from=2022-07-31&sortBy=popularity&apiKey=${ApiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ Data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsData;
