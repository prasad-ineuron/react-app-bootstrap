import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to React + Bootstrap</p>
        <a
          className="App-link"
          href="https://ineuron.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logo-light.png"
            height={70}
            width={140}
            alt="ineuron-logo"
          />
        </a>
      </header>
    </div>
  );
}

export default App;
