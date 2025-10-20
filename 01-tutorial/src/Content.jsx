import React from "react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      itemName: "One half pound bag of Cocoa Covered Almonds",
    },
    {
      id: 2,
      checked: false,
      itemName: "Item 2",
    },
    {
      id: 3,
      checked: false,
      itemName: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItems("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItems("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                onDoubleClick={() => handleCheck(item.id)}
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.itemName}
              </label>
              <FaTrash
                role="button"
                tabIndex={0}
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty!</p>
      )}
    </main>
  );
};

export default Content;
