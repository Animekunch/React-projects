import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { BrowserRouter as Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/post">
          <NewPost />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
        <route path="/about" element={<About />} />
        <route path="*" element={<Missing />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
