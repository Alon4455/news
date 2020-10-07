import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { deleteNews } from "../graphql/mutations";
import { Button, Input } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
let initialState = { id: "" };
function Del() {
  const [deleted, setDeleted] = useState(false);
  const [postToDelete, setPostToDelete] = useState(initialState);

  const deletePost = async () => {
    try {
      await API.graphql(graphqlOperation(deleteNews, { input: postToDelete }));
      setDeleted(true);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deletePost();
    setPostToDelete(initialState);
  };
  return (
    <div>
      <h2>Delete Posts</h2>
      <form onSubmit={handleSubmit}>
        <Input
          name="id"
          placeholder="Enter Post ID"
          type="number"
          value={postToDelete.id}
          onChange={(e) => setPostToDelete({ [e.target.name]: e.target.value })}
        ></Input>
        <br></br>
        <Button color="secondary" variant="contained" type="submit">
          Delete Post
        </Button>
      </form>
      {deleted ? <Alert color="success">Post deleted successfully</Alert> : ""}
    </div>
  );
}

export default Del;
