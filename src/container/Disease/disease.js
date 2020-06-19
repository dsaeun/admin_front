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
  },
  action: {
    setDisease: () => {},
    setSymptoms: () => {},
    setSubjects: () => {},
  },
});

const DiseaseProvider = ({ children }) => {
  const [disease, setDisease] = useState({
    name: "",
    code: "",
    cure: "",
    description: "",
    image: "",
  });
  const [symptoms, setSymptoms] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const value = {
    state: { disease, symptoms, subjects },
    actions: { setDisease, setSymptoms, setSubjects },
  };

  return (
    <DiseaseContext.Provider value={value}>{children}</DiseaseContext.Provider>
  );
};

const { Consumer: DiseaseConsumer } = DiseaseContext;

export { DiseaseConsumer, DiseaseProvider };

export default DiseaseContext;
