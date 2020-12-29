import React from "react";

const ProfileDescriptionDisplayMode = (props) => {
  return (
    <div className="component">
        <div className="component-header-display-mode component-header-display-mode-left">Profile</div>
        <div className="component-props">
          {props.inputFields.map((inputField, index) => (
                <div key={index}>
                  <div className="props-value">{inputField.inputProfileDescription}</div>
                </div>
            ))}
        </div>
        {/* <button type="submit" onClick={props.onClickHandleEdit}>edit</button> */}
    </div>
  );
};

export default ProfileDescriptionDisplayMode;