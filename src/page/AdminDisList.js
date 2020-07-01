import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

let AdminDisList = () => {
  const [diseasesData, setDiseasesData] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios
      .get("/diseases")
      .then((response) => {
        setDiseasesData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onKeyword = () => {
    axios
      .get(`/diseases/?keyword=${keyword}`)
      .then((response) => {
        setDiseasesData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const diseaseList = diseasesData.map((disease, index) => (
    <li key={index}>
      <Link to={`/AdminDetail/${disease.id}`}>{disease.name}</Link>
    </li>
  ));
  return (
    <div className="contentalign">
      <h1>질병 정보 수정</h1>
      <div className="searchAlign">
        <input
          type="text"
          className="searchBox"
          value={keyword}
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
        />
        <button className="searchBtn" onClick={() => onKeyword()}>
          search
        </button>
      </div>
      <div className="containList">
        <ul>{diseaseList}</ul>
      </div>
      <button className="newDisBtn">
        <Link to="./AdminDisAddForm">새 질병 추가</Link>
      </button>
    </div>
  );
};
export default AdminDisList;
