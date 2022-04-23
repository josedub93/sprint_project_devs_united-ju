import React from "react";
import {Context } from "../AppContext/AppContext";
import Header from "../Components/Header"
import PostArea from "../Components/PostArea";
import Feed from "../Components/Feed";
import { Navigate } from "react-router-dom";

function Home() {

    const { user } = Context();

    return (
        <div className="home">
           
      {!user?.displayName ? (
        <Navigate to="/SignIn" />
      ) : (
        <div>
          <Header/>
          <div>
            <PostArea />
          </div>
          <Feed />
        </div>
      )}

        </div>
    )
};

export default Home;