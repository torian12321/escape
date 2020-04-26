import React from 'react';
import logo from './logo.svg';
import { Accordion } from './components';
import './assets/styles/App.scss';
import { useBoolean } from './hooks';

function App() {
  const [val, actions] = useBoolean(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {`Val is ${val}`}
          Edit <code>src/App.tsx</code> and save to reload.
          <button onClick={actions.toggle}>Change</button>
        </p>
        <Accordion />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
