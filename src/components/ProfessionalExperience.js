import React from "react";
import ProfessionalExperienceEditMode from "./ProfessionalExperienceEditMode";
import ProfessionalExperienceDisplayMode from "./ProfessionalExperienceDisplayMode";
import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";

class ProfessionalExperience extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleEditModeClick = this.handleEditModeClick.bind(this);
    this.handleDisplayModeClick = this.handleDisplayModeClick.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddFields = this.handleAddFields.bind(this);
    this.handleRemoveFields = this.handleRemoveFields.bind(this);

    this.state = {
      isInEditMode: true,
      inputFields: [
        {
          inputJobTitle: "",
          inputCompany: "",
          inputJobLocation: "",
          inputJobDate: "",
          inputJobDescription: "",
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

  handleAddFields = () => {
    this.setState({
      inputFields: this.state.inputFields.concat({inputJobTitle: "", inputCompany: "", inputJobLocation: "", inputJobDate: "", inputJobDescription: ""})
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
    
    const isInEditMode = this.state.isInEditMode;
    let renderingMode;
    let button;
    if (isInEditMode) {
      renderingMode = <ProfessionalExperienceEditMode 
      // onSubmitFormHandleSubmit={this.handleSubmit.bind(this)}
      onSubmitFormHandleSubmit={this.handleSubmit}

      inputFields={this.state.inputFields}
      onChangeInput={this.handleChangeInput}
      onClickHandleRemoveFields={this.handleRemoveFields}
      onClickHandleAddFields={this.handleAddFields}

      // onClickHandleSubmit={this.handleSubmit.bind(this)}
      // onClickHandleSubmit={this.handleSubmit}

    />
      button = <SubmitButton onClick={this.handleEditModeClick} />
    } else {
      renderingMode = <ProfessionalExperienceDisplayMode 
        inputFields={this.state.inputFields}
        // onClickHandleEdit={this.handleDisplayModeClick}
      />
      button = <EditButton onClick={this.handleDisplayModeClick} />
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

export default ProfessionalExperience;