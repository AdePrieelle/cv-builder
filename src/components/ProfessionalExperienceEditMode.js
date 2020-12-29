import React from "react";
import DeleteButton from "./DeleteButton"
import AddButton from "./AddButton"

const ProfessionalExperienceEditMode = (props) => {
  return (
    <div className="component">
        {/* <form onSubmit={props.onSubmitFormHandleSubmit}> */}
        {/* <form onSubmit={props.onSubmitFormHandleSubmit.bind(this)}> */}
        <form onSubmit={e => props.onSubmitFormHandleSubmit(e)}>

          <div className="component-header-edit-mode component-header-edit-mode-left">Professional Experience</div>
          {props.inputFields.map((inputField, index) => (
              <div key={index}>
                <label htmlFor={"job-title"+index}>Job Title</label>
                {/* <input type="text" name="inputName" id={"name"+index} value={inputField.inputName} onChange={props.onChangeInput.bind(this, index)}></input> */}
                <input type="text" name="inputJobTitle" id={"job-title"+index} value={inputField.inputJobTitle} onChange={e => props.onChangeInput(index, e)}></input>
                <label htmlFor={"company"+index}>Company</label>
                <input type="text" name="inputCompany" id={"company"+index} value={inputField.inputCompany} onChange={e => props.onChangeInput(index, e)}></input>
                <label htmlFor={"job-location"+index}>Location</label>
                <input type="text" name="inputJobLocation" id={"job-location"+index} value={inputField.inputJobLocation} onChange={e => props.onChangeInput(index, e)}></input>
                <label htmlFor={"job-date"+index}>Job Date</label>
                <input type="text" name="inputJobDate" id={"job-date"+index} value={inputField.inputJobDate} onChange={e => props.onChangeInput(index, e)}></input>
                <label htmlFor={"job-description"+index}>Job Description</label>
                <textarea name="inputJobDescription" id={"job-description"+index} value={inputField.inputJobDescription} onChange={e => props.onChangeInput(index, e)}></textarea>
                {/* <button onClick={props.onClickHandleRemoveFields.bind(this, index)}>delete</button> */}
                {/* <button onClick={e => props.onClickHandleRemoveFields(index, e)}>delete</button> */}
                {props.isInCvEditMode 
                //  && <button onClick={e => props.onClickHandleRemoveFields(index, e)}>delete</button>
                && <DeleteButton onClickHandleRemoveFields={e => props.onClickHandleRemoveFields(index, e)} />
                }
              </div>
          ))}
          {/* <button onClick={props.onClickHandleAddFields}>add</button> */}
          {props.isInCvEditMode
          //  && <button onClick={props.onClickHandleAddFields}>add</button>
          && <AddButton onClickHandleAddFields={props.onClickHandleAddFields} />
          }


          {/* <button type="submit" onClick={props.onClickHandleSubmit}>submit</button> */}
          {/* <button type="submit" onClick={props.onClickHandleSubmit.bind(this)}>submit</button> */}

          {/* <button type="submit" onClick={e => props.onClickHandleSubmit(e)}>submit</button> */}
        </form>
    </div>
  );
};

export default ProfessionalExperienceEditMode;