import React, { Component } from 'react';
import TodoList from './TodoContainer/TodoList';
import TodoForm from './TodoContainer/TodoForm';
import TodoOptions from './TodoContainer/TodoOptions'; 

export default class TodoContainer extends Component { 
    
    constructor(props) {
        super(props);

        this.state = {
            index: 3,
            showCompleted: true,
            todos: [
                {
                    id: 1,
                    task: 'Something to do',
                    done: false,
                },
                {
                    id: 2,
                    task: 'Another one',
                    done: false,
                },
                {
                    id: 3,
                    task: 'And another one... ',
                    done: true,
                },
            ]
        };
    }

    toggleTodo = ({id}) => this.setState({todos: this.state.todos.map(todo => todo.id !== id ? todo : { ...todo, done: !todo.done })});

    createTodo = ({task}) => this.setState({index: this.state.index + 1, todos:[...this.state.todos, {id: this.state.index + 1, task: task, done: false}]});

    updateTodo = ({id, task}) => this.setState({todos: this.state.todos.map(todo => todo.id !== id ? todo : {...todo, task: task})});

    deleteTodo = ({id}) => this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});

    todoList = () => this.state.todos.filter(todo => !todo.done || this.state.showCompleted);

    toggleCompleted = () => this.setState({showCompleted: !this.state.showCompleted});

    removeCompleted = () => this.setState({todos: this.state.todos.filter(todo => !todo.done)});

    render() { 
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 mx-auto py-4">
                        <div className="card bg-dark text-light">
                            <h3 className="card-header">
                                <i className="fas fa-clipboard-list mr-2"></i>
                                My Todo list
                            </h3>
                            <TodoForm createTodo={ this.createTodo }/>
                            <TodoList 
                                todos={ this.todoList() }
                                toggleTodo={ this.toggleTodo }
                                updateTodo={ this.updateTodo }
                                deleteTodo={ this.deleteTodo } 
                                />
                            <TodoOptions
                                toggleCompleted={ this.toggleCompleted }
                                removeCompleted={ this.removeCompleted }
                                showCompleted={ this.state.showCompleted }
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}