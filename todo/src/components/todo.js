import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions/";
class Todo extends React.Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
  };

  toggleMe = todo => {
    console.log(todo);
    this.props.toggleTodo(todo);
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
          <button onClick={this.addTodo}>Add todo</button>
        </div>
        <div className="todo-list">
          {this.props.todos.map(todo => {
            if (todo.completed) {
              return (
                <p
                  onClick={() => {
                    this.toggleMe(todo.id);
                  }}
                  key={todo.id}
                >
                  {todo.value}
                </p>
              );
            } else {
              return (
                <p
                  onClick={() => {
                    this.toggleMe(todo.id);
                  }}
                  key={todo.id}
                >
                  {todo.value} NOT COMPLETED
                </p>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title,
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(Todo);
