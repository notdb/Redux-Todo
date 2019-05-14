import React from "react";
import { connect } from "react-redux";

class Todo extends React.Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <div>
          <input
            type="text"
            name="newTodoText"
            value={this.state.newTodo}
            onChange={this.handleChanges}
          />
          <button>Add todo</button>
        </div>
        <div className="todo-list">
          <p>a</p>
          {this.props.todos.map(todo => (
            <p>{todo.value}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(Todo);
