import React from "react";

const ProfilePictureEditMode = (props) => {
  return (
    <div className="component">
      <form onSubmit={e => props.onSubmitFormHandleSubmit(e)}>
        <div className="component-header-edit-mode">Picture</div>
        {props.inputFields.map((inputField, index) => (
          <div key={index}>
            <input type="file" id={"profile-picture"+index} name="inputProfilePicture" onChange={e => props.onChangeInput(index, e)} />
          </div>
        ))}
      </form>
    </div>
  );
};

export default ProfilePictureEditMode;
