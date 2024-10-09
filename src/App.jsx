import { useState } from "react";
import "./App.css";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm'
import Search from "./components/search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar inglês",
      category: "Estudo",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Praticar JavaScript",
      category: "Estudo",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Exercício físico",
      category: "Saúde",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Comprar presentes de aniversário",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Revisar CSS Grid",
      category: "Estudo",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: (todos[todos.length - 1]?.id || 0) + 1,
        text,
        category,
        isCompleted: false,
      }
    ]
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);
    setTodos(newTodos);
  }

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Last");

  return (
    <>
      <div className="body__bg"></div>
      <div className="app">
        <h1>TO DO</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>
        <div className="todo__list">
          {todos
          .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted )
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : sort === "Desc" ? b.text.localeCompare(a.text) : b.id - a.id)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
          ))}
        </div>
          <TodoForm addTodo={addTodo}/>
      </div>
    </>
  );
}

export default App;
