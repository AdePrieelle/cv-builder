import React from "react";

const ProfilePictureEditMode = (props) => {
  return (
    <div className="component">
        {/* <form onSubmit={props.onSubmitFormHandleSubmit}> */}
        {/* <form onSubmit={props.onSubmitFormHandleSubmit.bind(this)}> */}
        <form onSubmit={e => props.onSubmitFormHandleSubmit(e)}>

          <div className="component-header-edit-mode">Picture</div>
          {props.inputFields.map((inputField, index) => (
              <div key={index}>
                {/* <label htmlFor={"profile-picture"+index}>Add Profile Picture</label> */}

                <input type="file" id={"profile-picture"+index} name="inputProfilePicture" onChange={e => props.onChangeInput(index, e)} />
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

export default ProfilePictureEditMode;