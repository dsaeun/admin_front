import React, { useContext, useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";

let AdminNewSearch = ({ symptomsData, setSymptomsData }) => {
  const [symptom, setSymptom] = useState({
    content: {},
    parts: [],
    partId: 1,
  });
  const [parts, setParts] = useState([]);

  // 파트 목록 불러오기
  useEffect(() => {
    axios
      .get("/parts")
      .then((response) => {
        setParts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // 보낼 증상 데이터에 파트 id 추가
  const onChangePart = (event) => {
      // console.log(event.target.value);
      // console.log(event.target.value);
    const newSymptom = {
      ...symptom,
      partId: event.target.value,
    };
    setSymptom(newSymptom);
  };

  // 증상 데이터 보내기
  const onSubmit = () => {
    axios
      .post("/symptoms", symptom)
      .then((response) => {
        const newSymptomsData = symptomsData.concat(response.data);
        setSymptomsData(newSymptomsData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      새 파트-증상 추가 :{/* 드롭다운으로 파트 id 리스트 출력*/}
      {/*<input type="text" placeholder="파트" className="newInput" />*/}
      <select
        name="partAdd"
        className="drop"
        onChange={(event) => onChangePart(event)}
      >
        {parts.map((part) => (
          <option key={part.id} value={part.id}>{part.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="증상"
        className="newInput"
        onChange={(event) => {
          const newSymptom = {
            ...symptom,
            content: {
              name: event.target.value,
            },
          };
          setSymptom(newSymptom);
        }}
      />
      <button type="button" className="addBtn" onClick={() => onSubmit()}>
        추가
      </button>
    </div>
  );
};
export default AdminNewSearch;
