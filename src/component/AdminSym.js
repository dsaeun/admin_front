import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import AdminEditSearch from "./searchComponent/AdminEditSearch";
import AdminNewSym from "./searchComponent/AdminNewSym";
import axios from "axios";
import DiseaseContext from "../container/Disease/disease";

let AdminSym = () => {
  const { state, actions } = useContext(DiseaseContext);
  const { symptoms } = state;
  const { setSymptoms } = actions;
  const [symptomsData, setSymptomsData] = useState([]);

  // 증상 목록을 불러온다
  useEffect(() => {
    axios
      .get("/symptoms")
      .then((response) => {
        setSymptomsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // 추가할 증상을 선택한다
  const onClick = (symptom) => {
    const { id, name, part } = symptom;

    for (let symptomIndex of symptoms) {
      if (symptomIndex.id === symptom.id) {
        return;
      }
    }

    const newSymptoms = symptoms.concat({
      id,
      name,
      part_name: part.name,
    });
    setSymptoms(newSymptoms);
  };
  // 선택한 증상을 선택 취소한다
  const onRemove = (symptomRequest) => {
      const newSymptoms = symptoms.filter((symptom) => symptom.id !== symptomRequest.id);
      setSymptoms(newSymptoms);
  };

  // 증상 목록
  const symptomList = symptomsData.map((symptom, index) => (
    <li key={index} onClick={() => onClick(symptom)}>
      {symptom.part.name} - {symptom.name}
    </li>
  ));
  // 선택한 증상 목록
  const symptomListSelected = symptoms.map((symptom, index) => (
    <div className="checkedBox" key={index}>
      {symptom.part_name} - {symptom.name}
      <button type="button" className="removeBtn" onClick={() => onRemove(symptom)}>
        X
      </button>
    </div>
  ));

  return (
    <div className="editDisTable">
      {symptomListSelected}
      <AdminEditSearch></AdminEditSearch>

      <div className="editDisList">
        <ul>{symptomList}</ul>
      </div>
      <AdminNewSym></AdminNewSym>
    </div>
  );
};

export default AdminSym;
