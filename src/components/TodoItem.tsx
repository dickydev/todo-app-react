import React, { useState } from "react";

type TodoItemProps = {
  todo: {
    id: number;
    text: string;
  };
  onDelete: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    onUpdate(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Simpan</button>
          <button onClick={() => setIsEditing(false)}>Batal</button>
        </>
      ) : (
        <>
          <li>{todo.text}</li>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Hapus</button>
        </>
      )}
    </>
  );
};

export default TodoItem;
