import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';

function App() {
  return (
    <div className="App">
      <h2>Exercício redux</h2>
      <div className="linha">
        <Card titulo="Card 1" red />
      </div>
      <div className="linha">
        <Card titulo="Card 2" blue />
      </div>
      <div className="linha">
        <Card titulo="Card 2" blue />
      </div>
    </div>
  );
}

export default App;
