import React from 'react'

const TodoInput = () => {
    
    // 버튼 클릭 시
    const todoadd = () => {
        console.log(`Click`);

        const url = 'http://192.168.30.119:8080/todos';
        let name = document.getElementById('todoinput').value;
        console.log(name);
        const data = {name : name};
        const init = {
            method  : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body    : JSON.stringify(data)  
        };

        fetch(url, init)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Request failed : ', error);
            });
            

        // name 상태 업데이트
        // setName(newName)
    }
        return (
          <div>
              <input type="text" id='todoinput' name='todoinput' placeholder='할 일 입력' />
              <button className='btn btn-success' onClick={todoadd}>추가</button>
          </div>
        )
}

export default TodoInput