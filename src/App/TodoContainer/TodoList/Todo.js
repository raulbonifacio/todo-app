import React, { Component } from 'react'

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state ={ 
            editable: false
        };
    }

    toggleEditable = () => this.setState({editable: !this.state.editable});

    toggleButton(content) {    
        if(this.props.todo.done) {
            return (
                <button className="btn btn-link text-success border-0" onClick={ () => this.props.toggleTodo(this.props.todo) }>
                    <i className="far fa-check-square"></i>
                </button>
            );
        } else { 
            return (
                <button className="btn btn-link text-danger border-0" onClick={ () => this.props.toggleTodo(this.props.todo) }>
                    <i className="far fa-square"></i>
                </button>
            );
        }
    }

    removeButton() {
        return (
            <button className="btn btn-link text-secondary border-0" onClick={ () => this.props.deleteTodo(this.props.todo) }>
                <i class="fas fa-trash"></i>
            </button>
        );
    }

    updateButton() {
        if(this.state.editable){ 
            return (
                <button className="btn btn-link text-dark bg-white border-secondary border-left-0" onClick={ () => this.toggleEditable() }>
                    <i className="fas fa-save"></i>
                </button>
            );
        } else { 
            return (
                <button className="btn btn-link text-dark" onClick={ () => this.toggleEditable() }>
                    <i className="fas fa-edit"></i>
                </button>
            );
        }
    }
    
    input() { 
        if(this.state.editable) {
            return (
                <input type="text" className="form-control border-secondary border-right-0" value={ this.props.todo.task } onChange={ event => this.props.updateTodo({...this.props.todo, task: event.target.value }) }/>
            );
        } else { 
            return (
                <input type="text" className="form-control border-secondary"  value={ this.props.todo.task } readOnly/>
            );
        }
    }

    render() {
        return (
            <tr>
                <td className="w-75 ">
                    <div className="input-group">
                        { this.input() } 
                        <div className="input-group-append">
                            { this.updateButton() }
                        </div>
                    </div>
                </td>
                <td>
                </td>
                <td>
                    { this.removeButton() }
                </td>
                <td>
                    { this.toggleButton() }
                </td>
            </tr>
        );
    }
}
