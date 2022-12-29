// import './App.css';
// import Header from './components/Header/Header.js'
// import SearchContainer from './components/Search/SearchContainer.js'
// import Media from './components/Media/Media.js';

// function App() {
//   return (
//     <div className="app">
//       <div className="main">
//         <Header/>
//         <SearchContainer/>
//         <Media/>
//       </div>
//     </div>
//   );
// }

// export default App;
import React from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from "./Pages/Trending";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='trending' element={<Trending/>}/>
      </Routes>
    </BrowserRouter>
  );
}
