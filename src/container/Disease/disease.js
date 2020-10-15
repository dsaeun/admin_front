import React, { createContext, useState } from "react";

const DiseaseContext = createContext({
  state: {
    disease: [
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
    parts: [],
  },
  actions: {
    setDisease: () => {},
    setSymptoms: () => {},
    setSubjects: () => {},
    setParts: () => {},
  },
});

const DiseaseProvider = ({ children }) => {
  const [disease, setDisease] = useState({
    name: "",
    code: "",
    cure: "",
    description: "",
  });
  const [symptoms, setSymptoms] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [parts, setParts] = useState([]);

  const value = {
    state: { disease, symptoms, subjects, parts },
    actions: { setDisease, setSymptoms, setSubjects, setParts },
  };

  return (
    <DiseaseContext.Provider value={value}>{children}</DiseaseContext.Provider>
  );
};

const { Consumer: DiseaseConsumer } = DiseaseContext;

export { DiseaseConsumer, DiseaseProvider };

export default DiseaseContext;
