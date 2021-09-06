import React from "react";
import UserTableItem from "./UserTableItem";

class UserTable extends React.PureComponent {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map((user) => (
            <UserTableItem
              user={user}
              key={user.id}
              onSelect={this.props.onSelect}
              onDelete={this.props.onDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default UserTable;
