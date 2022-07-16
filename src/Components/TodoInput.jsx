// import axios from 'axios'
import React, { useState } from "react";
import { addTodo, getTodo } from "../Redux/action";
import { useDispatch } from "react-redux";
import Timer from "./Timer";

export const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleadd = () => {
    if (text === "") {
      alert("Please Add Something!");
    }
    else {
       addTodo({
         title: text,
         status: false,
         dispatch,
       }).then(() => {
         getTodo(dispatch);
         setText("");
       });
   }
    
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "65px",
        border: "1px solid",
        marginBottom: "20px",
      }}
    >
      <input
        style={{
          width: "80%",
          border: "none",
          paddingLeft: "10px",
        }}
        type="text"
        value={text}
        placeholder="What are you working on?"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        style={{ height: "50%", textAlign: "center" }}
        onClick={handleadd}
      >
        Add Todo
      </button>
      <Timer />
    </div>
  );
};
