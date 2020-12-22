import React from "react";
import NameTitleEditMode from "./NameTitleEditMode";
import NameTitleDisplayMode from "./NameTitleDisplayMode";
import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";

class NameTitle extends React.Component {
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
          inputName: "",
          inputJobTitle: "",
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
      renderingMode = <NameTitleEditMode 
      onSubmitFormHandleSubmit={this.handleSubmit}
      inputFields={this.state.inputFields}
      onChangeInput={this.handleChangeInput}
    />
      // if(this.props.isInCvEditMode) {
        button = <SubmitButton onClick={this.handleEditModeClick} />
      // }
    } else {
      renderingMode = <NameTitleDisplayMode 
        inputFields={this.state.inputFields}
      />
      // if(this.props.isInCvEditMode) {
        button = <EditButton onClick={this.handleDisplayModeClick} />
      // }
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

export default NameTitle;
