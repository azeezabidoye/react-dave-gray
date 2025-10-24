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
