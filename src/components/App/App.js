import brand from './brand.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={brand} className="App-logo" alt="brand" />
        <p>
          Cooking Trail Protection 🍳
        </p>
        <a
          className="App-link"
          href="https://vk.com/trailprotection"
          target="_blank"
          rel="noopener noreferrer"
        >
          Группа ВКонтакте
        </a>
      </header>
    </div>
  );
}

export default App;
