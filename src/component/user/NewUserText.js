import React, { useState } from 'react'
import '../../App.css'
import axios from 'axios'

const NewUserText = ({ usersRefresh }) => {
    const [user, setUser] = useState({
        nickname: '',
        password: '',
        role: '',
    })

    return (
        <div className="NewSymText">
            <h2>새 관리자 추가</h2>
            <input
            placeholder="닉네임"
                type="text"
                className="inputSym"
                onChange={(event) =>
                    setUser({
                        ...user,
                        nickname: event.target.value,
                    })
                }
            />
            <input
            placeholder="비밀번호"
                type="password"
                className="inputSym"
                onChange={(event) =>
                    setUser({
                        ...user,
                        password: event.target.value,
                    })
                }
            />
            <input
            placeholder="역할"
                type="text"
                className="inputSym"
                onChange={(event) =>
                    setUser({
                        ...user,
                        role: event.target.value,
                    })
                }
            />
            <button
                className="inputSymSave"
                onClick={() => {
                    if (!user.nickname && !user.password) {
                        alert('값이 비어있으면 안됩니다')
                        return;
                    }

                    axios
                        .post('/users', user)
                        .then(() => {
                            alert('관리자가 추가되었습니다')
                            usersRefresh()
                        })
                        .catch((error) => {
                            console.error(error)
                        })
                }}
            >
                저장
            </button>
        </div>
    )
}

export default NewUserText
