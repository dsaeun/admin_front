import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import _ from 'lodash'
import EditUser from '../component/user/EditUser'
import NewUserText from '../component/user/NewUserText'

const UserManage = () => {
    /**
     * usersData: 기존 관리자 리스트
     * userDetail: 기존 진료과목 상세 내용
     * visible: 추가, 수정 컴포넌트 렌더링 여부
     */
    const [usersData, setUsersData] = useState([])
    const [userDetail, setUserDetail] = useState({})
    const [visible, setVisible] = useState({
        NewUserText: false,
        EditUser: false,
    })
    const [keyword, setKeyword] = useState('')

    // 관리자 데이터를 불러옵니다
    useEffect(() => {
        axios
            .get('/users')
            .then((response) => {
                setUsersData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    // 관리자 리스트를 받아와 출력합니다
    const users = usersData.map((userData, index) => (
        <li className="checkli" key={index}>
            <label>
                <input
                    type="radio"
                    name="symInfo"
                    value="symInfo"
                    onClick={() => {
                        axios
                            .get(`/users/${userData.id}`)
                            .then((response) => {
                                setUserDetail(response.data)
                            })
                            .catch((error) => {
                                console.error(error)
                            })
                    }}
                />
                {userData.nickname}
            </label>
        </li>
    ))

    // 관리자의 상세 정보를 출력합니다
    let details = userDetail.nickname ? (
        <ul>
            <li className="liStyle">
                아이디 : {userDetail.nickname}
            </li>
            <li className="liStyle">
                권한 : {userDetail.role}
            </li>
        </ul>
    ) : null

    // 검색 기능
    const onKeyword = () => {
        axios
            .get(`/users/?keyword=${keyword}`)
            .then((response) => {
                setUsersData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // 삭제
    const onDelete = () => {
        if (_.isEmpty(userDetail)) {
            alert('삭제할 관리자를 선택해주세요')
            return
        }
        axios
            .delete(`/users/${userDetail.id}`)
            .then((response) => {
                alert(response.data.message)
                usersRefresh()
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // 추가, 수정, 삭제 시 리스트를 리렌더링합니다
    const usersRefresh = () => {
        setUsersData([])
        axios
            .get('/users')
            .then((response) => {
                setUsersData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
        axios
            .get(`/users/${userDetail.id}`)
            .then((response) => {
                if (response.data) {
                    setUserDetail(response.data)
                } else {
                    setUserDetail({})
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div>
            <h1>관리자 관리</h1>
            <div className="connectInfo">
                <h2>관리자 정보</h2>
                {details}
            </div>

            <div className="checkInfo">
                <input
                    type="text"
                    className="searchSymptom"
                    value={keyword}
                    onChange={(event) => {
                        setKeyword(event.target.value)
                    }}
                />
                <button className="SymptomBtn" onClick={() => onKeyword()}>
                    search
                </button>
                {users}
            </div>

            <div className="manageButtonDiv">
                <button
                    className="manageButton"
                    // visible 기능
                    onClick={() =>
                        visible.NewUserText
                            ? setVisible({
                                ...visible,
                                NewUserText: false,
                            })
                            : setVisible({
                                ...visible,
                                NewUserText: true,
                            })
                    }
                >
                    추가
                </button>
                <button
                    className="manageButton"
                    // visible 기능
                    onClick={() => {
                        if (_.isEmpty(userDetail)) {
                            alert('관리자를 선택해야 합니다')
                            return
                        }
                        visible.EditUser
                            ? setVisible({
                                ...visible,
                                EditUser: false,
                            })
                            : setVisible({
                                ...visible,
                                EditUser: true,
                            })
                    }}
                >
                    수정
                </button>
                <button className="manageButton" onClick={() => onDelete()}>
                    삭제
                </button>
            </div>

            {visible.NewUserText ? (
                <NewUserText usersRefresh={usersRefresh} />
            ) : null}
            {visible.EditUser ? (
                <EditUser
                    userDetail={userDetail}
                    usersRefresh={usersRefresh}
                />
            ) : null}
        </div>
    )
}

export default UserManage
