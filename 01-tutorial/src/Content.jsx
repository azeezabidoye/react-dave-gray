import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dave");
  function handleNameChange() {
    const names = ["Mata", "Ben", "Yunus"];
    const int = Math.floor(Math.random() * names.length);
    setName(names[int]);
  }

  const handleClick = () => {
    return handleNameChange();
  };
  const handleClick2 = (firstName) => {
    console.log(`You clicked to see ${firstName}`);
  };
  return (
    <main>
      <p>
        Today we celebrate <strong>{name}</strong> 🎉
      </p>
      <button onClick={handleClick}>Change Name</button>
      <button onClick={() => handleClick2("Azeez")}>Click Me</button>
    </main>
  );
};

export default Content;
