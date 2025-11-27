import React, { useState } from "react";
import TodoItem from "../components/TodoItem";

type Todo = {
  id: number;
  text: string;
};

const TodoPage: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchTodo, setSearchTodo] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text,
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: number, newText: string) => {
    if (!newText.trim()) return;

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const handleSearch = () => {
    setSearchTodo(searchInput);
  };

  const filterTodo = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTodo.toLocaleLowerCase())
  );

  const sortAsc = () => {
    const sorted = [...todos].sort((a, b) => a.text.localeCompare(b.text));
    setTodos(sorted);
  };

  const sortDesc = () => {
    const sorted = [...todos].sort((a, b) => b.text.localeCompare(a.text));
    setTodos(sorted);
  };

  console.log(todos);
  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Tambah Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Tambah</button>
      <br />
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Cari</button>
      <br />
      <select
        name=""
        id=""
        onChange={(e) => {
          if (e.target.value === "asc") sortAsc();
          if (e.target.value === "desc") sortDesc();
        }}
      >
        <option value="asc">Asc (A - Z)</option>
        <option value="desc">Desc (Z - A)</option>
      </select>
      <h3>LIST DATA</h3>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        ))}
      </ul>

      <h3>SEARCH LIST</h3>
      <ul>
        {filterTodo.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
