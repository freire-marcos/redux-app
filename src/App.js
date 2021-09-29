import './App.css';
import Media from './Components/Media/Media';
import Soma from './Components/Soma/Soma';
import Sorteio from './Components/Sorteio/Sorteio';
import Intervalo from './Components/Intervalo/Intervalo';

function App() {
  return (
    <div className="App">
      <h2>Exercício redux</h2>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
