import React, { lazy, Suspense } from "react";
import { Context } from "../AppContext/AppContext";
import Header from "../Components/Header"
import PostArea from "../Components/PostArea";
//import Feed from "../Components/Feed";
import { Navigate } from "react-router-dom";

function Home() {

  const { user } = Context();

  const Feed = lazy(() => import("../Components/Feed"))

  return (
    <div>

      {user ? (
          <Suspense fallback={<h1 className="loader" >Loading…</h1>}>
        <div>
          <Header />
        
          <div className="PostAreaCont">
          <PostArea />
          </div>
          <Feed />
        </div>
          </Suspense>
      ) : (
        <Navigate to="/SignIn" />
      )}

    </div>
  )
};

export default Home;