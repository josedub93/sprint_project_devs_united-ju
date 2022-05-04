import React from "react";
import { Context } from "../AppContext/AppContext";
import Tweets from "./Tweets";

const Feed = () => {
  const {
    tweet,
    tweets,
  } = Context();


  return (
    <div className="Tweets" key={tweet.id}>
      {tweets.map((tweet, i) => {
   
        return <Tweets tweet={tweet} i={i} />;
      })}
    </div>
  );
};

export default Feed;