import React, { useState } from "react";
import "../../App.css";
import axios from "axios";

let AdminNewHos = ({ subjectsData, setSubjectsData }) => {
  const [subject, setSubject] = useState({
    name: "",
  });

  // 증상 데이터 보내기
  const onSubmit = () => {
    axios
      .post("/subjects", subject)
      .then((response) => {
        const newSubjectsData = subjectsData.concat(response.data);
        setSubjectsData(newSubjectsData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      새 진료과목 추가 :
      <input
        type="text"
        placeholder="진료과목"
        className="newInput"
        onChange={(event) => {
          const newSubject = {
            ...subject,
            name: event.target.value,
          };
          setSubject(newSubject);
        }}
      />
      <button className="addBtn" type="button" onClick={() => onSubmit()}>추가</button>
    </div>
  );
};
export default AdminNewHos;
