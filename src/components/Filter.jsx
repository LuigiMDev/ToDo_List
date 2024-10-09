import React from 'react'

const Filter = ({filter, setFilter, sort, setSort}) => {
  return (
    <div className='Filter'>
        <h2>Filtrar:</h2>
        <div className="filter__options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div className='order__div'>
                <p>Ordenar</p>
                <button onClick={() => setSort("Last")}>Recente</button>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter