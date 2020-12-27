import React from "react";
import DeleteButton from "./DeleteButton"
import AddButton from "./AddButton"

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
                  // && <button onClick={e => props.onClickHandleRemoveFields(index, e)}>delete</button>
                  && <DeleteButton onClickHandleRemoveFields={e => props.onClickHandleRemoveFields(index, e)} />
                }
              </div>
          ))}
          {/* <button onClick={props.onClickHandleAddFields}>add</button> */}
          {props.isInCvEditMode
          //  && <button onClick={props.onClickHandleAddFields}>add</button>
          && <AddButton onClickHandleAddFields={props.onClickHandleAddFields} />
          }

          {/* <button type="submit" onClick={props.onClickHandleSubmit}>submit</button> */}
          {/* <button type="submit" onClick={props.onClickHandleSubmit.bind(this)}>submit</button> */}

          {/* <button type="submit" onClick={e => props.onClickHandleSubmit(e)}>submit</button> */}
        </form>
    </div>
  );
};

export default ExpertiseEditMode;