import { useState, useCallback } from "react";
import ListItem from "./ListItem";

export default function ListSection() {
  console.log("Render ListSection");

  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  // We need to create unique ids
  const addItem = () => {
    if (text.trim() === "") return;

    setItems([
      ...items,
      {
        id: crypto.randomUUID(), // unique key
        text: text,
        likes: 0
      }
    ]);

    setText("");
  };

  /* useCallback prevents function recreation
  because we are passing this functions as params
  for the List item component (we store the
  function by reference thanks to useCallback) */

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
          We do not use index as key.
        */}
        {items.map(item => (
          <ListItem
            key={item.id /* the unique id we declared on line 17*/}
            item={item}
            deleteItem={deleteItem}
            likeItem={likeItem}
          />
        ))}
      </ul>
    </div>
  );
}