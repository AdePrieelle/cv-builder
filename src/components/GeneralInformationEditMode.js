import React from "react";

const GeneralInformationEditMode = (props) => {
  return (
    <div className="component">
        {/* <div className="component-header">General information</div>
        <div className="component-props">
          <div className="label-input">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={props.handleChangeInputName} value={props.inputName}></input>
          </div>
          <div className="label-input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={props.handleChangeInputEmail} value={props.inputEmail}></input>
          </div>
          <div className="label-input">
            <label htmlFor="phone-number">Phone</label>
            <input type="tel" id="phone-number" onChange={props.handleChangeInputPhone} value={props.inputPhone}></input>
          </div>
        </div> */}

        {/* <form onSubmit={props.onSubmitFormHandleSubmit}>
          {props.inputFields.map((inputField, index) => (
            <div key={index}>
              <label htmlFor={"name"+index}>Name</label>

              <input type="text" name="inputName" id={"name"+index} value={inputField.inputName} onChange={this.handleChangeInputName.bind(this, index)}></input>
              <input type="text" name="inputName" id={"name"+index} value={inputField.inputName} onChange={e => props.onChangeInput(index, e)}></input>

              <label htmlFor={"email"+index}>Email</label>
              <input type="text" name="inputEmail" id={"email"+index} value={inputField.inputEmail} onChange={e => props.onChangeInput(index, e)}></input>
              <label htmlFor={"phone"+index}>Phone</label>
              <input type="text" name="inputPhone" id={"phone"+index} value={inputField.inputPhone} onChange={e => props.onChangeInput(index, e)}></input>
              <button onClick={this.handleRemoveFields.bind(this, index)}>delete</button>
            </div>
          ))}
          <button onClick={this.handleAddFields}>add</button>
          <button type="submit" onClick={this.handleSubmit.bind(this)}>submit</button>
        </form> */}

        {/* <form onSubmit={props.onSubmitFormHandleSubmit}> */}
        {/* <form onSubmit={props.onSubmitFormHandleSubmit.bind(this)}> */}
        <form onSubmit={e => props.onSubmitFormHandleSubmit(e)}>

          <div className="component-header-edit-mode">General Information</div>
          {props.inputFields.map((inputField, index) => (
              <div key={index}>
                <label htmlFor={"name"+index}>Name</label>
                {/* <input type="text" name="inputName" id={"name"+index} value={inputField.inputName} onChange={props.onChangeInput.bind(this, index)}></input> */}
                <input type="text" name="inputName" id={"name"+index} value={inputField.inputName} onChange={e => props.onChangeInput(index, e)}></input>
                <label htmlFor={"email"+index}>Email</label>
                <input type="text" name="inputEmail" id={"email"+index} value={inputField.inputEmail} onChange={e => props.onChangeInput(index, e)}></input>
                <label htmlFor={"phone"+index}>Phone</label>
                <input type="text" name="inputPhone" id={"phone"+index} value={inputField.inputPhone} onChange={e => props.onChangeInput(index, e)}></input>
                <label htmlFor={"linkedIn"+index}>LinkedIn</label>
                <input type="text" name="inputLinkedIn" id={"linkedIn"+index} value={inputField.inputLinkedIn} onChange={e => props.onChangeInput(index, e)}></input>
                {/* <button onClick={props.onClickHandleRemoveFields.bind(this, index)}>delete</button> */}
                {/* <button onClick={e => props.onClickHandleRemoveFields(index, e)}>delete</button> */}
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

export default GeneralInformationEditMode;