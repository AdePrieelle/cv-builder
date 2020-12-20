import React from "react";

const EducationalExperienceEditMode = (props) => {
  return (
    <div className="component">
        {/* <form onSubmit={props.onSubmitFormHandleSubmit}> */}
        {/* <form onSubmit={props.onSubmitFormHandleSubmit.bind(this)}> */}
        <form onSubmit={e => props.onSubmitFormHandleSubmit(e)}>

          <div className="component-header-edit-mode">Contact</div>
          {props.inputFields.map((inputField, index) => (
              <div key={index}>
                <label htmlFor={"phone"+index}>Phone number</label>
                {/* <input type="text" name="inputName" id={"name"+index} value={inputField.inputName} onChange={props.onChangeInput.bind(this, index)}></input> */}
                <input type="text" name="inputPhone" id={"phone"+index} value={inputField.inputPhone} onChange={e => props.onChangeInput(index, e)}></input>
                <label htmlFor={"mail"+index}>Mail</label>
                <input type="text" name="inputMail" id={"mail"+index} value={inputField.inputMail} onChange={e => props.onChangeInput(index, e)}></input>
                <label htmlFor={"location"+index}>Location</label>
                <input type="text" name="inputLocation" id={"location"+index} value={inputField.inputLocation} onChange={e => props.onChangeInput(index, e)}></input>
                <label htmlFor={"linkedin"+index}>LinkedIn</label>
                <input type="text" name="inputLinkedIn" id={"linkedin"+index} value={inputField.inputLinkedIn} onChange={e => props.onChangeInput(index, e)}></input>
                {/* <button onClick={props.onClickHandleRemoveFields.bind(this, index)}>delete</button> */}
                {/* <button onClick={e => props.onClickHandleRemoveFields(index, e)}>delete</button> */}
              </div>
          ))}
          {/* <button onClick={props.onClickHandleAddFields}>add</button> */}

          {/* <button type="submit" onClick={props.onClickHandleSubmit}>submit</button> */}
          {/* <button type="submit" onClick={props.onClickHandleSubmit.bind(this)}>submit</button> */}

          {/* <button type="submit" onClick={e => props.onClickHandleSubmit(e)}>submit</button> */}
        </form>
    </div>
  );
};

export default EducationalExperienceEditMode;