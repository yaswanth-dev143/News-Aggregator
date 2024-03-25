import React, { useEffect, useState } from "react";
import axios from "axios";

const First = () => {
  let [info, setinfo] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=35b188a92ccc4c2ba4f3fde9b07eb1ca"
      )
      .then((res) => {
        setinfo(res.data.articles);
        console.log(res.data.articles);
      })
      .catch((err) => console.log(err));
  }, [7000]);
  return (
    <div>
      <nav className="w-full h-[3rem]  bg-[#fff]  shadow-lg flex items-center justify-between fixed ">
        <p className=" text-xl font-mono font-bold pl-4 underline hover:shadow-lg hover:border-b-blue-300 ">
          News Aggregator
        </p>
      </nav>
      <div className="w-[100%] h-full bg-blue- flex justify-center bg-slate-200 ">
        <div className="w-[80%] h-full pl-40">
          {info.map((item) => (
            <div
              key={item.author}
              className=" bg-slate-50 w-[80%] shadow-lg flex justify-center rounded  mt-10 "
            >
              <div className=" w-[95%] mb-4 mt-4 ">
                <img src={item.urlToImage} />
                <a
                  href={item.url}
                  className=" font-extrabold  text-xl underline "
                >
                  {item.title} - {item.publishedAt}
                </a>
                <h3 className="font-semibold"> {item.description} </h3>
                <h3 className=" font- "> {item.content} </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default First;
