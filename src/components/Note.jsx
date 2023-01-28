import React from "react";
import Deleteicon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick}>
        <Deleteicon />
      </Fab>
    </div>
  );
}

export default Note;
