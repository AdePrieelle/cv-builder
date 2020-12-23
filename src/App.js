import React, { Component } from "react";
import Header from "./components/Header"
// import GeneralInformation from "./components/GeneralInformation";
// import EducationalExperience from "./components/EducationalExperience";
// import WorkExperience from "./components/WorkExperience";
import NameTitle from "./components/NameTitle"
import ProfileDescription from "./components/ProfileDescription"
import Education from "./components/Education"
import Expertise from "./components/Expertise"
import ContactInformation from "./components/ContactInformation"
import ProfessionalExperience from "./components/ProfessionalExperience"
import ProfilePicture from "./components/ProfilePicture"
import './styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleCvEditModeClick = this.handleCvEditModeClick.bind(this);
    this.handleCvDisplayModeClick = this.handleCvDisplayModeClick.bind(this);

    this.state = {
      isInCvEditMode: true,
    };
  }

  handleCvEditModeClick() {
    this.setState({isInCvEditMode: false});
  }

  handleCvDisplayModeClick() {
    this.setState({isInCvEditMode: true});
  }

  render() {
    let isInCvEditMode = this.state.isInCvEditMode;
    let button;
    if (isInCvEditMode) {
      button = <button className="edit-preview-button" onClick={this.handleCvEditModeClick}>Preview Mode</button>
    } else {
      button = <button className="edit-preview-button" onClick={this.handleCvDisplayModeClick}>Edit Mode</button>
    }

    return (
      <div>
        <Header />
        {button}
        <div className="components-wrapper">
          {/* <GeneralInformation />
          <EducationalExperience />
          <WorkExperience /> */}
          <div className="profile-pic">
            {/* <div className="profile-avatar">profile-pic</div> */}
            <div className="profile-avatar">
              <ProfilePicture isInCvEditMode={this.state.isInCvEditMode} />
            </div>
          </div>
          <div className="contact">
            {/* <div className="profile-pic">profile-pic</div> */}
            {/* <div className="contact-header-options"> */}
              {/* <div className="contact-header">Contact</div>
              <div className="contact-options">
                <div className="phone">phone</div>
                <div className="mail">mail</div>
                <div className="location">location</div>
                <div className="linkedIn">linkedIn</div>
              </div> */}
              <ContactInformation isInCvEditMode={this.state.isInCvEditMode} />
            {/* </div> */}
          </div>
          <div className="education">
            {/* <div className="education-header">Education</div>
            <div className="education-degrees">
              <div className="degree">degree</div>
              <div className="uni">uni</div>
              <div className="year">year</div>
            </div> */}
            <Education isInCvEditMode={this.state.isInCvEditMode} />
          </div>
          <div className="expertise">
            {/* <div className="expertise-header">Expertise</div>
            <div className="expertise-skills">
              <div className="expertise-skill">team work</div>
              <div className="expertise-skill">project management</div>
            </div> */}
            <Expertise isInCvEditMode={this.state.isInCvEditMode} />
          </div>
          <div className="name-function">
            {/* <div className="name">Name</div>
            <div className="function">function</div> */}
            <NameTitle isInCvEditMode={this.state.isInCvEditMode} />
          </div>
          <div className="profile-description">
            {/* <div className="profile-header">Profile</div>
            <div className="profile-text">profile-text</div> */}
            <ProfileDescription isInCvEditMode={this.state.isInCvEditMode} />
          </div>
          <div className="professional-experience">
            {/* <div className="professional-experience-header">Professional experience</div>
            <div className="professional-experience-jobs">
              <div className="professional-experience-job">
                <div className="job-title">job title</div>
                <div className="company-location-date">
                  <div className="company">company</div>
                  <div className="location">location</div>
                  <div className="date">date</div>
                </div>
                <div className="job-description">job description</div>
              </div>
            </div> */}
            <ProfessionalExperience isInCvEditMode={this.state.isInCvEditMode} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
