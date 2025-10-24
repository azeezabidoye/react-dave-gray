import { useState, useEffect } from "react";
import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  // 1️⃣ Load initial data safely from localStorage
  const [items, setItems] = useState(() => {
    try {
      const savedItems = localStorage.getItem("shoppinglist");
      return savedItems ? JSON.parse(savedItems) : [];
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return [];
    }
  });

  // 2️⃣ Save updated items back to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItems("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItems = { id, checked: false, itemName: item };
    const listItems = [...items, myNewItems];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // addItem Function
    addItem(newItem);
    setNewItem("");
  };

  return (
    <>
      <Header title="Grocery List" />
      <SearchItem search={search} setSearch={setSearch} />
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
