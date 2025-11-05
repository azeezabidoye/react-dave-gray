# React-JS Course

#### Dev: Dave Gray

React JS was established: 8th May, 2013.
Development Environment: [NodeJS](https://www.nodejs.org)

### Getting Started

- Create a React Project with CLI

```shell
npm create vite@latest my-app -- --template react
```

### File Structure

- **Public:** The folder contains all assets for development an the HTML file. Assets like images, logos and other multimedia.
- **index.html:** All meta-tags can be added to this file but React takes over the content from SRC folder.
- **SRC:** This folder also contains the some assets especially the logo and some other essential files like `App.jsx` and `main.jsx` files which serves as the root of development and they also contain all the necessary code of the App.
- **package.json:** Here goes all the dependencies meant for the development of the App.

### Create Code-snippet using Emmet shortcut

- Go to `settings` on VsCode
- Click `settings` options
- Select "Emmet:Include Languages"
- Add Item - "javascript"
- Add value of "javascriptreact"
- Select OK

#### Package.json File > Script Attribute

- `npm run dev` - for development
- `npm build` - for final compilation and deployment

#### App.jsx File - Parent component for all other components

- Here goes the component for the application, which contains all imported modules, assets, components and functions
- This file is made up of all necessary imports and its components
- A component is a JSX, which is a function that renders the combination of JavaScript, and HTML and CSS elements
- The component for the `App.jsx` file then finally exported and rendered in the `main.jsx` file

#### React Dev Tools

- Open the dev-tools of your webpage
- Click the `components` tab in the navigation ...
- ... there you will see the components tree of your React App

#### Styling React Applications & CSS Modules

- **Inline-CSS:** Insert the style attribute into the HTML element for styling and ensure to open another curly-braces for your style definitions

```javascript
<p style={{ color: "red" }}>Hello World!!!</p>
```

- **Internal CSS:** Create an object in the JSX and specify your styling definition in a key-value pair format. You can then specify the variable as a style in the HTML element

```javascript
const styleVar = {
  color: "red",
  padding: 20,
};
```

```javascript
<p style={styleVar}>Hello World!!!</p>
```

- **Global CSS:** The `index.css` file contains all the predefined style attributes for the application and its traditionally configured to work for the entire app via the `main.jsx` file.
  However, global CSS files can be created for a component to contain all style attributes of the designated component. To create a stylesheet for a single component:
  - Create a new CSS file similar to the component name e.g. `componentName.css`
  - Import the CSS file into the designated component

```javascript
import "./componentName.css";
```

- Use `className` to attribute the styles to the HTML elements

```javascript
<p className="paragraph">Hello World!!!</p>
```

- **CSS Module:** You can have different components with similar class names and this may become cumbersome and difficult to handle. Therefore, CSS Module styling is recommended:
  - Create a new CSS file for your component stylesheet e.g. `ComponentName.module.css` and define your styles
  - Import the file into your component file and specify the classes
  ```javascript
  import classes from "./ComponentName.module.css";
  ```
  - Assign these classes to your HTML elements
  ```javascript
  <p className={classes.paragraph}>Hello World!!!</p>
  ```

#### Click Events

Click events are events and logics that triggers actions on the webpage. To create such an event, two things are involved:

1. The function (Logic)
2. The Button/Element (To be clicked)
   There are different approaches to how the functions are written and how they are called.

- **Function without parameters:**

```javascript
const handleClick = () => {...logic}
```

```javascript
<button onClick={handleClick}>Click Me...</button>
```

**NB:** If the `handleClick()` parenthesis is added where the function is called, it becomes a function constructor which gets called every time the page reloads.

- **Function with parameters:**

```javascript
const handleClick = (param) => {...logic}
```

```javascript
<button onClick={() => handleClick("arg")}>Click Me...</button>
```

- **Function with 'Event' as parameter:**

```javascript
const handleClick = (e) => {e.preventDefault() ...logic}
```

```javascript
<button onClick={(e) => handleClick(e)}>Click Me...</button>
```

#### React Hook

React Hook help changes the state of a component and re-renders the JSX.

- Import the React hook into the component file

```javascript
import { useState } from "react";
```

- Destructure the Hook `useState` function to access the `getter` and `setter` variables:

```javascript
const [variable, setVariable] = useState();
```

- Use the `getter` variable to provide the JS-expression as a string interpolation in the JSX

```javascript
 <p> Hello World and {variable}/p>
```

**NB:**

```javascript
const [variable, setVariable] = useState("John");
```

- The value inserted in the function call of the `useState()` hook e.g ("John"), is called the default value. This sets the default value before the function is being used to change such.

- The `getter` renders the state
- The `setter` sets the state
- The `setter` is being used as a logic in a function
- The function is then used by a JSX element e.g button with the `onClick()` attribute

#### Lists
