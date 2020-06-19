import React from "react";
import { DiseaseProvider } from "./disease";
import AdminDisAddForm from "../../page/AdminDisAddForm";

const DiseaseAddContainer = () => {
    return (
        <DiseaseProvider>
            <AdminDisAddForm/>
        </DiseaseProvider>
    );
};

export default DiseaseAddContainer