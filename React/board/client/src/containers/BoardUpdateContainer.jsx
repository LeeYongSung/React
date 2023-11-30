import React from 'react'
import { Link } from 'react-router-dom'

// 게시글 수정
const BoardUpdateContainer = () => {
    const { no } = useParams();
    return (
        <div>
            <h1>게시글 수정</h1>
            <h3>번호 {no}</h3>
            <Link to="/boards">목록</Link>
            <hr />

        </div>
      )
    }

export default BoardUpdateContainer