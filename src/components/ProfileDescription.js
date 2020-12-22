import React from "react";
import ProfileDescriptionEditMode from "./ProfileDescriptionEditMode";
import ProfileDescriptionDisplayMode from "./ProfileDescriptionDisplayMode";
import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";

class ProfileDescription extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleEditModeClick = this.handleEditModeClick.bind(this);
    this.handleDisplayModeClick = this.handleDisplayModeClick.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isInEditMode: true,
      inputFields: [
        {
          inputProfileDescription: "",
        },
      ],
    };
  }       
          
  handleEditModeClick() {
    this.setState({isInEditMode: false});
  }

  handleDisplayModeClick() {
    this.setState({isInEditMode: true});
  }

  handleChangeInput = (index, e) => {
    const values = [...this.state.inputFields];
    values[index][e.target.name] = e.target.value;
    this.setState({
      values
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };
          
  render() {
    const isInEditMode = this.state.isInEditMode;
    let renderingMode;
    let button;
    if (isInEditMode) {
      renderingMode = <ProfileDescriptionEditMode 
      onSubmitFormHandleSubmit={this.handleSubmit}
      inputFields={this.state.inputFields}
      onChangeInput={this.handleChangeInput}
    />
      if(this.props.isInCvEditMode) {
        button = <SubmitButton onClick={this.handleEditModeClick} />
      }
    } else {
      renderingMode = <ProfileDescriptionDisplayMode 
        inputFields={this.state.inputFields}
      />
      if(this.props.isInCvEditMode) {
        button = <EditButton onClick={this.handleDisplayModeClick} />
      }
    }

    return (
      <div>
        <div className="component-item">
          {renderingMode}
          {button}
        </div>
      </div>
    )
  }
}

export default ProfileDescription;
