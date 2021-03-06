import React, { useContext, useEffect } from 'react'
import '../App.css'
import { withRouter } from 'react-router-dom'
import DisAddText from '../component/DisAddText'
import AdminDisAdd from '../component/AdminDisAdd'
import DiseaseContext from '../container/Disease/disease'
import axios from 'axios'

let AdminDisEditForm = ({ history, match }) => {
  const { state, actions } = useContext(DiseaseContext)
  const { symptoms, subjects, parts } = state
  const { name, cure, code, description, parent_id } = state.disease
  const { setDisease, setSymptoms, setSubjects, setSelectedDisease, setParts } = actions
  const symptom_ids = symptoms.map((symptom) => symptom.id)
  const subject_ids = subjects.map((subject) => subject.id)
  const part_ids = parts.map((part) => part.id)

  useEffect(() => {
    axios
      .get(`/diseases/${match.params.id}`)
      .then((response) => {
        setDisease(response.data)
        setSymptoms(response.data.symptoms)
        setSubjects(response.data.subjects)
        setParts(response.data.parts)
        setSelectedDisease(response.data.parent)
      })
      .catch((error) => {
        console.error(error)
        // alert(error);
      })
  }, [])

  const onSubmit = (event) => {
    event.preventDefault()
    const requestBody = {
      content: {
        name,
        code,
        cure,
        description,
      },
      parent_id,
      symptom_ids,
      subject_ids,
      part_ids,
    }
    axios
      .patch(`/diseases/${match.params.id}`, requestBody)
      .then((response) => {
        alert('질병이 수정되었습니다.')
        history.push(`/AdminDetail/${match.params.id}`)
      })
      .catch((error) => {
        console.error(error.response.data)
        alert('질병 수정이 실패했습니다.')
      })
  }

  return (
    <div className="contentalign">
      <form onSubmit={(event) => onSubmit(event)}>
        <h1>질병 수정</h1>
        <div className="disFormAlign">
          <DisAddText></DisAddText>
          <AdminDisAdd></AdminDisAdd>
          <button className="saveBtn" type="submit">
            저장
          </button>
        </div>
      </form>
    </div>
  )
}

export default withRouter(AdminDisEditForm)
