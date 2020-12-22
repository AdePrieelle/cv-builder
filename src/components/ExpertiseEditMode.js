import React from "react";

const ExpertiseEditMode = (props) => {
  return (
    <div className="component">
        {/* <form onSubmit={props.onSubmitFormHandleSubmit}> */}
        {/* <form onSubmit={props.onSubmitFormHandleSubmit.bind(this)}> */}
        <form onSubmit={e => props.onSubmitFormHandleSubmit(e)}>

          <div className="component-header-edit-mode">Expertise</div>
          {props.inputFields.map((inputField, index) => (
              <div key={index}>
                {/* <label htmlFor={"school"+index}>School</label> */}
                {/* <input type="text" name="inputName" id={"name"+index} value={inputField.inputName} onChange={props.onChangeInput.bind(this, index)}></input> */}
                <input type="text" name="inputExpertise" id={"expertise"+index} value={inputField.inputExpertise} onChange={e => props.onChangeInput(index, e)}></input>
                {/* <button onClick={props.onClickHandleRemoveFields.bind(this, index)}>delete</button> */}
                {/* <button onClick={e => props.onClickHandleRemoveFields(index, e)}>delete</button> */}
                {props.isInCvEditMode 
                  && <button onClick={e => props.onClickHandleRemoveFields(index, e)}>delete</button>
                }
              </div>
          ))}
          {/* <button onClick={props.onClickHandleAddFields}>add</button> */}
          {props.isInCvEditMode
           && <button onClick={props.onClickHandleAddFields}>add</button>
          }

          {/* <button type="submit" onClick={props.onClickHandleSubmit}>submit</button> */}
          {/* <button type="submit" onClick={props.onClickHandleSubmit.bind(this)}>submit</button> */}

          {/* <button type="submit" onClick={e => props.onClickHandleSubmit(e)}>submit</button> */}
        </form>
    </div>
  );
};

export default ExpertiseEditMode;