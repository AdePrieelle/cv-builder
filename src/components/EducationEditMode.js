import React from "react";
import DeleteButton from "./DeleteButton";
import AddButton from "./AddButton";

const EducationEditMode = (props) => {
  return (
    <div className="component">
      <form onSubmit={e => props.onSubmitFormHandleSubmit(e)}>
        <div className="component-header-edit-mode">Education</div>
        {props.inputFields.map((inputField, index) => (
          <div key={index} className="component-input-wrapper component-input-wrapper-education">
            <label htmlFor={"study"+index}>Study</label>
            <input type="text" name="inputStudy" id={"study"+index} value={inputField.inputStudy} onChange={e => props.onChangeInput(index, e)}></input>
            <label htmlFor={"school"+index}>School</label>
            <input type="text" name="inputSchool" id={"school"+index} value={inputField.inputSchool} onChange={e => props.onChangeInput(index, e)}></input>
            <label htmlFor={"date-study"+index}>Date of study</label>
            <input type="text" name="inputDateStudy" id={"date-study"+index} value={inputField.inputDateStudy} onChange={e => props.onChangeInput(index, e)}></input>
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

export default EducationEditMode;
