import React from "react";
import UserTable from "../components/UserTable";
import Form from "../components/Form";
import {connect} from "react-redux";
import {fetchTodos, deleteUser} from "../store/actions"

class Contacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActiveTable: false,
            isActiveForm: false
        }
    }

    componentDidMount(){
        this.props.fetchTodos();
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
                    onClick={() => this.setState({isActiveForm: true})}>
                    Add User
                </button>
                <div className="wrapper">
                    <UserTable 
                        users={this.props.users}
                        onDelete={this.props.deleteUser}
                    />
                    {
                        (this.state.isActiveForm) && 
                        <Form />
                    }
                </div>
                </>
            ) :
            <button 
                className="main-button"
                onClick={() => this.setState({isActiveTable: true})}>
                Show Users
            </button>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.users
    }
}

const mapDispatchToProps = {
    fetchTodos,
    deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);