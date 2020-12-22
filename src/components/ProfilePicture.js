import React from "react";
import ProfilePictureEditMode from "./ProfilePictureEditMode";
import ProfilePictureDisplayMode from "./ProfilePictureDisplayMode";
import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";

class ProfilePicture extends React.Component {
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
          inputProfilePicture: "",
        },
      ],
      // inputProfilePicture: ""
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
    values[index][e.target.name] = URL.createObjectURL(e.target.files[0]);
    this.setState({
      values
    });

    // if (e.target.files && e.target.files[0]) {
    //   let img = e.target.files[0];
    //   this.setState({
    //     inputFields: [
    //       {
    //         inputProfilePicture: URL.createObjectURL(img),
    //       }
    //     ]
    //   });
    // }
  };

  // handleChangeInput = (index, e) => {
  //   const values = [...this.state.inputFields];
  //   values[index][e.target.name] = e.target.value;
  //   this.setState({
  //     values
  //   });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    
    // const isInCvEditMode = this.props.isInCvEditMode;
    const isInEditMode = this.state.isInEditMode;
    let renderingMode;
    let button;
    if (isInEditMode) {
      renderingMode = <ProfilePictureEditMode 
      // onSubmitFormHandleSubmit={this.handleSubmit.bind(this)}
      onSubmitFormHandleSubmit={this.handleSubmit}

      inputFields={this.state.inputFields}
      onChangeInput={this.handleChangeInput}
      // onClickHandleRemoveFields={this.handleRemoveFields}
      // onClickHandleAddFields={this.handleAddFields}

      // onClickHandleSubmit={this.handleSubmit.bind(this)}
      // onClickHandleSubmit={this.handleSubmit}

    />
      if(this.props.isInCvEditMode) {
        button = <SubmitButton onClick={this.handleEditModeClick} />
      }
    } else {
      renderingMode = <ProfilePictureDisplayMode
        inputFields={this.state.inputFields}
        // inputProfilePicture={this.state.inputProfilePicture}
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

export default ProfilePicture;


// import React from "react";

// class ProfilePicture extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: null
//     };

//     this.onImageChange = this.onImageChange.bind(this);
//   }

//   onImageChange = event => {
//     if (event.target.files && event.target.files[0]) {
//       let img = event.target.files[0];
//       this.setState({
//         image: URL.createObjectURL(img)
//       });
//     }
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <div>
//             <img src={this.state.image} />
//             <h1>Select Image</h1>
//             <input type="file" name="myImage" onChange={this.onImageChange} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default ProfilePicture;