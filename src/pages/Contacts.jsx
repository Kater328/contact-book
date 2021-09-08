import React from "react";
import UserTable from "../components/UserTable";
import Form from "../components/Form";
import {connect} from "react-redux";
import {fetchUsers, deleteUser, fillForm, clearForm, createUser, updateUser} from "../store/actions"

class Contacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActiveTable: false,
            isActiveForm: false
        }
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    updateForm = (user) => {
        this.setState({isActiveForm: true});
        this.props.clearForm();
        if(user) this.props.fillForm(user);
    }

    hideForm = () => {
        this.setState({isActiveForm: false});
        this.props.clearForm();
    }

    saveForm = (user) => {
        user.id ? this.props.updateUser(user) : this.props.createUser(user);
        this.hideForm();
    }

    render() {
        return (
            (this.state.isActiveTable) ? (
                <>
                <h1>
                    Contacts
                </h1>
                <button 
                    className="add-button"
                    onClick={(e) => {
                        e.preventDefault();
                        this.updateForm();
                    }}>
                    Add User
                </button>
                <div className="wrapper">
                    <UserTable 
                        users={this.props.users}
                        onSelect={this.updateForm}
                        onDelete={this.props.deleteUser}
                    />
                    {
                        (this.state.isActiveForm) && 
                        <Form 
                            currentUser={this.props.editingUser}
                            hideForm={this.hideForm}
                            saveForm={this.saveForm}/>
                    }
                </div>
                </>
            ) :
            <button 
                className="main-button"
                onClick={() => this.setState({isActiveTable: true})}
            >
                Show Users
            </button>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.users,
        editingUser: state.editingUser
    }
}

const mapDispatchToProps = {
    fetchUsers,
    deleteUser,
    fillForm,
    clearForm,
    createUser,
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);