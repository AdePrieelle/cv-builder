import React from "react";
import EducationEditMode from "./EducationEditMode";
import EducationDisplayMode from "./EducationDisplayMode";
import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";

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
    if (isInEditMode) {
      renderingMode = <EducationEditMode 
      onSubmitFormHandleSubmit={this.handleSubmit}
      inputFields={this.state.inputFields}
      onChangeInput={this.handleChangeInput}
      onClickHandleRemoveFields={this.handleRemoveFields}
      onClickHandleAddFields={this.handleAddFields}
      // isInCvEditMode = {this.props.isInCvEditMode}
      // onClickHandleSubmit={this.handleSubmit}
    />
      if(this.props.isInCvEditMode) {
        button = <SubmitButton onClick={this.handleEditModeClick} />
      }
    } else {
      renderingMode = <EducationDisplayMode 
        inputFields={this.state.inputFields}
        // onClickHandleEdit={this.handleDisplayModeClick}
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

export default Education;
