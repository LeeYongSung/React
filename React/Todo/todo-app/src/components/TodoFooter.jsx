import React from 'react'

const TodoFooter = () => {

    const totalDelete = (no) => {
        const url = 'http://192.168.30.119:8080/todos/' + no;
        console.log(url);
        const init = {
            method : 'DELETE'
        }
        fetch(url, init)
    };

  return (
    <div className='d-flex justify-content-between'>
        <div>
            <button className='btn btn-danger' onClick={() => totalDelete(-1)}>전체삭제</button>
        </div>
        <div>
            <button className='btn btn-info'>전체완료</button>
        </div>
    </div>
  )
}

export default TodoFooter