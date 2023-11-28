import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem';

const TodoList = () => {

    const [todoData, setTodoDate] = useState([]);
    const [state, setState] = useState([]);
    
    // 삭제
    const todoDelete =  (no) => {
        console.log(no);
        const url = 'http://192.168.30.119:8080/todos/' + no;
        console.log(url);
        const init = {
            method : 'DELETE'
        }
        fetch(url, init)
            .then(response => {
                // 서버 응답을 JSON 형식으로 파싱
                return response.json();
            });

    }

    // 목록
    useEffect(() => {
        async function request() {
            const response = await fetch('http://192.168.30.119:8080/todos',
            {
              method: 'GET',
            });
            const data = await response.json();
            setTodoData(data);
            console.log(data);
        }
        request();
    }, [setState]);

    return (
        <div>
            <div className='todoData'>
            {
                todoData.map((todo, index) => {
                    return <TodoItem key={index} name={todo.name} no={todo.no} todoDelete={todoDelete} />
                })
            }
            </div>
        </div>
    )
}

export default TodoList
