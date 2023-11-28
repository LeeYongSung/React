import React from 'react'

const TodoItem = (props) => {
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div><input type="checkbox" className='stateCheck' /></div>
                <div><span>{props.name}</span></div>
                <input type="hidden" id='todono' value={props.no}/>
                <div><button className='btn btn-danger' onClick={ () => props.todoDelete(props.no) }>삭제</button></div>
            </div>
        </div>
    )
}

export default TodoItem