import { Button, TextField } from "components";
import React from "react";
import BasicLayout from "../layouts/BasicLayout";

const TodoPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <BasicLayout>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <TextField placeholder="type here create todo" />
        <Button type="submit">Add</Button>
      </form>
    </BasicLayout>
  );
};

export default TodoPage;
