import React from "react";
import "../styles/ContactInformationDisplayMode.scss"


const ContactInformationDisplayMode = (props) => {
  return (
    <div className="component">
        <div className="component-header-display-mode">Contact</div>
        <div className="component-props">
          {props.inputFields.map((inputField, index) => (
                <div key={index}>
                  <div className="contact-option">
                    <div className="contact-icon-container">
                      <i className="fas fa-phone-alt contact-icon"></i>
                    </div>
                    <div className="props-value">{inputField.inputPhone}</div>
                  </div>
                  <div className="contact-option">
                    <div className="contact-icon-container">
                      <i className="fas fa-envelope contact-icon"></i>
                    </div>
                    <div className="props-value">{inputField.inputMail}</div>
                  </div>
                  <div className="contact-option">
                    <div className="contact-icon-container">
                      <i className="fas fa-home contact-icon"></i>
                    </div>
                    <div className="props-value">{inputField.inputLocation}</div>
                  </div>
                  <div className="contact-option">
                    <div className="contact-icon-container">
                      <i className="fab fa-linkedin-in contact-icon"></i>
                    </div>
                    <div className="props-value">{inputField.inputLinkedIn}</div>
                  </div>
                </div>
            ))}
        </div>
        {/* <button type="submit" onClick={props.onClickHandleEdit}>edit</button> */}
    </div>
  );
};

export default ContactInformationDisplayMode;