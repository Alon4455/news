import { Button, Tooltip } from "@material-ui/core";
import React from "react";
function News(props) {
  return (
    <div className="post-title-btn">
      <Tooltip arrow title={<h3>{props.content}</h3>}>
        <Button
          style={{
            borderRadius: 100,
            color: "red",
          }}
          onClick={props.onClick}
        >
          {props.title}
        </Button>
      </Tooltip>
    </div>
  );
}

export default News;
