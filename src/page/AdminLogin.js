import React, { useState } from "react"
import { Redirect } from "react-router-dom"

function AdminLogin({ authenticated, login, location }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleClick = () => {
    try {
      login({ email, password })
    } catch (e) {
      alert("Failed to login")
      setEmail("")
      setPassword("")
    }
  }

  const { from } = location.state || { from: { pathname: "/" } }
  if (authenticated) return <Redirect to={from} />

  return (
    <div className="contentalign">
      <h1 className="loginTitle">Login</h1>
      <input
      className="loginInput"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="email"
      />
      <br></br>
      <input
      className="loginInput"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      /><br></br>
      <button className="loginBtn" onClick={handleClick}>Login</button>
    </div>
  )
}

export default AdminLogin;