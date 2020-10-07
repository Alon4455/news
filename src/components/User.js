import React, { useState, useEffect } from "react";
import News from "./News";
import { API, graphqlOperation } from "aws-amplify";
import { listNewss } from "../graphql/queries";

function User() {
  const [post, setPosts] = useState();
  const [state, setstate] = useState();
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const newsData = await API.graphql(graphqlOperation(listNewss));
      let newsList = newsData.data.listNewss.items;
      console.log("itemList", newsList);
      setstate(newsList);
    } catch (error) {
      console.log("error", error);
    }
  };

  function Headers() {
    let i = 0;
    let allItems = [];
    for (let item in state) {
      let o = state[item];
      i++;
      allItems.push(
        <div key={i}>
          <News
            onClick={() => {
              setPosts(o);
            }}
            title={o.title}
            content={o.content}
          />
        </div>
      );
    }
    return allItems;
  }

  return (
    <div>
      <h2>Users page</h2>
      <div className="user-container">
        <div className="headers">{state ? <Headers></Headers> : ""}</div>
        <div className="content">
          <h3> {post ? post.title : ""}</h3>
          <p> {post ? post.content : ""}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
