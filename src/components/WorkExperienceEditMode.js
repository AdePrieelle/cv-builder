import React from "react";

const WorkExperienceEditMode = (props) => {
  return (
    <div className="component">
        {/* <form onSubmit={props.onSubmitFormHandleSubmit}> */}
        {/* <form onSubmit={props.onSubmitFormHandleSubmit.bind(this)}> */}
        <form onSubmit={e => props.onSubmitFormHandleSubmit(e)}>

          <div className="component-header-edit-mode">Work Experience</div>
          {props.inputFields.map((inputField, index) => (
              <div key={index}>
                <label htmlFor={"company-name"+index}>Company</label>
                {/* <input type="text" name="inputName" id={"name"+index} value={inputField.inputName} onChange={props.onChangeInput.bind(this, index)}></input> */}
                <input type="text" name="inputCompanyName" id={"company-name"+index} value={inputField.inputCompanyName} onChange={e => props.onChangeInput(index, e)}></input>
                <label htmlFor={"job-title"+index}>Job title</label>
                <input type="text" name="inputJobTitle" id={"job-title"+index} value={inputField.inputJobTitle} onChange={e => props.onChangeInput(index, e)}></input>
                <label htmlFor={"job-tasks"+index}>Job tasks</label>
                {/* <input type="text" name="inputJobTasks" id={"job-tasks"+index} value={inputField.inputJobTasks} onChange={e => props.onChangeInput(index, e)}></input> */}
                <textarea name="inputJobTasks" id={"job-tasks"+index} value={inputField.inputJobTasks} onChange={e => props.onChangeInput(index, e)}></textarea>
                <label htmlFor={"job-date"+index}>Job date</label>
                <input type="text" name="inputJobDate" id={"job-date"+index} value={inputField.inputJobDate} onChange={e => props.onChangeInput(index, e)}></input>
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

export default WorkExperienceEditMode;