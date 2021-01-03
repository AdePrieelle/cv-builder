import React from "react";
import DeleteButton from "./DeleteButton"
import AddButton from "./AddButton"

const ExpertiseEditMode = (props) => {
  return (
    <div className="component">
      <form onSubmit={e => props.onSubmitFormHandleSubmit(e)}>
        <div className="component-header-edit-mode">Expertise</div>
        {props.inputFields.map((inputField, index) => (
          <div key={index} className="component-input-wrapper-expertise">
            <input type="text" name="inputExpertise" id={"expertise"+index} value={inputField.inputExpertise} onChange={e => props.onChangeInput(index, e)}></input>
            {props.isInCvEditMode 
              && <DeleteButton onClickHandleRemoveFields={e => props.onClickHandleRemoveFields(index, e)} />
            }
          </div>
        ))}
        {props.isInCvEditMode
        && <AddButton onClickHandleAddFields={props.onClickHandleAddFields} />
        }
      </form>
    </div>
  );
};

export default ExpertiseEditMode;
