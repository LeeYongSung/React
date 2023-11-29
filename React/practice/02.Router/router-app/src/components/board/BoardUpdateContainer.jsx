import React from 'react'
import { Link, useParams } from 'react-router-dom'

const BoardUpdateContainer = () => {
    const { no } = useParams();
  return (
    <div>
        <h1>게시글 수정</h1>
        <h3>번호 : {no}</h3>
        <Link to="/boards">목록</Link>
        <hr />
        <Link to="/boards/insert">수정</Link>
    </div>
  )
}

export default BoardUpdateContainer