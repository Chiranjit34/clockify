import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import {
  getTodo,
} from "../Redux/action";

export const Todo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodo(dispatch);
  }, [dispatch]);

  return (
    <div>
      <h2 align="center">Todo Application</h2>
      <TodoInput />
      <br />
      <TodoList />
    </div>
  );
};
