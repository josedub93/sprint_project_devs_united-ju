import React from "react";
import { Context } from "../AppContext/AppContext";
import Tweets from "./Tweets";

function UserFavorites(){

  const { tweets, uid } = Context();

  return (
    <div className="Tweets">
      {tweets.map((tweet, i) => {
        const userFavorites = tweet.likedBy.findIndex(
          (favorite) => uid === favorite
        );
        if (userFavorites >= 0) {
          return <Tweets tweet={tweet} i={i} />;
        }
      })}
    </div>
  );
};
    

export default UserFavorites;