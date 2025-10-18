import React from "react";
import { useState } from "react";

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

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="item">
            <input type="checkbox" checked={item.checked} />
            <label>{item.itemName}</label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
