import React from 'react';

class Form extends React.PureComponent {

render() {
    return(
        <form>
            <input 
              type="text" 
              placeholder="Name" 
            //   value={this.state.name}
            //   onChange={(e) => this.setState({name: e.target.value})}
              />
            <input 
              type="text" 
              placeholder="Surname"
            //   value={this.state.email}
            //   onChange={(e) => this.setState({email: e.target.value})}
              />
            <input 
              type="text" 
              placeholder="Email"
            //   value={this.state.phone}
            //   onChange={(e) => this.setState({phone: e.target.value})}
              />

            <div className="buttons">
                <button 
                  className="positive_button"
                //   onClick={(e) => this.saveChanges(e)}
                >
                    {/* {this.props.currentUser.id ? "Save" : "Create"} */}
                </button>
                <button 
                  className="negative_button"
                //   onClick={(e) => {this.clearForm(e); this.props.deleteCurrentUser()}}
                  >
                    Cancel
                </button>
            </div>
        </form>
    )
  }
}

export default Form;