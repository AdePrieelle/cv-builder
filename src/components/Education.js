import React from "react";
import EducationEditMode from "./EducationEditMode";
import EducationDisplayMode from "./EducationDisplayMode";
import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";
import "../styles/Education.scss";

class Education extends React.Component {
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
          inputSchool: "",
          inputStudy: "",
          inputDateStudy: "",
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
    // Change the inputFields object key value to the input value
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
      inputFields: this.state.inputFields.concat({inputSchool: "", inputStudy: "", inputDateStudy: ""})
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
    // show edit mode only when the component and cv are in edit mode
    if (isInEditMode && this.props.isInCvEditMode) {
      renderingMode = <EducationEditMode 
        onSubmitFormHandleSubmit={this.handleSubmit}
        inputFields={this.state.inputFields}
        onChangeInput={this.handleChangeInput}
        onClickHandleRemoveFields={this.handleRemoveFields}
        onClickHandleAddFields={this.handleAddFields}
        isInCvEditMode = {this.props.isInCvEditMode}
      />
      button = <SubmitButton onClick={this.handleEditModeClick} />
    } else {
      renderingMode = <EducationDisplayMode 
        inputFields={this.state.inputFields}
      />
      button = <EditButton onClick={this.handleDisplayModeClick} />
    }

    return (
      <div>
        <div className="component-item">
          {renderingMode}
          {this.props.isInCvEditMode && button}
        </div>
      </div>
    )
  }
}

export default Education;
