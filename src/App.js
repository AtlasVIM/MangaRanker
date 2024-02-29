import './App.css';
import Leaderboard from './components/Leaderboard';
import MangaSearchAndAdd from './components/MangaSearch';



function App() {
  return (
    <div className="App">
      <div id='container'>
      <MangaSearchAndAdd/>
      <Leaderboard/>
      </div>
    </div>
  );
}

export default App;
