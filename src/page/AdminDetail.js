import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

let AdminDetail = ({ match, history }) => {
  const [disease, setDisease] = useState({
    symptoms: [],
    parts: [],
    subjects: [],
    drugs: [],
    children: [],
  })

  useEffect(() => {
    axios
      .get(`/diseases/${match.params.id}`)
      .then((response) => {
        setDisease(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [match.params.id])

  const onDelete = () => {
    axios.delete(`/diseases/${match.params.id}`)
        .then((response) => {
          alert('질병이 삭제되었습니다.')
          history.push(`/AdminDisList/${match.params.id}`)
        })
        .catch((error) => {
          console.error(error)
        })
  }

  return (
    <div className="contentalign">
      <button className="editBtn">
        <Link to={`/AdminDisEditForm/${match.params.id}`}>수정</Link>
      </button>
      <button className="editBtn" onClick={() => onDelete()}>
        삭제
      </button>
      <h1>질병 상세정보</h1>
      <table>
        <tbody>
          <tr>
            <td>질병명 : {disease.name}</td>
          </tr>
          <tr>
            <td>치료법 : {disease.cure}</td>
          </tr>
          <tr>
            <td>
              증상 :
              <ul>
                {disease.symptoms.map((symptom) => (
                  <li key={symptom.id}>{symptom.name}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              관련 부위 :
              <ul>
                {disease.parts.map((part) => (
                  <li key={part.id}>{part.name}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              진료 과목 :
              <ul>
                {disease.subjects.map((subject) => (
                  <li key={subject.id}>{subject.name}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              상위 질병 :
              <ul>
                <li>
                  {disease.parent ? (
                    <Link to={`/AdminDetail/${disease.parent.id}`}>
                      {disease.parent ? disease.parent.name : null}
                    </Link>
                  ) : null}
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              하위 질병:
              <ul>
                {disease.children.map((child) => (
                  <li key={child.id}>
                    <Link to={`/AdminDetail/${child.id}`}>{child.name}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AdminDetail
