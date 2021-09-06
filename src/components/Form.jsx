import React from "react";

class Form extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.currentUser
    };
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.currentUser.id !== this.props.currentUser.id) {
      if (Number.isInteger(this.props.currentUser.id)) {
        this.setState({
          ...this.props.currentUser
        });
      } else {
        this.setState({
          name: "",
          surname: "",
          email: "",
          id: undefined
        });
      }
    }
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={this.state.surname}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onChange}
        />

        <div className="buttons">
          <button
            className="positive_button"
            onClick={(e) => {e.preventDefault(); this.props.saveForm(this.state);}}
          >
            {this.props.currentUser.id ? "Save" : "Create"}
          </button>
          <button
            className="negative_button"
            onClick={this.props.hideForm}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default Form;