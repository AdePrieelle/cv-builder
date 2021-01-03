import React from "react";

const ProfileDescriptionEditMode = (props) => {
  return (
    <div className="component">
      <form onSubmit={e => props.onSubmitFormHandleSubmit(e)}>
        {props.inputFields.map((inputField, index) => (
          <div key={index}>
            <label  className="component-header-edit-mode component-header-edit-mode-left" htmlFor={"profile-description"+index}>Profile</label>
            <textarea name="inputProfileDescription" id={"profile-description"+index} value={inputField.inputProfileDescription} onChange={e => props.onChangeInput(index, e)}></textarea>
          </div>
        ))}
      </form>
    </div>
  );
};

export default ProfileDescriptionEditMode;
