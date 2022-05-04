import React from "react";
import { Context } from "../AppContext/AppContext";
import Header from "../Components/Header"
import PostArea from "../Components/PostArea";
import Feed from "../Components/Feed";
import { Navigate } from "react-router-dom";

function Home() {

  const { user } = Context();

  return (
    <div>

      {user ? (
        <div>
          <Header />
          <div className="PostAreaCont">
          <PostArea />
          </div>
          <Feed />
        </div>
      ) : (
        <Navigate to="/SignIn" />
      )}

    </div>
  )
};

export default Home;