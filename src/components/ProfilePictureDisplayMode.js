import React from "react";

const ProfilePictureDisplayMode = (props) => {
  return (
    <div className="component">
      <div className="component-props">
        {props.inputFields.map((inputField, index) => (
          <div key={index} className="img-profile-picture-container-wrapper">
            <div className="props-value img-profile-picture-container">
              <div className="img-profile-picture" style={{backgroundImage: `url(${inputField.inputProfilePicture})`}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePictureDisplayMode;
