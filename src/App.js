import React, { Component } from "react";
import Header from "./components/Header"
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import WorkExperience from "./components/WorkExperience";
import './styles/App.scss';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="components-wrapper">
          {/* <GeneralInformation />
          <EducationalExperience />
          <WorkExperience /> */}
          {/* <div className="contact-education-expertise"> */}
            <div className="contact">
              <div className="profile-pic">profile-pic</div>
              <div className="contact-header-options">
                <div className="contact-header">Contact</div>
                <div className="contact-options">
                  <div className="phone">phone</div>
                  <div className="mail">mail</div>
                  <div className="location">location</div>
                  <div className="linkedIn">linkedIn</div>
                </div>
              </div>
            </div>
            <div className="education">
              <div className="education-header">Education</div>
              <div className="education-degrees">
                <div className="degree">degree</div>
                <div className="uni">uni</div>
                <div className="year">year</div>
              </div>
            </div>
            <div className="expertise">
              <div className="expertise-header">Expertise</div>
              <div className="expertise-skills">
                <div className="expertise-skill">team work</div>
                <div className="expertise-skill">project management</div>
              </div>
            </div>
          {/* </div> */}
          {/* <div className="name-profile-professional"> */}
            <div className="name-function">
              <div className="name">Name</div>
              <div className="function">function</div>
            </div>
            <div className="profile-description">
              <div className="profile-header">Profile</div>
              <div className="profile-text">profile-text</div>
            </div>
            <div className="professional-experience">
              <div className="professional-experience-header">Professional experience</div>
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
              </div>
            </div>
          {/* </div> */}

        </div>
      </div>
    )
  }
}

export default App;
