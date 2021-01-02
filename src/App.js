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
// import ToggleButton from "./components/ToggleButton"
import ToggleButtonText from "./components/ToggleButtonText";
import PrintCvButton from "./components/PrintCvButton";
import './styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleCvEditModeClick = this.handleCvEditModeClick.bind(this);
    this.handleCvDisplayModeClick = this.handleCvDisplayModeClick.bind(this);
    this.changeToggleButtonState = this.changeToggleButtonState.bind(this);
    // this.printElem = this.printElem.bind(this);
    // this.printContents = this.printContents.bind(this);
    // this.printContent = this.printContent.bind(this);
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

  // printElem() {
  //     var mywindow = window.open('', 'PRINT', 'height=400,width=600');

  //     mywindow.document.write('<html><head><title>' + document.title  + '</title>');
  //     mywindow.document.write('</head><body >');
  //     mywindow.document.write('<h1>' + document.title  + '</h1>');
  //     mywindow.document.write(document.querySelector(".components-wrapper").innerHTML);
  //     mywindow.document.write('</body></html>');

  //     mywindow.document.close(); // necessary for IE >= 10
  //     mywindow.focus(); // necessary for IE >= 10*/

  //     mywindow.print();
  //     mywindow.close();

  //     return true;
  // }

  // printContents()
  // {
  //   var prtContent = document.querySelector(".components-wrapper");
  //   var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
  //   WinPrint.document.write('<link href="./styles/App.scss" rel="stylesheet" media="screen,print">');
  //   WinPrint.document.write(prtContent.innerHTML);
  //   WinPrint.document.close();  
  //   WinPrint.focus();
  //   WinPrint.print();
  //   WinPrint.close();
  // }

  // printContent() {
  //   let restorepage = document.body.innerHTML;
  //   let printcontent = document.querySelector(".components-wrapper").innerHTML;
  //   document.body.innerHTML=printcontent;
  //   window.print();
  //   document.body.innerHTML=restorepage;
  // }

  render() {
    // let isInCvEditMode = this.state.isInCvEditMode;
    // let button;
    // if (isInCvEditMode) {
    //   button = <button className="edit-preview-button" onClick={this.handleCvEditModeClick}>Preview Mode</button>
    // } else {
    //   button = <button className="edit-preview-button" onClick={this.handleCvDisplayModeClick}>Edit Mode</button>
    // }

    return (
      <div>
        <Header />
        {/* {button} */}
        <div className="toggle-button-text-container">
          <ToggleButtonText changeToggleButtonState={this.changeToggleButtonState}/>
        </div>
        {/* <button onClick={this.printElem}>Print cv</button> */}
        {/* <button onClick={() => window.print()}>Print</button> */}
        <div className="print-button-container">
          {/* <button onClick={this.printCv}>Print</button> */}
          <PrintCvButton printCv={this.printCv} />
        </div>

        {/* <button onClick={this.printContents}>print</button> */}
        {/* <button onClick={this.printContent}>Print Content</button> */}
        <div className="components-wrapper">
          {/* <div className="print-button-container">
            <PrintCvButton printCv={this.printCv} />
          </div> */}
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
              <div className="component-divide-line-wrapper">
                <div className="component-divide-line"></div>
              </div>
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
            <div className="component-divide-line"></div>
            <Education isInCvEditMode={this.state.isInCvEditMode} />
          </div>
          <div className="expertise">
            {/* <div className="expertise-header">Expertise</div>
            <div className="expertise-skills">
              <div className="expertise-skill">team work</div>
              <div className="expertise-skill">project management</div>
            </div> */}
            <div className="component-divide-line"></div>
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
            <div className="component-divide-line"></div>
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
            <div className="component-divide-line"></div>
            <ProfessionalExperience isInCvEditMode={this.state.isInCvEditMode} />

          </div>
        </div>
      </div>
    )
  }
}

export default App;
