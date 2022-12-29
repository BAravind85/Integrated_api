import './App.css';
import Header from './components/Header.js'
import SearchContainer from './SearchContainer.js'
function App() {
  return (
    <div className="app">
      <div className="main">
        <Header/>
        <SearchContainer/>
        <h1>Media</h1>
      </div>
    </div>
  );
}

export default App;
