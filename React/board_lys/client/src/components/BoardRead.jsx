import React from 'react'
import { Link } from 'react-router-dom'

const BoardRead = ({no, board}) => {
  return (
    <div>
        <h1>게시글 조회</h1>
        <h3>번호 {no}</h3>
        <Link to="/boards">목록</Link>
        <hr />
        <table board={1}>
            <tbody>
                <tr>
                    <td>번호</td>
                    <td>
                        <input type="text" value={board.no} readOnly />
                    </td>
                </tr>
                <tr>
                    <td>등록일자</td>
                    <td>
                        <input type="text" value={board.regDate} readOnly />
                    </td>
                </tr>
                <tr>
                    <td>수정일자</td>
                    <td>
                        <input type="text" value={board.updDate} readOnly />
                    </td>
                </tr>
                <tr>
                    <td>제목</td>
                    <td>
                        <input type="text" value={board.title} readOnly />
                    </td>
                </tr>
                <tr>
                    <td>작성자</td>
                    <td>
                        <input type="text" value={board.writer} readOnly />
                    </td>
                </tr>
                <tr>
                    <td>내용</td>
                    <td>
                        <input type="text" value={board.content} readOnly />
                    </td>
                </tr>
            </tbody>
        </table>
        <Link to={`/boards/update/${no}`}>수정</Link>
        <Link to="/boards">목록</Link>
    </div>
  )
}

export default BoardRead