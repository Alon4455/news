import { Button, Input, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createNews } from "../graphql/mutations";
import { Alert } from "@material-ui/lab";
function Add() {
  const [uploaded, setUploaded] = useState(false);
  const [form, setForm] = useState({
    id: "",
    title: "",
    content: "",
    createdAt: () => JSON.stringify(Date.now().toLocaleDateString),
    updatedAt: () => JSON.stringify(Date.now().toLocaleDateString),
  });
  const uploadItem = async () => {
    try {
      await API.graphql(graphqlOperation(createNews, { input: form }));
      setUploaded(true);
      // return <Alert color="success">Article Posted</Alert>;
    } catch (error) {
      console.log("error", error);
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    uploadItem();
  };
  let onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => {
      return {
        ...p,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <h2>Add Article</h2>
      <form>
        <Input
          onChange={onChange}
          name="id"
          placeholder="ID"
          value={form.id}
          type="number"
        ></Input>
        <br></br>
        <Input
          onChange={onChange}
          name="title"
          value={form.title}
          placeholder="Title"
          type="text"
        ></Input>
        <br></br>
        <TextField
          variant="outlined"
          multiline
          rows={4}
          onChange={onChange}
          name="content"
          value={form.content}
          placeholder="Content"
          type="text"
        ></TextField>
        <br></br>
        <Button
          className="add-btn"
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          Post
        </Button>
      </form>
      {uploaded ? <Alert color="success">Post Uploaded</Alert> : ""}
    </div>
  );
}

export default Add;
