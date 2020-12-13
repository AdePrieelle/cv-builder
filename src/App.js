import React, { Component } from "react";
import Header from "./components/Header"
import GeneralInformation from "./components/GeneralInformation";
// import EducationalExperience from "./components/EducationalExperience";
// import PracticalExperience from "./components/PracticalExperience";
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
          {/* <EducationalExperience /> */}
          {/* <PracticalExperience /> */}
        </div>
      </div>
    )
  }
}

export default App;
