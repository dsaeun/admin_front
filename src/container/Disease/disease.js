import React, { createContext, useState } from 'react'

const DiseaseContext = createContext({
  state: {
    disease: [
      {
        name: '',
        code: '',
        cure: '',
        description: '',
        image: '',
        parent_id: '',
      },
    ],
    symptoms: [],
    subjects: [],
    parts: [],
    partsData: [], // 파트 동적 추가 시 증상에 있는 파트 리스트도 같이 반영
    selectedDisease: {
      name: '',
    },
  },
  actions: {
    setDisease: () => {},
    setSymptoms: () => {},
    setSubjects: () => {},
    setParts: () => {},
    setPartsData: () => {},
    setSelectedDisease: () => {},
  },
})

const DiseaseProvider = ({ children }) => {
  const [disease, setDisease] = useState({
    name: '',
    code: '',
    cure: '',
    description: '',
    parent_id: '',
  })
  const [symptoms, setSymptoms] = useState([])
  const [subjects, setSubjects] = useState([])
  const [parts, setParts] = useState([])
  const [partsData, setPartsData] = useState([])
  const [selectedDisease, setSelectedDisease] = useState({})

  const value = {
    state: { disease, symptoms, subjects, parts, partsData, selectedDisease },
    actions: {
      setDisease,
      setSymptoms,
      setSubjects,
      setParts,
      setPartsData,
      setSelectedDisease,
    },
  }

  return (
    <DiseaseContext.Provider value={value}>{children}</DiseaseContext.Provider>
  )
}

const { Consumer: DiseaseConsumer } = DiseaseContext

export { DiseaseConsumer, DiseaseProvider }

export default DiseaseContext
