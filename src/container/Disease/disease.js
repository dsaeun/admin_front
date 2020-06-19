import React, { createContext, useState } from "react";

const DiseaseContext = createContext({
  state: {
    diseases: [
      {
        name: "",
        code: "",
        cure: "",
        description: "",
        image: "",
      }
    ],
    symptoms: [],
    subjects: [],
  },
  action: {
    setDiseases: () => {},
    setSymptoms: () => {},
    setSubjects: () => {},
  },
});

const DiseaseProvider = ({ children }) => {
  const [diseases, setDiseases] = useState([{
      name: "",
      code: "",
      cure: "",
      description: "",
      image: "",
  }]);
  const [symptoms, setSymptoms] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const value = {
    state: { diseases, symptoms, subjects },
    actions: { setDiseases, setSymptoms, setSubjects },
  };

  return (
    <DiseaseContext.Provider value={value}>{children}</DiseaseContext.Provider>
  );
};

const { Consumer: DiseaseConsumer } = DiseaseContext;

export { DiseaseConsumer, DiseaseProvider };

export default DiseaseContext;
