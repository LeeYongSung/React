import React from 'react'

const TodoInput = ( { input, onChange, onSubmit } ) => {
  return (
    <div>
        <form className='form'>
            <input placeholder='할 일 입력' value={input} onChange={onChange} className='input'  />
            <button type='button' className='btn' onClick={onSubmit}>추가</button>
        </form>
    </div> 
  )
}

export default TodoInput