import React from "react";

const Content = () => {
  const names = ["Mata", "Ben", "Yunus"];
  function handleNameChange(namesArray) {
    const int = Math.floor(Math.random() * namesArray.length);
    return namesArray[int];
  }

  const handleClick = () => {
    console.log("You clicked me!");
  };
  return (
    <main>
      <p>
        Today we celebrate <strong>{handleNameChange(names)}</strong> 🎉
      </p>
      <button onClick={handleClick}>Click Me</button>
    </main>
  );
};

export default Content;
