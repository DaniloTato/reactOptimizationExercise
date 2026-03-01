import { useState, useCallback } from "react";
import ListItem from "./ListItem";

export default function ListSection() {
  console.log("Render ListSection");

  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  // Adds new item with UNIQUE and STABLE ID
  const addItem = () => {
    if (text.trim() === "") return;

    setItems([
      ...items,
      {
        id: crypto.randomUUID(), // unique & stable key
        text: text,
        likes: 0
      }
    ]);

    setText("");
  };

  // useCallback prevents function recreation
  const deleteItem = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const reverseList = () => {
    setItems([...items].reverse());
  };

  const likeItem = useCallback((id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, likes: item.likes + 1 }
          : item
      )
    );
  }, []);

  return (
    <div>
      <h2>Dynamic List Section</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <button onClick={reverseList}>Reverse</button>

      <ul>
        {/*
          map() correctly used.
          Each element has UNIQUE & STABLE key (item.id)
          NEVER use index as key.
        */}
        {items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            likeItem={likeItem}
          />
        ))}
      </ul>
    </div>
  );
}