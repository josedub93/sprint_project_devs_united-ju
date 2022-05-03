import React from "react";
import { Context } from "../AppContext/AppContext";
import Tweets from "./Tweets";

const UserTweets = () => {
  const { tweets, uid } = Context();

  return (
    <div className="Tweets">
      {tweets.map((tweet, i) => {
        if (uid === tweet.uid) {
          return <Tweets tweet={tweet} i={i} />;
        }
      })}
    </div>
  );
};
export default UserTweets;
