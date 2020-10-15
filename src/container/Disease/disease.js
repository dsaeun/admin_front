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
    selectedDisease: {
      name: '',
    },
  },
  actions: {
    setDisease: () => {},
    setSymptoms: () => {},
    setSubjects: () => {},
    setParts: () => {},
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
  const [selectedDisease, setSelectedDisease] = useState({
    name: '',
  })

  const value = {
    state: { disease, symptoms, subjects, parts, selectedDisease },
    actions: {
      setDisease,
      setSymptoms,
      setSubjects,
      setParts,
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
