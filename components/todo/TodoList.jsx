import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        const todos = [];
        for (let i = 0; i < this.props.todos.length; i++) {
            todos.push(
                <Todo
                    key={i}
                    title={this.props.todos[i].title}
                    desc={this.props.todos[i].desc}
                    done={this.props.todos[i].done}
                />
            );
        }
        return (
            <ol>
                {todos}
            </ol>
        );
    }
}

export default TodoList;
