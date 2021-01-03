import React, { Component } from "react";
import Header from "./components/Header"
import NameTitle from "./components/NameTitle"
import ProfileDescription from "./components/ProfileDescription"
import Education from "./components/Education"
import Expertise from "./components/Expertise"
import ContactInformation from "./components/ContactInformation"
import ProfessionalExperience from "./components/ProfessionalExperience"
import ProfilePicture from "./components/ProfilePicture"
import ToggleButtonText from "./components/ToggleButtonText";
import PrintCvButton from "./components/PrintCvButton";
import './styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleCvEditModeClick = this.handleCvEditModeClick.bind(this);
    this.handleCvDisplayModeClick = this.handleCvDisplayModeClick.bind(this);
    this.changeToggleButtonState = this.changeToggleButtonState.bind(this);
    this.printCv = this.printCv.bind(this);

    this.state = {
      isInCvEditMode: true,
      isToggled: false,
    };
  }

  handleCvEditModeClick() {
    this.setState({isInCvEditMode: false});
  }

  handleCvDisplayModeClick() {
    this.setState({isInCvEditMode: true});
  }

  changeToggleButtonState() {
    this.setState({isInCvEditMode: !this.state.isInCvEditMode});
  }

  printCv() {
    if(this.state.isInCvEditMode) {
      this.setState({isInCvEditMode: false});
      window.print();
      this.setState({isInCvEditMode: true});
    } else {
      window.print();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="toggle-button-text-container">
          <ToggleButtonText changeToggleButtonState={this.changeToggleButtonState}/>
        </div>
        <div className="print-button-container">
          <PrintCvButton printCv={this.printCv} />
        </div>
        <div className="components-wrapper">
          <div className="profile-pic">
            <div className="profile-avatar">
              <ProfilePicture isInCvEditMode={this.state.isInCvEditMode} />
            </div>
          </div>
          <div className="contact">
              <div className="component-divide-line"></div>
              <ContactInformation isInCvEditMode={this.state.isInCvEditMode} />
          </div>
          <div className="education">
            <div className="component-divide-line"></div>
            <Education isInCvEditMode={this.state.isInCvEditMode} />
          </div>
          <div className="expertise">
            <div className="component-divide-line"></div>
            <Expertise isInCvEditMode={this.state.isInCvEditMode} />
          </div>
          <div className="name-function">
            <NameTitle isInCvEditMode={this.state.isInCvEditMode} />
          </div>
          <div className="profile-description">
            <div className="component-divide-line"></div>
            <ProfileDescription isInCvEditMode={this.state.isInCvEditMode} />
          </div>
          <div className="professional-experience">
            <div className="component-divide-line"></div>
            <ProfessionalExperience isInCvEditMode={this.state.isInCvEditMode} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
