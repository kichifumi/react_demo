import React from "react";
import axios from "axios";

const Hello = (props) => {
  
  const getData = () => {
    const pageSize = 2;
    const data = axios.get(
      `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=735dccc6a61b4ea8ac03bdb82b9395ba`
    );
    return data;
  };

  const data = getData();
  console.log("data : " + JSON.stringify(data));
  return <div>{props.name}</div>;
};

export default Hello;
