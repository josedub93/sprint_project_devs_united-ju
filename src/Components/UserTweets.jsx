import React from "react";
import { Context } from "../AppContext/AppContext";
import Tweets from "./Tweets";

const UserTweets = () => {
  const { tweet, tweets, uid } = Context();

  return (
    <div className="Tweets" key={tweet.id}>
      {tweets.map((tweet, i) => {
        if (uid === tweet.uid) {
          return <Tweets tweet={tweet} i={i} />;
        }
      })}
    </div>
  );
};
export default UserTweets;
