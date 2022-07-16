import React from "react";
import { useSelector } from "react-redux";
import Timer from "./Timer";

export const TodoList = () => {
  const todosData = useSelector((store) => store.todos);
  const loading = useSelector((store) => store.loading);
  const error = useSelector((store) => store.error);
  return (
    <div>
      {loading ? "...loading" : null}
      {error ? "404 Error" : null}
      {todosData.map((e) => {
        return (
          <div
            key={e.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              height: "65px",
              border: "1px solid",
              marginBottom: "20px",
            }}
          >
            <h3 style={{ paddingLeft: "10px" }}>{e.title}</h3>
            <Timer />
          </div>
        );
      })}
    </div>
  );
};
