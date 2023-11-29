import React from 'react'

const TodoItem = ({todo, onToggle, onDelete, onUpdate}) => {

  let { no, name, status } = todo;
  status = status == 1 ? true : false;
  const className = status ? 'todoItem active' : 'todoItem';
  
  return (
    <li className={className}>
        <div className="item">
            <input type="checkbox" id={todo.no}
                                   checked={status}
                                   onChange={ () => onToggle(todo) }/>
            <label htmlFor={todo.no}></label>
            {/* 할일 */}
            {/* <input type="text" className='input' value={todo.name} onChange={ (e) => {todo.name = e.target.value}}/> */}
            <input type="text" id={`name-${todo.no}`} className='input' defaultValue={todo.name} />
            {/* <span>{todo.name}</span> */}
        </div>
        <div className="item">
            <button className='btn btn-sm' onClick={ () =>{ todo.name = document.getElementById(`name-${todo.no}`).value;
                                                            onUpdate(todo); 
                                                            }} >✅</button>
            <button className='btn btn-sm' onClick={ () => onDelete(no) }>❌</button>
        </div>
    </li>
  )
}

export default TodoItem