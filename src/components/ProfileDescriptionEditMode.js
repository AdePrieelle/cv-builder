import React from "react";

const ProfileDescriptionEditMode = (props) => {
  return (
    <div className="component">
        {/* <form onSubmit={props.onSubmitFormHandleSubmit}> */}
        {/* <form onSubmit={props.onSubmitFormHandleSubmit.bind(this)}> */}
        <form onSubmit={e => props.onSubmitFormHandleSubmit(e)}>
          {props.inputFields.map((inputField, index) => (
              <div key={index}>
                <label htmlFor={"profile-description"+index}>Profile</label>
                {/* <input type="text" name="inputName" id={"name"+index} value={inputField.inputName} onChange={props.onChangeInput.bind(this, index)}></input> */}
                {/* <input type="text" name="inputProfileDescription" id={"profile-description"+index} value={inputField.inputProfileDescription} onChange={e => props.onChangeInput(index, e)}></input> */}
                <textarea name="inputProfileDescription" id={"profile-description"+index} value={inputField.inputProfileDescription} onChange={e => props.onChangeInput(index, e)}></textarea>
              </div>
          ))}
        </form>
    </div>
  );
};

export default ProfileDescriptionEditMode;