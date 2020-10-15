import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'

import axios from 'axios'
import AdminLogin from '../../page/AdminLogin'
import Loading from '../common/Loading'

require('dotenv').config()

export default (Component) => {
  let WithAuth = () => {
    const [user, setUser] = useState({})
    const [token, setToken] = useState('')
    const [status, setStatus] = useState(0)

    useEffect(() => {
      const cookies = new Cookies()
      axios.defaults.baseURL = `${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_PORT}`
      const cookie_token = cookies.get('medical-admin-access-token')
      if (cookie_token) {
        // 헤더에 Bearer token 설정
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + cookie_token
        // 토큰 유효성 확인 되면 유저정보 불러오기
        axios
          .get('/profile')
          .then((response) => {
            setUser(response.data.user)
            setStatus(200)
            setToken(response.data.token)
          })
          .catch((error) => {
            cookies.remove('medical-admin-access-token')
            setStatus(401)
          })
      } else {
        setStatus(401)
      }
    }, [])

    if (token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    }

    if (status === 200) {
      return <Component user={user} token={token} />
    } else if (status === 401) {
      return <AdminLogin />
    } else {
      return <Loading />
    }
  }

  return WithAuth
}
