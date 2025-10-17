import React from "react";

const Content = () => {
  const names = ["Mata", "Ben", "Yunus"];
  function handleNameChange(namesArray) {
    const int = Math.floor(Math.random() * namesArray.length);
    return namesArray[int];
  }
  return (
    <main>
      <p>
        Today we celebrate <strong>{handleNameChange(names)}</strong> 🎉
      </p>
    </main>
  );
};

export default Content;
