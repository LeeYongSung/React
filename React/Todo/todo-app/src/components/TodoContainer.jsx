import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';
import TodoList from './TodoList';

const TodoContainer = () => {
  return (
    <div className='main'>
        <div className='Todo_box'>
           <TodoHeader />
           <TodoInput />
           <TodoList />
           <TodoFooter />
        </div>
    </div>
  )
}

export default TodoContainer