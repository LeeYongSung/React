import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ( { todoList } ) => {

    // const todoList = [
    //     { no : 1, name : '할 일1', status: 0},
    //     { no : 2, name : '할 일2', status: 0},
    //     { no : 3, name : '할 일3', status: 0},
    // ];

    return (
        <ul className="todoList">
            {/* 코드가 한줄일 때는 리턴 생략 가능 {}대신 () 로 표시 */}
            {todoList.map( (todo) => (
                <TodoItem key={todo.no} todo={todo} />
            ))}
        </ul>
    )
}

export default TodoList