import React, {useCallback, useEffect} from "react";
import '../App.css';
import { withRouter } from 'react-router-dom';
import AdminAddText from '../component/AdminAddText';
import AdminDisAdd from '../component/AdminDisAdd';
import {DiseaseConsumer, DiseaseProvider} from "../container/Disease/disease";
import axios from "axios";

let AdminDisAddForm = ({ history }) => {
    useEffect(() => {});

    const onSubmit = useCallback((state) => {
        const { name, cure, symptom_ids, subject_ids } = state;
        const requestBody = {
            content: {
                name,
                code: "D04",
                cure,
                description: "hi",
                images: "http://image.com",
            },
        };
        axios
            .post('/diseases', requestBody)
            .then((response) => {
                console.log(response.data);
                history.push('/AdminDisList');
                alert('질병이 등록되었습니다.');
            })
            .catch((error) => {
                console.error(error.response.data);
                alert('질병 등록이 실패했습니다.');
            });
    }, []);

    return (
        <DiseaseProvider>
            <DiseaseConsumer>
                {({ state }) => (
                    <div className="contentalign">
                        <form onSubmit={() => onSubmit(state)}>
                            <h1>질병 수정 및 추가</h1>
                            <div className="disFormAlign">
                                <AdminAddText></AdminAddText>
                                <AdminDisAdd></AdminDisAdd>
                                <button className="saveBtn" type="submit">
                                    저장
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </DiseaseConsumer>
        </DiseaseProvider>
    )
}

export default withRouter(AdminDisAddForm);