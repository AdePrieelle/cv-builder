import React from "react";

const EducationEditMode = (props) => {
  return (
    <div className="component">
        <form onSubmit={e => props.onSubmitFormHandleSubmit(e)}>
          <div className="component-header-edit-mode">Education</div>
          {props.inputFields.map((inputField, index) => (
              <div key={index}>
                <label htmlFor={"school"+index}>School</label>
                {/* <input type="text" name="inputName" id={"name"+index} value={inputField.inputName} onChange={props.onChangeInput.bind(this, index)}></input> */}
                <input type="text" name="inputSchool" id={"school"+index} value={inputField.inputSchool} onChange={e => props.onChangeInput(index, e)}></input>
                <label htmlFor={"study"+index}>Study</label>
                <input type="text" name="inputStudy" id={"study"+index} value={inputField.inputStudy} onChange={e => props.onChangeInput(index, e)}></input>
                <label htmlFor={"date-study"+index}>Date of study</label>
                <input type="text" name="inputDateStudy" id={"date-study"+index} value={inputField.inputDateStudy} onChange={e => props.onChangeInput(index, e)}></input>
                {/* <button onClick={props.onClickHandleRemoveFields.bind(this, index)}>delete</button> */}
                <button onClick={e => props.onClickHandleRemoveFields(index, e)}>delete</button>
              </div>
          ))}
          <button onClick={props.onClickHandleAddFields}>add</button>

          {/* <button type="submit" onClick={props.onClickHandleSubmit}>submit</button> */}
          {/* <button type="submit" onClick={props.onClickHandleSubmit.bind(this)}>submit</button> */}

          {/* <button type="submit" onClick={e => props.onClickHandleSubmit(e)}>submit</button> */}
        </form>
    </div>
  );
};

export default EducationEditMode;