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
          <GeneralInformation />
          <EducationalExperience />
          <WorkExperience />
        </div>
      </div>
    )
  }
}

export default App;
