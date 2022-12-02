import React, {useState} from 'react'

const SearchBar = ({setQuery}) => {

    const handleQuery = (e) => {
        e.preventDefault();
    }

  return (
    <div id='Searchbar_Container'>
    
    <form onSubmit={handleQuery}>
        <label for="searchBar">Search Movies</label>
        <input id="searchBar"
        type="text" onChange={(e) => setQuery(e.target.value)}></input>
    </form>
    
    </div>
  )
}

export default SearchBar