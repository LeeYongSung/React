import React, { useEffect, useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const TodoContainer = () => {

  // ✅ state
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState('')

  // ❓ hook
  useEffect(() => {
    // ✅ Mount, Update

    // 할일 목록 요청 [GET]
    fetch('http://192.168.30.119:8080/todos')
      .then( ( response ) => response.json() )
      .then( ( data ) => setTodoList(data) )
      .catch( (error) => console.log(error) );
    console.log('[GET] - /todos - 할일목록 요청');
  
    // ✅ UnMount
    return () => {
      
    }
  }, [])

  // 할일 등록
  const onSubmit = () => {
    console.log('할일 : ' + input);

    if( input == '' ) {
      alert('할 일을 입력해주세요')
      return
    }

    const data = {
      name: input,  // 할일 제목
      status: 0,    // 완료 여부(미완료-0,완료-1)
    };

    const init = {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };

    // 할일 등록 [POST]
    // ➡ 새로 등록된 할일 데이터
    fetch('http://192.168.30.119:8080/todos',init)
      .then( ( response ) => response.json() )
      .then( ( data ) => setTodoList([data, ...todoList]) )
      .catch( (error) => console.log(error) );

    setInput('')
  }

  // 할일 입력 이벤트
  const onChange = (e) => {
    setInput(e.target.value);
  }

  // 할일 완료 여부 수정
  const onToggle = (todo) => {
    console.log('할일 완료 여부 처리');
    console.log(todo);

    
    // PUT 요청
    const data = {
      no: todo.no,
      name: todo.name,
      status: todo.status ? 0 : 1,
    }

    const init = {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(data),
    }

    // 할일 수정 [PUT]
    // ➡ '수정 완료 메시지'
    fetch('http://192.168.30.119:8080/todos',init)
      .then( ( response ) => response.text() )
      .then( ( data ) => console.log(data) )
      .catch( (error) => console.log(error) );

    // 할일 완료 처리 후,
    // ➡ 클릭한 할일의 완료 여부를 toggle
    // let updatedTodoList = todoList.map((item) => {
    //   return item.no === todo.no ? {...item, status: !item.status} : item;
    // });
    // })
    // ➡ 완료된 할일은 아래쪽 정렬
    // let sortedTodoList = updatedTodoList.sort((a, b) => {
      // 정렬 기준
      // 1. 완료 여부 - 0, 1 오름차순
      // 2. 할일 번호 내림차순
    //   return a.status - b.status == 0 ? b.no - a.no : a.status - b.status;
    // })

    const sortedTodoList 
          = todoList.map((item) => item.no === todo.no ? {...item, status: !item.status} : item)
                    .sort((a, b) => a.status - b.status == 0 ? b.no - a.no : a.status - b.status)

    setTodoList(sortedTodoList)

  };

  // 할 일 삭제
  const onDelete = (no) => {

    const init = {
        method: 'DELETE',
    }

    // 할일 삭제 [DELETE]
    // ➡ '삭제 완료 메시지'
    fetch(`http://192.168.30.119:8080/todos/${no}`,init)
      .then( ( response ) => response.text() )
      .then( ( data ) => console.log(data) )
      .catch( (error) => console.log(error) );

      // 삭제된 할 일 항목 제거
      const updatedTodoList = todoList.filter( (todo) => todo.no != no )

      setTodoList(updatedTodoList)
  }
  
  // 전체 삭제
  const onDeleteAll = () => {
    const init = {
        method: 'DELETE',
    }

    // 전체 삭제 [DELETE]
    // ➡ '삭제 완료 메시지'
    fetch(`http://192.168.30.119:8080/todos/-1`,init)
      .then( ( response ) => response.text() )
      .then( ( data ) => console.log(data) )
      .catch( (error) => console.log(error) );

      setTodoList( [] )
  }

  // 전체 완료
  const onComplteAll = () => {
    // PUT 요청
    // /todos : data : { no : -1 }
    const data = {
        no: -1,
      }
  
      const init = {
        method: 'PUT',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data),
      }
  
      // 할일 전체 완료 [PUT]
      // ➡ '수정 완료 메시지'
      fetch('http://192.168.30.119:8080/todos',init)
        .then( ( response ) => response.text() )
        .then( ( data ) => console.log(data) )
        .catch( (error) => console.log(error) );


        const sortedTodoList 
        = todoList.map((item) => ({ ...item, status: 1}) )
                  .sort((a, b) => a.status - b.status == 0 ? b.no - a.no : a.status - b.status)

        setTodoList(sortedTodoList)
  }

  // 할일 수정
  const onUpdate = (todo) => {
    console.log('할일 완료 여부 처리');
    console.log(todo);

    
    // PUT 요청
    const data = {
      no: todo.no,
      name: todo.name,
      status: todo.status,
    }

    console.log(data);

    const init = {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(data),
    }

    // 할일 수정 [PUT]
    // ➡ '수정 완료 메시지'
    fetch('http://192.168.30.119:8080/todos',init)
      .then( ( response ) => response.text() )
      .then( ( data ) => console.log(data) )
      .catch( (error) => console.log(error) );

    const sortedTodoList 
          = todoList.sort((a, b) => a.status - b.status == 0 ? b.no - a.no : a.status - b.status)

    setTodoList(sortedTodoList)

  };

  return (
    <div className="container">
        <TodoHeader/>
        <TodoInput input={input} onChange={onChange} onSubmit={onSubmit}/>
        <TodoList todoList={todoList} onToggle={onToggle} onDelete={onDelete} onUpdate={onUpdate} />
        <TodoFooter onDeleteAll={onDeleteAll} onComplteAll={onComplteAll}/>
    </div>
  )
}

export default TodoContainer

