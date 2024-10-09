import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category);
        //Limpar campos
        setCategory("");
        setValue("");
    }

  return (
    <div className='div__form'>
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit} className='todo__form'>
            <input type="text" placeholder='Digite o título' value={value} onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma Categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudo">Estudo</option>
                <option value="Saúde">Saúde</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Outros">Outros</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm