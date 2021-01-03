import React from "react";

const NameTitleEditMode = (props) => {
  return (
    <div className="component">
      <form onSubmit={e => props.onSubmitFormHandleSubmit(e)}>
        {props.inputFields.map((inputField, index) => (
          <div key={index}>
            <label htmlFor={"name"+index}>Name</label>
            <input type="text" name="inputName" id={"name"+index} value={inputField.inputName} onChange={e => props.onChangeInput(index, e)}></input>
            <label htmlFor={"title"+index}>Job Title</label>
            <input type="text" name="inputTitle" id={"title"+index} value={inputField.inputTitle} onChange={e => props.onChangeInput(index, e)}></input>
          </div>
        ))}
      </form>
    </div>
  );
};

export default NameTitleEditMode;
