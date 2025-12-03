import { useState, useEffect } from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);

  // 1️⃣ Load initial data safely from localStorage
  // const [items, setItems] = useState(() => {
  //   try {
  //     const savedItems = localStorage.getItem("shoppinglist");
  //     return savedItems ? JSON.parse(savedItems) : [];
  //   } catch (error) {
  //     console.error("Error reading localStorage:", error);
  //     return [];
  //   }
  // });

  // 2️⃣ Save updated items back to localStorage whenever they change
  // useEffect(() => {
  //   localStorage.setItem("shoppinglist", JSON.stringify(items));
  // }, [items]);

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  // const setAndSaveItems = (newItems) => {
  //   setItems(newItems);
  //   localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  // };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItems = { id, checked: false, itemName: item };
    const listItems = [...items, myNewItems];
    // setAndSaveItems(listItems);
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    // setAndSaveItems(listItems);
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    // setAndSaveItems(listItems);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // addItem Function
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.itemName.toLowerCase().includes(search.toLowerCase())
        )}
        // items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
