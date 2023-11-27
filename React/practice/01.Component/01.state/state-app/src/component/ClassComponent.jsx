import React, { Component } from 'react'

export class ClassComponent extends Component {

    // 생성자
    constructor(props) {
        super(props)

        // 상태 정의
        this.state = {
            name : "Aloha",
        };

        // 컴포넌트에 함수를 바인딩
        this.handleClickAloha = this.handleClickAloha.bind(this);
        this.handleClickJoeun = this.handleClickJoeun.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // Aloha 버튼 클릭 시,
    handleClickAloha() {
        console.log('Aloha Click');

        // 상태 설정
        this.setState( { name: 'Aloha'} )
    }

    // Joeun 버튼 클릭 시,
    handleClickJoeun() {
        console.log('Joeun Click');

        // 상태 설정
        this.setState( { name : 'Joeun' })
    }

    // 버튼 클릭 시,
    handleClick(newName) {
        console.log(`Click ${newName}`);

        // 상태 설정
        this.setState( { name : newName })
    }

    render() {
        const { name } = this.state
        return (
        <div>
             <h1>클래스 컴포넌트</h1>
             <h2>Hello I'm {name}</h2>
             {/* <button onClick={ this.handleClickAloha }>Aloha</button> */}
             {/* <button onClick={ this.handleClickJoeun }>Joeun</button> */}
             <button onClick={ () => this.handleClick('Aloha') }>Aloha</button>
             <button onClick={ () => this.handleClick('Joeun') }>Joeun</button>
        </div>
        )
    }
}

export default ClassComponent