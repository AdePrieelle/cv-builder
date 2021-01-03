import React from "react";

const EducationalExperienceEditMode = (props) => {
  return (
    <div className="component">
      <form onSubmit={e => props.onSubmitFormHandleSubmit(e)}>
        <div className="component-header-edit-mode">Contact</div>
        {props.inputFields.map((inputField, index) => (
          <div key={index}>
            <label htmlFor={"phone"+index}>Phone number</label>
            <input type="text" name="inputPhone" id={"phone"+index} value={inputField.inputPhone} onChange={e => props.onChangeInput(index, e)}></input>
            <label htmlFor={"mail"+index}>Mail</label>
            <input type="text" name="inputMail" id={"mail"+index} value={inputField.inputMail} onChange={e => props.onChangeInput(index, e)}></input>
            <label htmlFor={"location"+index}>Location</label>
            <input type="text" name="inputLocation" id={"location"+index} value={inputField.inputLocation} onChange={e => props.onChangeInput(index, e)}></input>
            <label htmlFor={"linkedin"+index}>LinkedIn</label>
            <input type="text" name="inputLinkedIn" id={"linkedin"+index} value={inputField.inputLinkedIn} onChange={e => props.onChangeInput(index, e)}></input>
          </div>
        ))}
      </form>
    </div>
  );
};

export default EducationalExperienceEditMode;
