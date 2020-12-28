import React from "react";

const ProfilePictureDisplayMode = (props) => {
  return (
    <div className="component">
        <div className="component-props">
          {props.inputFields.map((inputField, index) => (
                <div key={index} className="img-profile-picture-container-wrapper">
                  <div className="props-value img-profile-picture-container">
                    <img className="img-profile-picture" src={inputField.inputProfilePicture} alt="profilepic"></img>
                  </div>
                </div>
            ))}
        </div>
        {/* <button type="submit" onClick={props.onClickHandleEdit}>edit</button> */}
    </div>
  );
};

export default ProfilePictureDisplayMode;