import React from 'react'
import { DiseaseProvider } from './disease'
import AdminDisEditForm from '../../page/AdminDisEditForm'

const DiseaseEditContainer = () => {
  return (
    <DiseaseProvider>
      <AdminDisEditForm />
    </DiseaseProvider>
  )
}

export default DiseaseEditContainer
