import React, { useState } from 'react'

const FunctionComponent = () => {

    // useState 사용하여, 상태 정의
    const [name, setName] = useState('Aloha');


    // 버튼 클릭 시
    const handleClick = (newName) => {
        console.log(`Click ${newName}`);

        // name 상태 업데이트
        setName(newName)
    }

    return (
        <div>
            <h1>함수형 컴포넌트</h1>
            <h2>Hello I'm {name}</h2>
            <button onClick={ () => handleClick('Aloha')}>Aloha</button>
            <button onClick={ () => handleClick('Joeun')}>Joeun</button>
        </div>
    )
}

export default FunctionComponent