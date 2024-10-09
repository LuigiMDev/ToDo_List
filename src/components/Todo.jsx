import React from "react";

const Todo = ({todo, removeTodo, completeTodo}) => {

  return (
    <div className="todo">
      <div className="content" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        <p className="todo__text">{todo.text}</p>
        <p className="todo__category">({todo.category})</p>
      </div>
      <div className="button__div">
        <button onClick={() => completeTodo(todo.id)} className="complete">Completar</button>
        <button onClick={() => removeTodo(todo.id)} className="remove">X</button>
      </div>
    </div>
  );
};

export default Todo;
