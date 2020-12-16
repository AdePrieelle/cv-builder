import React from "react";
import GeneralInformationEditMode from "./GeneralInformationEditMode";
import GeneralInformationDisplayMode from "./GeneralInformationDisplayMode";
import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";

class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
    // this.handleEditModeClick = this.handleEditModeClick.bind(this);
    // this.handleDisplayModeClick = this.handleDisplayModeClick.bind(this);
    // this.handleChangeInputName = this.handleChangeInputName.bind(this);

    // new
    this.handleEditModeClick = this.handleEditModeClick.bind(this);
    this.handleDisplayModeClick = this.handleDisplayModeClick.bind(this);

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddFields = this.handleAddFields.bind(this);
    this.handleRemoveFields = this.handleRemoveFields.bind(this);

    // this.handleChangeInputEmail = this.handleChangeInputEmail.bind(this);
    // this.handleChangeInputPhone = this.handleChangeInputPhone.bind(this);
    this.state = {
      isInEditMode: true,
      inputFields: [
        {
          inputName: "",
          inputEmail: "",
          inputPhone: "",
          inputLinkedIn: "",
        },
      ],
    };
  }

  // handleEditModeClick() {
  //   this.setState({isInEditMode: false});
  // }

  // handleDisplayModeClick() {
  //   this.setState({isInEditMode: true});
  // }

  // handleChangeInputName = (e) => {
  //   this.setState({
  //     inputName: e.target.value,
  //   });
  // };

  
  // handleChangeInputEmail = (e) => {
  //   this.setState({
  //     inputEmail: e.target.value,
  //   });
  // };
      
  // handleChangeInputPhone = (e) => {
  //   this.setState({
  //     inputPhone: e.target.value,
  //   });
  // };
          
          
  // new
  handleEditModeClick() {
    this.setState({isInEditMode: false});
  }

  handleDisplayModeClick() {
    this.setState({isInEditMode: true});
  }

  handleChangeInput = (index, e) => {
    // console.log(index, event.target.name);
    const values = [...this.state.inputFields];
    values[index][e.target.name] = e.target.value;
    this.setState({
      values
    });
    // console.log(index, e.target.name);
    // console.log(this.state.inputFields);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputFields", this.state.inputFields);
    // console.log("hi");
  };

  handleAddFields = () => {
    this.setState({
      inputFields: this.state.inputFields.concat({inputName: "", inputEmail: "", inputPhone: "", inputLinkedIn: ""})
    });
  };

  handleRemoveFields = (index) => {
    const values = [...this.state.inputFields];
    values.splice(index, 1);
    this.setState({
      inputFields: values
    });
  };
          
  render() {
    // const isInEditMode = this.state.isInEditMode;
    // let renderingMode;
    // let button;
    // if (isInEditMode) {
    //   renderingMode = <GeneralInformationEditModeRendering 
    //     handleChangeInputName={this.handleChangeInputName} 
    //     handleChangeInputEmail={this.handleChangeInputEmail} 
    //     handleChangeInputPhone={this.handleChangeInputPhone} 
    //     inputName={this.state.inputName} 
    //     inputEmail={this.state.inputEmail}
    //     inputPhone={this.state.inputPhone}
    //   />
    //   button = <SubmitButton onClick={this.handleEditModeClick} />
    // } else {
    //   renderingMode = <GeneralInformationDisplayModeRendering 
    //     inputName={this.state.inputName}
    //     inputEmail={this.state.inputEmail}
    //     inputPhone={this.state.inputPhone}
    //   />
    //   button = <EditButton onClick={this.handleDisplayModeClick} />
    // }
    const isInEditMode = this.state.isInEditMode;
    let renderingMode;
    let button;
    if (isInEditMode) {
      renderingMode = <GeneralInformationEditMode 
      // onSubmitFormHandleSubmit={this.handleSubmit.bind(this)}
      onSubmitFormHandleSubmit={this.handleSubmit}

      inputFields={this.state.inputFields}
      onChangeInput={this.handleChangeInput}
      // onClickHandleRemoveFields={this.handleRemoveFields}
      // onClickHandleAddFields={this.handleAddFields}

      // onClickHandleSubmit={this.handleSubmit.bind(this)}
      // onClickHandleSubmit={this.handleSubmit}

    />
      button = <SubmitButton onClick={this.handleEditModeClick} />
    } else {
      renderingMode = <GeneralInformationDisplayMode 
        inputFields={this.state.inputFields}
        // onClickHandleEdit={this.handleDisplayModeClick}
      />
      button = <EditButton onClick={this.handleDisplayModeClick} />
    }


    return (
      // <div className="component-item">
      //   {renderingMode}
      //   {button}
      // </div>
      <div>
        {/* <form onSubmit={this.handleSubmit.bind(this)}>
          {this.state.inputFields.map((inputField, index) => (
            <div key={index}>
              <label htmlFor={"name"+index}>Name</label>

              <input type="text" name="inputName" id={"name"+index} value={inputField.inputName} onChange={this.handleChangeInput.bind(this, index)}></input>
              <input type="text" name="inputName" id={"name"+index} value={inputField.inputName} onChange={e => this.handleChangeInput(index, e)}></input>

              <label htmlFor={"email"+index}>Email</label>
              <input type="text" name="inputEmail" id={"email"+index} value={inputField.inputEmail} onChange={e => this.handleChangeInput(index, e)}></input>
              <label htmlFor={"phone"+index}>Phone</label>
              <input type="text" name="inputPhone" id={"phone"+index} value={inputField.inputPhone} onChange={e => this.handleChangeInput(index, e)}></input>
              <button onClick={this.handleRemoveFields.bind(this, index)}>delete</button>
            </div>
          ))}
          <button onClick={this.handleAddFields}>add</button>
          <button type="submit" onClick={this.handleSubmit.bind(this)}>submit</button>
        </form> */}

        {/* <GeneralInformationEditMode 
          onSubmitFormHandleSubmit={this.handleSubmit.bind(this)}
          inputFields={this.state.inputFields}
          onChangeInput={this.handleChangeInput}
          onClickHandleRemoveFields={this.handleRemoveFields}
          onClickHandleAddFields={this.handleAddFields}
          onClickHandleSubmit={this.handleSubmit.bind(this)}
        /> */}

        {/* <GeneralInformationEditMode 
          // onSubmitFormHandleSubmit={this.handleSubmit.bind(this)}
          onSubmitFormHandleSubmit={this.handleSubmit}

          inputFields={this.state.inputFields}
          onChangeInput={this.handleChangeInput}
          onClickHandleRemoveFields={this.handleRemoveFields}
          onClickHandleAddFields={this.handleAddFields}

          // onClickHandleSubmit={this.handleSubmit.bind(this)}
          onClickHandleSubmit={this.handleSubmit}

        /> */}
        <div className="component-item">
        {renderingMode}
        {button}
      </div>
      </div>
    )
  }
}

export default GeneralInformation;
