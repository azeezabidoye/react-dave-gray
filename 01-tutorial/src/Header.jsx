import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

// Default Props replaces the props whenever props are not available
Header.defaultProp = {
  title: "Default Grocery List",
};

export default Header;
