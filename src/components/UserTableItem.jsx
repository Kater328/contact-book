import React from "react";

class userTableItem extends React.PureComponent {
  render() {
    return (
      <tr>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.surname}</td>
        <td>{this.props.user.email}</td>
        <td>
          <button
            className="positive_button"
            onClick={() => this.props.onSelect(this.props.user)}
          >
            Edit
          </button>
          <button
            className="negative_button"
            onClick={() => this.props.onDelete(this.props.user.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default userTableItem;
