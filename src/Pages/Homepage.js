import '../App.css';
import Header from '../components/Header/Header.js'
import SearchContainer from '../components/Search/SearchContainer.js'
import Media from '../components/Media/Media.js';

function Homepage() {
  return (
    <div className="app">
      <div className="main">
        <Header/>
        <SearchContainer/>
        <Media/>
      </div>
    </div>
  );
}

export default Homepage;
