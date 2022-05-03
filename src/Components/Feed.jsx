import React from "react";
import { Context } from "../AppContext/AppContext";
import Tweets from "./Tweets";

const Feed = () => {
  const {
    tweets,
  } = Context();


  return (
    <div className="Tweets">
      {tweets.map((tweet, i) => {
   
        return <Tweets tweet={tweet} i={i} />;
      })}
    </div>
  );
};

export default Feed;