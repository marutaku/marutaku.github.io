import React, {Component} from 'react';
import Form from '../components/todo/Form';
import TodoList from '../components/todo/TodoList';

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            todos: []
        }
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)} />
                <TodoList todos={this.state.todos} />
            </div>
        )
    }

    handleSubmit(e){
        e.preventDefault();
        const title = e.target.elements[0].value;
        if(!title){
            return;
        }
        const desc = e.target.elements[1].value;
        const todos = this.state.todos.slice();
        todos.push({
            title: title,
            desc: desc,
            done: false
        });
        this.setState({todos: todos});
    }
}

export default Todo;

