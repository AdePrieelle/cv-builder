(this["webpackJsonpcv-builder"]=this["webpackJsonpcv-builder"]||[]).push([[0],Array(23).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),s=n.n(a),d=n(15),c=n.n(d),l=(n(23),n(4)),o=n(5),u=n(2),r=n(7),p=n(6),h=(n(24),function(e){return Object(i.jsx)("div",{className:"header",children:"React CV Builder"})}),j=n(3),b=function(e){return Object(i.jsx)("div",{className:"component component-edit-mode-nametitle",children:Object(i.jsxs)("form",{onSubmit:function(t){return e.onSubmitFormHandleSubmit(t)},children:[Object(i.jsx)("div",{className:"component-header-edit-mode component-header-edit-mode-left",children:"Heading"}),e.inputFields.map((function(t,n){return Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"name"+n,children:"Name"}),Object(i.jsx)("input",{type:"text",name:"inputName",id:"name"+n,value:t.inputName,onChange:function(t){return e.onChangeInput(n,t)}}),Object(i.jsx)("label",{htmlFor:"title"+n,children:"Profession"}),Object(i.jsx)("input",{type:"text",name:"inputTitle",id:"title"+n,value:t.inputTitle,onChange:function(t){return e.onChangeInput(n,t)}})]},n)}))]})})},m=function(e){return Object(i.jsx)("div",{className:"component component-name-title",children:Object(i.jsx)("div",{className:"component-props",children:e.inputFields.map((function(e,t){return Object(i.jsxs)("div",{className:"props-value-name-title",children:[Object(i.jsx)("div",{className:"props-value props-value-name-title-inputname",children:e.inputName}),Object(i.jsx)("div",{className:"props-value props-value-name-title-inputtitle",children:e.inputTitle})]},t)}))})})},v=(n(25),function(e){return Object(i.jsx)("i",{className:"fas fa-edit edit-icon",onClick:e.onClick})}),O=(n(26),function(e){return Object(i.jsx)("button",{className:"submit-button",onClick:e.onClick,children:"Submit"})}),x=(n(27),function(e){Object(r.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleChangeInput=function(e,t){var n=Object(j.a)(i.state.inputFields);n[e][t.target.name]=t.target.value,i.setState({values:n})},i.handleSubmit=function(e){e.preventDefault()},i.handleEditModeClick=i.handleEditModeClick.bind(Object(u.a)(i)),i.handleDisplayModeClick=i.handleDisplayModeClick.bind(Object(u.a)(i)),i.handleChangeInput=i.handleChangeInput.bind(Object(u.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i.state={isInEditMode:!0,inputFields:[{inputName:"",inputTitle:""}]},i}return Object(o.a)(n,[{key:"handleEditModeClick",value:function(){this.setState({isInEditMode:!1})}},{key:"handleDisplayModeClick",value:function(){this.setState({isInEditMode:!0})}},{key:"render",value:function(){var e,t;return this.state.isInEditMode&&this.props.isInCvEditMode?(e=Object(i.jsx)(b,{onSubmitFormHandleSubmit:this.handleSubmit,inputFields:this.state.inputFields,onChangeInput:this.handleChangeInput}),t=Object(i.jsx)(O,{onClick:this.handleEditModeClick})):(e=Object(i.jsx)(m,{inputFields:this.state.inputFields}),t=Object(i.jsx)(v,{onClick:this.handleDisplayModeClick})),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"component-item",children:[e,this.props.isInCvEditMode&&t]})})}}]),n}(s.a.Component)),C=function(e){return Object(i.jsx)("div",{className:"component",children:Object(i.jsx)("form",{onSubmit:function(t){return e.onSubmitFormHandleSubmit(t)},children:e.inputFields.map((function(t,n){return Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"component-header-edit-mode component-header-edit-mode-left",htmlFor:"profile-description"+n,children:"Profile"}),Object(i.jsx)("textarea",{name:"inputProfileDescription",id:"profile-description"+n,value:t.inputProfileDescription,onChange:function(t){return e.onChangeInput(n,t)}})]},n)}))})})},f=function(e){return Object(i.jsxs)("div",{className:"component",children:[Object(i.jsx)("div",{className:"component-header-display-mode component-header-display-mode-left",children:"Profile"}),Object(i.jsx)("div",{className:"component-props",children:e.inputFields.map((function(e,t){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"props-value props-value-profile-description",children:e.inputProfileDescription})},t)}))})]})},M=function(e){Object(r.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleChangeInput=function(e,t){var n=Object(j.a)(i.state.inputFields);n[e][t.target.name]=t.target.value,i.setState({values:n})},i.handleSubmit=function(e){e.preventDefault()},i.handleEditModeClick=i.handleEditModeClick.bind(Object(u.a)(i)),i.handleDisplayModeClick=i.handleDisplayModeClick.bind(Object(u.a)(i)),i.handleChangeInput=i.handleChangeInput.bind(Object(u.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i.state={isInEditMode:!0,inputFields:[{inputProfileDescription:""}]},i}return Object(o.a)(n,[{key:"handleEditModeClick",value:function(){this.setState({isInEditMode:!1})}},{key:"handleDisplayModeClick",value:function(){this.setState({isInEditMode:!0})}},{key:"render",value:function(){var e,t;return this.state.isInEditMode&&this.props.isInCvEditMode?(e=Object(i.jsx)(C,{onSubmitFormHandleSubmit:this.handleSubmit,inputFields:this.state.inputFields,onChangeInput:this.handleChangeInput}),t=Object(i.jsx)(O,{onClick:this.handleEditModeClick})):(e=Object(i.jsx)(f,{inputFields:this.state.inputFields}),t=Object(i.jsx)(v,{onClick:this.handleDisplayModeClick})),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"component-item",children:[e,this.props.isInCvEditMode&&t]})})}}]),n}(s.a.Component),k=(n(28),function(e){return Object(i.jsx)("i",{className:"far fa-window-close delete-icon",onClick:e.onClickHandleRemoveFields})}),F=(n(29),function(e){return Object(i.jsx)("button",{className:"add-button",onClick:e.onClickHandleAddFields,children:"Add"})}),I=function(e){return Object(i.jsx)("div",{className:"component",children:Object(i.jsxs)("form",{onSubmit:function(t){return e.onSubmitFormHandleSubmit(t)},children:[Object(i.jsx)("div",{className:"component-header-edit-mode",children:"Education"}),e.inputFields.map((function(t,n){return Object(i.jsxs)("div",{className:"component-input-wrapper component-input-wrapper-education",children:[Object(i.jsx)("label",{htmlFor:"study"+n,children:"Study"}),Object(i.jsx)("input",{type:"text",name:"inputStudy",id:"study"+n,value:t.inputStudy,onChange:function(t){return e.onChangeInput(n,t)}}),Object(i.jsx)("label",{htmlFor:"school"+n,children:"School"}),Object(i.jsx)("input",{type:"text",name:"inputSchool",id:"school"+n,value:t.inputSchool,onChange:function(t){return e.onChangeInput(n,t)}}),Object(i.jsx)("label",{htmlFor:"date-study"+n,children:"Date of study"}),Object(i.jsx)("input",{type:"text",name:"inputDateStudy",id:"date-study"+n,value:t.inputDateStudy,onChange:function(t){return e.onChangeInput(n,t)}}),e.isInCvEditMode&&Object(i.jsx)(k,{onClickHandleRemoveFields:function(t){return e.onClickHandleRemoveFields(n,t)}})]},n)})),e.isInCvEditMode&&Object(i.jsx)(F,{onClickHandleAddFields:e.onClickHandleAddFields})]})})},g=function(e){return Object(i.jsxs)("div",{className:"component",children:[Object(i.jsx)("div",{className:"component-header-display-mode",children:"Education"}),Object(i.jsx)("div",{className:"component-props component-props-education",children:e.inputFields.map((function(e,t){return Object(i.jsxs)("div",{className:"education-props-values",children:[Object(i.jsx)("div",{className:"props-value props-value-education-inputstudy",children:e.inputStudy}),Object(i.jsx)("div",{className:"props-value props-value-education-inputschool",children:e.inputSchool}),Object(i.jsx)("div",{className:"props-value props-value-education-inputdatestudy",children:e.inputDateStudy})]},t)}))})]})},S=(n(30),function(e){Object(r.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleChangeInput=function(e,t){var n=Object(j.a)(i.state.inputFields);n[e][t.target.name]=t.target.value,i.setState({values:n})},i.handleSubmit=function(e){e.preventDefault()},i.handleAddFields=function(){i.setState({inputFields:i.state.inputFields.concat({inputSchool:"",inputStudy:"",inputDateStudy:""})})},i.handleRemoveFields=function(e){var t=Object(j.a)(i.state.inputFields);t.splice(e,1),i.setState({inputFields:t})},i.handleEditModeClick=i.handleEditModeClick.bind(Object(u.a)(i)),i.handleDisplayModeClick=i.handleDisplayModeClick.bind(Object(u.a)(i)),i.handleChangeInput=i.handleChangeInput.bind(Object(u.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i.handleAddFields=i.handleAddFields.bind(Object(u.a)(i)),i.handleRemoveFields=i.handleRemoveFields.bind(Object(u.a)(i)),i.state={isInEditMode:!0,inputFields:[{inputSchool:"",inputStudy:"",inputDateStudy:""}]},i}return Object(o.a)(n,[{key:"handleEditModeClick",value:function(){this.setState({isInEditMode:!1})}},{key:"handleDisplayModeClick",value:function(){this.setState({isInEditMode:!0})}},{key:"render",value:function(){var e,t;return this.state.isInEditMode&&this.props.isInCvEditMode?(e=Object(i.jsx)(I,{onSubmitFormHandleSubmit:this.handleSubmit,inputFields:this.state.inputFields,onChangeInput:this.handleChangeInput,onClickHandleRemoveFields:this.handleRemoveFields,onClickHandleAddFields:this.handleAddFields,isInCvEditMode:this.props.isInCvEditMode}),t=Object(i.jsx)(O,{onClick:this.handleEditModeClick})):(e=Object(i.jsx)(g,{inputFields:this.state.inputFields}),t=Object(i.jsx)(v,{onClick:this.handleDisplayModeClick})),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"component-item",children:[e,this.props.isInCvEditMode&&t]})})}}]),n}(s.a.Component)),E=function(e){return Object(i.jsx)("div",{className:"component",children:Object(i.jsxs)("form",{onSubmit:function(t){return e.onSubmitFormHandleSubmit(t)},children:[Object(i.jsx)("div",{className:"component-header-edit-mode",children:"Expertise"}),e.inputFields.map((function(t,n){return Object(i.jsxs)("div",{className:"component-input-wrapper-expertise",children:[Object(i.jsx)("input",{type:"text",name:"inputExpertise",id:"expertise"+n,value:t.inputExpertise,onChange:function(t){return e.onChangeInput(n,t)}}),e.isInCvEditMode&&Object(i.jsx)(k,{onClickHandleRemoveFields:function(t){return e.onClickHandleRemoveFields(n,t)}})]},n)})),e.isInCvEditMode&&Object(i.jsx)(F,{onClickHandleAddFields:e.onClickHandleAddFields})]})})},y=function(e){return Object(i.jsxs)("div",{className:"component",children:[Object(i.jsx)("div",{className:"component-header-display-mode",children:"Expertise"}),Object(i.jsx)("div",{className:"component-props",children:e.inputFields.map((function(e,t){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"props-value props-value-inputexpertise",children:e.inputExpertise})},t)}))})]})},N=(n(31),function(e){Object(r.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleChangeInput=function(e,t){var n=Object(j.a)(i.state.inputFields);n[e][t.target.name]=t.target.value,i.setState({values:n})},i.handleSubmit=function(e){e.preventDefault()},i.handleAddFields=function(){i.setState({inputFields:i.state.inputFields.concat({inputExpertise:""})})},i.handleRemoveFields=function(e){var t=Object(j.a)(i.state.inputFields);t.splice(e,1),i.setState({inputFields:t})},i.handleEditModeClick=i.handleEditModeClick.bind(Object(u.a)(i)),i.handleDisplayModeClick=i.handleDisplayModeClick.bind(Object(u.a)(i)),i.handleChangeInput=i.handleChangeInput.bind(Object(u.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i.handleAddFields=i.handleAddFields.bind(Object(u.a)(i)),i.handleRemoveFields=i.handleRemoveFields.bind(Object(u.a)(i)),i.state={isInEditMode:!0,inputFields:[{inputExpertise:""}]},i}return Object(o.a)(n,[{key:"handleEditModeClick",value:function(){this.setState({isInEditMode:!1})}},{key:"handleDisplayModeClick",value:function(){this.setState({isInEditMode:!0})}},{key:"render",value:function(){var e,t;return this.state.isInEditMode&&this.props.isInCvEditMode?(e=Object(i.jsx)(E,{onSubmitFormHandleSubmit:this.handleSubmit,inputFields:this.state.inputFields,onChangeInput:this.handleChangeInput,onClickHandleRemoveFields:this.handleRemoveFields,onClickHandleAddFields:this.handleAddFields,isInCvEditMode:this.props.isInCvEditMode}),t=Object(i.jsx)(O,{onClick:this.handleEditModeClick})):(e=Object(i.jsx)(y,{inputFields:this.state.inputFields}),t=Object(i.jsx)(v,{onClick:this.handleDisplayModeClick})),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"component-item",children:[e,this.props.isInCvEditMode&&t]})})}}]),n}(s.a.Component)),D=function(e){return Object(i.jsx)("div",{className:"component",children:Object(i.jsxs)("form",{onSubmit:function(t){return e.onSubmitFormHandleSubmit(t)},children:[Object(i.jsx)("div",{className:"component-header-edit-mode",children:"Contact"}),e.inputFields.map((function(t,n){return Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"phone"+n,children:"Phone number"}),Object(i.jsx)("input",{type:"text",name:"inputPhone",id:"phone"+n,value:t.inputPhone,onChange:function(t){return e.onChangeInput(n,t)}}),Object(i.jsx)("label",{htmlFor:"mail"+n,children:"Mail"}),Object(i.jsx)("input",{type:"text",name:"inputMail",id:"mail"+n,value:t.inputMail,onChange:function(t){return e.onChangeInput(n,t)}}),Object(i.jsx)("label",{htmlFor:"location"+n,children:"Location"}),Object(i.jsx)("input",{type:"text",name:"inputLocation",id:"location"+n,value:t.inputLocation,onChange:function(t){return e.onChangeInput(n,t)}}),Object(i.jsx)("label",{htmlFor:"linkedin"+n,children:"LinkedIn"}),Object(i.jsx)("input",{type:"text",name:"inputLinkedIn",id:"linkedin"+n,value:t.inputLinkedIn,onChange:function(t){return e.onChangeInput(n,t)}})]},n)}))]})})},H=function(e){return Object(i.jsxs)("div",{className:"component",children:[Object(i.jsx)("div",{className:"component-header-display-mode",children:"Contact"}),Object(i.jsx)("div",{className:"component-props",children:e.inputFields.map((function(e,t){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"contact-option",children:[Object(i.jsx)("div",{className:"contact-icon-container",children:Object(i.jsx)("i",{className:"fas fa-phone-alt contact-icon"})}),Object(i.jsx)("div",{className:"props-value",children:e.inputPhone})]}),Object(i.jsxs)("div",{className:"contact-option",children:[Object(i.jsx)("div",{className:"contact-icon-container",children:Object(i.jsx)("i",{className:"fas fa-envelope contact-icon"})}),Object(i.jsx)("div",{className:"props-value",children:e.inputMail})]}),Object(i.jsxs)("div",{className:"contact-option",children:[Object(i.jsx)("div",{className:"contact-icon-container",children:Object(i.jsx)("i",{className:"fas fa-home contact-icon"})}),Object(i.jsx)("div",{className:"props-value",children:e.inputLocation})]}),Object(i.jsxs)("div",{className:"contact-option",children:[Object(i.jsx)("div",{className:"contact-icon-container",children:Object(i.jsx)("i",{className:"fab fa-linkedin-in contact-icon"})}),Object(i.jsx)("div",{className:"props-value",children:e.inputLinkedIn})]})]},t)}))})]})},J=(n(32),function(e){Object(r.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleChangeInput=function(e,t){var n=Object(j.a)(i.state.inputFields);n[e][t.target.name]=t.target.value,i.setState({values:n})},i.handleSubmit=function(e){e.preventDefault()},i.handleEditModeClick=i.handleEditModeClick.bind(Object(u.a)(i)),i.handleDisplayModeClick=i.handleDisplayModeClick.bind(Object(u.a)(i)),i.handleChangeInput=i.handleChangeInput.bind(Object(u.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i.state={isInEditMode:!0,inputFields:[{inputPhone:"",inputMail:"",inputLocation:"",inputLinkedIn:""}]},i}return Object(o.a)(n,[{key:"handleEditModeClick",value:function(){this.setState({isInEditMode:!1})}},{key:"handleDisplayModeClick",value:function(){this.setState({isInEditMode:!0})}},{key:"render",value:function(){var e,t;return this.state.isInEditMode&&this.props.isInCvEditMode?(e=Object(i.jsx)(D,{onSubmitFormHandleSubmit:this.handleSubmit,inputFields:this.state.inputFields,onChangeInput:this.handleChangeInput}),t=Object(i.jsx)(O,{onClick:this.handleEditModeClick})):(e=Object(i.jsx)(H,{inputFields:this.state.inputFields}),t=Object(i.jsx)(v,{onClick:this.handleDisplayModeClick})),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"component-item",children:[e,this.props.isInCvEditMode&&t]})})}}]),n}(s.a.Component)),R=function(e){return Object(i.jsx)("div",{className:"component",children:Object(i.jsxs)("form",{onSubmit:function(t){return e.onSubmitFormHandleSubmit(t)},children:[Object(i.jsx)("div",{className:"component-header-edit-mode component-header-edit-mode-left",children:"Professional Experience"}),e.inputFields.map((function(t,n){return Object(i.jsxs)("div",{className:"component-input-wrapper component-input-wrapper-professionalexperience",children:[Object(i.jsx)("label",{htmlFor:"job-title"+n,children:"Job Title"}),Object(i.jsx)("input",{type:"text",name:"inputJobTitle",id:"job-title"+n,value:t.inputJobTitle,onChange:function(t){return e.onChangeInput(n,t)}}),Object(i.jsx)("label",{htmlFor:"company"+n,children:"Company"}),Object(i.jsx)("input",{type:"text",name:"inputCompany",id:"company"+n,value:t.inputCompany,onChange:function(t){return e.onChangeInput(n,t)}}),Object(i.jsx)("label",{htmlFor:"job-location"+n,children:"Location"}),Object(i.jsx)("input",{type:"text",name:"inputJobLocation",id:"job-location"+n,value:t.inputJobLocation,onChange:function(t){return e.onChangeInput(n,t)}}),Object(i.jsx)("label",{htmlFor:"job-date"+n,children:"Job Date"}),Object(i.jsx)("input",{type:"text",name:"inputJobDate",id:"job-date"+n,value:t.inputJobDate,onChange:function(t){return e.onChangeInput(n,t)}}),Object(i.jsx)("label",{htmlFor:"job-description"+n,children:"Job Description"}),Object(i.jsx)("textarea",{name:"inputJobDescription",id:"job-description"+n,value:t.inputJobDescription,onChange:function(t){return e.onChangeInput(n,t)}}),e.isInCvEditMode&&Object(i.jsx)(k,{onClickHandleRemoveFields:function(t){return e.onClickHandleRemoveFields(n,t)}})]},n)})),e.isInCvEditMode&&Object(i.jsx)(F,{onClickHandleAddFields:e.onClickHandleAddFields})]})})},A=function(e){return Object(i.jsxs)("div",{className:"component component-professionalexperience",children:[Object(i.jsx)("div",{className:"component-header-display-mode component-header-display-mode-left",children:"Professional Experience"}),Object(i.jsx)("div",{className:"component-props",children:e.inputFields.map((function(e,t){return Object(i.jsxs)("div",{className:"professionalexperience-props-values",children:[Object(i.jsx)("div",{className:"props-value props-value-inputjobtitle",children:e.inputJobTitle}),Object(i.jsxs)("div",{className:"company-location-date",children:[Object(i.jsx)("div",{className:"props-value props-value-inputcompany",children:e.inputCompany}),Object(i.jsx)("div",{className:"props-value props-value-inputjoblocation",children:e.inputJobLocation}),Object(i.jsx)("div",{className:"props-value props-value-inputjobdate",children:e.inputJobDate})]}),Object(i.jsx)("div",{className:"props-value props-value-inputJobDescription",children:e.inputJobDescription})]},t)}))})]})},P=(n(33),function(e){Object(r.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleChangeInput=function(e,t){var n=Object(j.a)(i.state.inputFields);n[e][t.target.name]=t.target.value,i.setState({values:n})},i.handleSubmit=function(e){e.preventDefault()},i.handleAddFields=function(){i.setState({inputFields:i.state.inputFields.concat({inputJobTitle:"",inputCompany:"",inputJobLocation:"",inputJobDate:"",inputJobDescription:""})})},i.handleRemoveFields=function(e){var t=Object(j.a)(i.state.inputFields);t.splice(e,1),i.setState({inputFields:t})},i.handleEditModeClick=i.handleEditModeClick.bind(Object(u.a)(i)),i.handleDisplayModeClick=i.handleDisplayModeClick.bind(Object(u.a)(i)),i.handleChangeInput=i.handleChangeInput.bind(Object(u.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i.handleAddFields=i.handleAddFields.bind(Object(u.a)(i)),i.handleRemoveFields=i.handleRemoveFields.bind(Object(u.a)(i)),i.state={isInEditMode:!0,inputFields:[{inputJobTitle:"",inputCompany:"",inputJobLocation:"",inputJobDate:"",inputJobDescription:""}]},i}return Object(o.a)(n,[{key:"handleEditModeClick",value:function(){this.setState({isInEditMode:!1})}},{key:"handleDisplayModeClick",value:function(){this.setState({isInEditMode:!0})}},{key:"render",value:function(){var e,t;return this.state.isInEditMode&&this.props.isInCvEditMode?(e=Object(i.jsx)(R,{onSubmitFormHandleSubmit:this.handleSubmit,inputFields:this.state.inputFields,onChangeInput:this.handleChangeInput,onClickHandleRemoveFields:this.handleRemoveFields,onClickHandleAddFields:this.handleAddFields,isInCvEditMode:this.props.isInCvEditMode}),t=Object(i.jsx)(O,{onClick:this.handleEditModeClick})):(e=Object(i.jsx)(A,{inputFields:this.state.inputFields}),t=Object(i.jsx)(v,{onClick:this.handleDisplayModeClick})),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"component-item component-item-professionalexperience",children:[e,this.props.isInCvEditMode&&t]})})}}]),n}(s.a.Component)),T=function(e){return Object(i.jsx)("div",{className:"component component-edit-mode-profilepicture",children:Object(i.jsxs)("form",{onSubmit:function(t){return e.onSubmitFormHandleSubmit(t)},children:[Object(i.jsx)("div",{className:"component-header-edit-mode",children:"Picture"}),e.inputFields.map((function(t,n){return Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"file",id:"profile-picture"+n,name:"inputProfilePicture",onChange:function(t){return e.onChangeInput(n,t)}})},n)}))]})})},w=function(e){return Object(i.jsx)("div",{className:"component",children:Object(i.jsx)("div",{className:"component-props",children:e.inputFields.map((function(e,t){return Object(i.jsx)("div",{className:"img-profile-picture-container-wrapper",children:Object(i.jsx)("div",{className:"props-value img-profile-picture-container",children:Object(i.jsx)("div",{className:"img-profile-picture",style:{backgroundImage:"url(".concat(e.inputProfilePicture,")")}})})},t)}))})})},L=n.p+"static/media/profile-pic-example.974a2221.svg",B=(n(34),function(e){Object(r.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleChangeInput=function(e,t){var n=Object(j.a)(i.state.inputFields);n[e][t.target.name]=URL.createObjectURL(t.target.files[0]),i.setState({values:n})},i.handleSubmit=function(e){e.preventDefault()},i.handleEditModeClick=i.handleEditModeClick.bind(Object(u.a)(i)),i.handleDisplayModeClick=i.handleDisplayModeClick.bind(Object(u.a)(i)),i.handleChangeInput=i.handleChangeInput.bind(Object(u.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i.state={isInEditMode:!0,inputFields:[{inputProfilePicture:L}]},i}return Object(o.a)(n,[{key:"handleEditModeClick",value:function(){this.setState({isInEditMode:!1})}},{key:"handleDisplayModeClick",value:function(){this.setState({isInEditMode:!0})}},{key:"render",value:function(){var e,t;return this.state.isInEditMode&&this.props.isInCvEditMode?(e=Object(i.jsx)(T,{onSubmitFormHandleSubmit:this.handleSubmit,inputFields:this.state.inputFields,onChangeInput:this.handleChangeInput}),t=Object(i.jsx)(O,{onClick:this.handleEditModeClick})):(e=Object(i.jsx)(w,{inputFields:this.state.inputFields}),t=Object(i.jsx)(v,{onClick:this.handleDisplayModeClick})),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"component-item",children:[e,this.props.isInCvEditMode&&t]})})}}]),n}(s.a.Component)),U=(n(35),function(e){return Object(i.jsxs)("label",{className:"switch",children:[Object(i.jsx)("input",{type:"checkbox",onChange:e.changeToggleButtonState}),Object(i.jsx)("span",{className:"slider rounded"})]})}),V=(n(36),function(e){return Object(i.jsxs)("div",{className:"toggle-button-text",children:[Object(i.jsx)("div",{className:"toggle-button-text-box toggle-button-text-box-edit",children:"Edit"}),Object(i.jsx)("div",{className:"toggle-button-text-box",children:Object(i.jsx)(U,{changeToggleButtonState:e.changeToggleButtonState})}),Object(i.jsx)("div",{className:"toggle-button-text-box toggle-button-text-box-preview",children:"Preview"})]})}),q=(n(37),function(e){return Object(i.jsx)("i",{className:"fas fa-print print-icon",onClick:e.printCv})}),z=(n(38),function(e){Object(r.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleCvEditModeClick=i.handleCvEditModeClick.bind(Object(u.a)(i)),i.handleCvDisplayModeClick=i.handleCvDisplayModeClick.bind(Object(u.a)(i)),i.changeToggleButtonState=i.changeToggleButtonState.bind(Object(u.a)(i)),i.printCv=i.printCv.bind(Object(u.a)(i)),i.state={isInCvEditMode:!0,isToggled:!1},i}return Object(o.a)(n,[{key:"handleCvEditModeClick",value:function(){this.setState({isInCvEditMode:!1})}},{key:"handleCvDisplayModeClick",value:function(){this.setState({isInCvEditMode:!0})}},{key:"changeToggleButtonState",value:function(){this.setState({isInCvEditMode:!this.state.isInCvEditMode})}},{key:"printCv",value:function(){this.state.isInCvEditMode?(this.setState({isInCvEditMode:!1}),window.print(),this.setState({isInCvEditMode:!0})):window.print()}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(h,{}),Object(i.jsx)("div",{className:"toggle-button-text-container",children:Object(i.jsx)(V,{changeToggleButtonState:this.changeToggleButtonState})}),Object(i.jsx)("div",{className:"print-button-container",children:Object(i.jsx)(q,{printCv:this.printCv})}),Object(i.jsxs)("div",{className:"components-wrapper",children:[Object(i.jsx)("div",{className:"profile-pic",children:Object(i.jsx)("div",{className:"profile-avatar",children:Object(i.jsx)(B,{isInCvEditMode:this.state.isInCvEditMode})})}),Object(i.jsxs)("div",{className:"contact",children:[Object(i.jsx)("div",{className:"component-divide-line"}),Object(i.jsx)(J,{isInCvEditMode:this.state.isInCvEditMode})]}),Object(i.jsxs)("div",{className:"education",children:[Object(i.jsx)("div",{className:"component-divide-line"}),Object(i.jsx)(S,{isInCvEditMode:this.state.isInCvEditMode})]}),Object(i.jsxs)("div",{className:"expertise",children:[Object(i.jsx)("div",{className:"component-divide-line"}),Object(i.jsx)(N,{isInCvEditMode:this.state.isInCvEditMode})]}),Object(i.jsx)("div",{className:"name-function",children:Object(i.jsx)(x,{isInCvEditMode:this.state.isInCvEditMode})}),Object(i.jsxs)("div",{className:"profile-description",children:[Object(i.jsx)("div",{className:"component-divide-line"}),Object(i.jsx)(M,{isInCvEditMode:this.state.isInCvEditMode})]}),Object(i.jsxs)("div",{className:"professional-experience",children:[Object(i.jsx)("div",{className:"component-divide-line"}),Object(i.jsx)(P,{isInCvEditMode:this.state.isInCvEditMode})]})]})]})}}]),n}(a.Component)),G=n(17);c.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(G.a,{children:Object(i.jsx)(z,{})})}),document.getElementById("root"))}]),[[44,1,2]]]);
//# sourceMappingURL=main.c407f782.chunk.js.map