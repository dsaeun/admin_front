import React, { useContext } from "react";
import "../App.css";
import DiseaseContext from "../container/Disease/disease";

/**
 * 질병 입력 폼 추가
 * input: code
 * textarea: description
 * upload: image
 * @returns {*}
 * @constructor
 */

let AdminAddText = () => {
  const { state, actions } = useContext(DiseaseContext);
  const { disease } = state;
  const { name, code, cure, description, image } = disease;
  const { setDisease } = actions;

  return (
    <div>
      <table>
        <tr>
          <td>
            질병명 :
            <input
              type="text"
              className="disInput"
              value={name}
              onChange={({ target: { value } }) => {
                const newDiseases = {
                    ...disease,
                    name: value,
                };
                setDisease(newDiseases);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>치료법 :</td>
        </tr>
        <tr>
          <td className="cureTD">
            <textarea
                className="cureInput"
                value={cure}
                onChange={({ target: { value } }) => {
                  const newDisease = {
                      ...disease,
                      cure: value,
                  }
                  setDisease(newDisease);
                }}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AdminAddText;
