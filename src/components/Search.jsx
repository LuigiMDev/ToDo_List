import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className='search__div'>
        <h2>Pesquisar</h2>
        <input type="text" placeholder='Digite para pesquisar' onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default Search