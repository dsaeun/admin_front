import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

const AdminLogin = ({ history }) => {
  const [inputID, setInputID] = useState('')
  const [inputPW, setInputPW] = useState('')
  const [result, setResult] = useState({})

  function handleClick(actions) {
    axios
      .post('/sign-in', {
        nickname: inputID,
        password: inputPW,
      })
      .then((response) => {
        const cookies = new Cookies()
        cookies.set('medical-admin-access-token', response.data.token)
        window.location.reload()
      })
      .catch((error) => {
        if (error.response) {
          console.error(error.response.data)
          setResult(error.response.data)
        }
      })
  }

  if (result.message) {
    alert(result.message)
    setResult({})
  }

  return (
    <div className="contentalign">
      <h3 className="adminTitle">
        이 페이지는 관리자 전용 페이지입니다. 로그인을 하세요.
      </h3>
      <h1 className="loginTitle">Login</h1>
      <input
        className="loginInput"
        value={inputID}
        onChange={({ target: { value } }) => setInputID(value)}
        type="text"
        placeholder="ID"
      />
      <br></br>
      <input
        className="loginInput"
        value={inputPW}
        onChange={({ target: { value } }) => setInputPW(value)}
        type="password"
        placeholder="password"
      />
      <br></br>
      <button className="loginBtn" onClick={() => handleClick()}>
        Login
      </button>
    </div>
  )
}

export default AdminLogin
