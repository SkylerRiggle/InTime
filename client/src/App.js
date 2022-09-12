import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <label for="username">Username: </label>
        <input type="text" id="username"></input>
        <label for="password">Password: </label>
        <input type="text" id="password"></input>
      </body>
    </div>
  );
}

export default App;
