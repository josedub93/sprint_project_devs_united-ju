import React from "react";
import { Context } from "../AppContext/AppContext";
import Tweet from "./Tweet";

function UserTweets() {

    const { tweets, uid } = Context();

    return (
      <div>
        {tweets.map((tweet, i) => {
          if (uid === tweet.uid) {
            return <Tweet tweet={tweet} i={i} />;
          }
        })}
      </div>
    );
  };

export default UserTweets;