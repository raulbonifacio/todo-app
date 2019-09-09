import React, { Component } from 'react'
import Todo from './TodoList/Todo';

export default class TodoList extends Component {


    todos() { 
        return this.props.todos.map( todo => {
            return(
                <Todo
                    key={ todo.id }
                    todo={ todo }
                    toggleTodo={ this.props.toggleTodo }
                    updateTodo={ this.props.updateTodo }
                    deleteTodo={ this.props.deleteTodo }
                />
            )
        });
    }


    render() {
        return (
            <div className="card-body bg-light p-0">
                <table className="table table-hover bg-light mb-0 ">
                    <tbody className="">
                        {this.todos()}
                    </tbody>
                </table>
            </div>
        )
    }
}
