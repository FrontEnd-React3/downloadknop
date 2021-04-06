import logo from './logo.svg';
import cv from './cv.pdf';
import './App.css';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href={cv} download>
        <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href=""
          download={logo}
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 
export default App;
