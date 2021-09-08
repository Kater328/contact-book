import React from "react";

const onlyLetters = /^[A-Za-z]+$/;
const mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z]+.[a-z]+$/;

class Form extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.currentUser,
      isNameValid: false,
      isSurnameValid: false,
      isEmailValid: false,
      isFormValid: false
    };
  }

  componentDidMount(){
    if(this.state.id) this.updateValidValues(true);
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.currentUser.id !== this.props.currentUser.id) {
      this.setState({...this.props.currentUser});
      this.updateValidValues(Number.isInteger(this.props.currentUser.id));
    }
  };

  updateValidValues(bool){
    this.setState({
      isFormValid: bool,
      isNameValid: bool,
      isSurnameValid: bool,
      isEmailValid: bool
    });
  }

  onChange = (e) => {
    this.setState(
      {[e.target.name]: e.target.value,},
      () => {
        this.validateInput(e.target.name, e.target.value);
      }
    );
  };

  validateInput(name, value) {
    switch (name) {
      case "name":
        this.setState({isNameValid: value.match(onlyLetters) && value.length > 4});
        break;
      case "surname":
        this.setState({isSurnameValid: value.match(onlyLetters) && value.length > 4});
        break;
      case "email":
        this.setState({isEmailValid: value.match(mailFormat)});
        break;
      default: break;
    }
    this.setState(function(state) {
      return {
        isFormValid: state.isNameValid && state.isSurnameValid && state.isEmailValid
      };
    });
  }

  defineInputClass(inputName, isValueValid){
    if (inputName) {
      return isValueValid ? undefined : 'invalid';
    }
    return undefined;
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={this.defineInputClass(this.state.name, this.state.isNameValid)}
          value={this.state.name}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          className={this.defineInputClass(this.state.surname, this.state.isSurnameValid)}
          value={this.state.surname}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className={this.defineInputClass(this.state.email, this.state.isEmailValid)}
          value={this.state.email}
          onChange={this.onChange}
        />

        <div className="buttons">
          <button
            disabled={!this.state.isFormValid}
            className="positive_button"
            onClick={(e) => {
              e.preventDefault();
              this.props.saveForm({
                name: this.state.name, 
                surname: this.state.surname, 
                email: this.state.email, 
                id: this.state.id
              });
            }}
          >
            {this.props.currentUser.id ? "Save" : "Create"}
          </button>
          <button className="negative_button" onClick={this.props.hideForm}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default Form;