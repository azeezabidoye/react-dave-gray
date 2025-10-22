import { useState } from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";

function App() {
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

  const [newItem, setNewItem] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted!!!`);
  };
  return (
    <>
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  );
}

export default App;
