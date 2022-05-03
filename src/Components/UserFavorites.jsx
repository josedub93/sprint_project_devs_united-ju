import React from "react";
import { Context } from "../AppContext/AppContext";
import Tweet from "./Tweet";

function UserFavorites(){

  const { tweets, uid } = Context();

  return (
    <div className="Tweets">
        <h2>UserFavorites</h2>
      {tweets.map((tweet, i) => {
        const userFavorites = tweet.likedBy.findIndex(
          (favorite) => uid === favorite
        );
        if (userFavorites >= 0) {
          return <Tweet tweet={tweet} i={i} />;
        }
      })}
    </div>
  );
};
    

export default UserFavorites;