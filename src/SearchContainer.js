import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchContainer.css';
function SearchContainer() {
  return (
    <div className='search-container'>
        <input type='text' placeholder='Search gifs and sticker'/>
        <div className='search-icon'>
            <SearchIcon/>
        </div>
        </div>
  )
}

export default SearchContainer