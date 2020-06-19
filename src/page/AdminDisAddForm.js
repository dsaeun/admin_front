import React, { useContext } from "react";
import '../App.css';
import { withRouter } from 'react-router-dom';
import AdminAddText from '../component/AdminAddText';
import AdminDisAdd from '../component/AdminDisAdd';
import DiseaseContext from "../container/Disease/disease";
import axios from "axios";

let AdminDisAddForm = ({ history }) => {
    const { state } = useContext(DiseaseContext);
    const { symptoms, subjects } = state;
    const { name, cure } = state.disease;
    const symptom_ids = symptoms.map((symptom) => symptom.id);
    // const subject_ids = subjects.map((subject) => subject.id);

    const onSubmit = (event) => {
        event.preventDefault();
        const requestBody = {
            content: {
                name,
                code: "D05",
                cure,
                description: "hi",
                images: "http://image.com",
            },
            symptom_ids,
        };
        axios
            .post('/diseases', requestBody)
            .then((response) => {
                console.log(response.data);
                alert('질병이 등록되었습니다.');
                history.push('/AdminDisList');
            })
            .catch((error) => {
                console.error(error.response.data);
                alert('질병 등록이 실패했습니다.');
            });
    };

  return (
      <div className="contentalign">
          <form onSubmit={(event) => onSubmit(event)}>
              <h1>질병 추가</h1>
              <div className="disFormAlign">
                  <AdminAddText></AdminAddText>
                  <AdminDisAdd></AdminDisAdd>
                  <button className="saveBtn" type="submit">
                      저장
                  </button>
              </div>
          </form>
      </div>
  )
};

export default withRouter(AdminDisAddForm);