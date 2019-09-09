import React, { Component } from 'react'

export default class TodoForm extends Component {
    
    constructor(props) { 
        super(props)
        this.state =  {
            value: ''
        };
    }

    updateValue = (value) => { 
        this.setState({ value: value });
    }

    render() {
        return (
            <div className="card-body">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0" placeholder="Write your task in here" onChange={ (event) => this.updateValue(event.target.value) }/>
                    <div className="input-group-append">
                        <button className="btn btn-dark border-white" onClick={ () => this.props.createTodo({ task: this.state.value }) }>
                            Create todo
                            <i class="fas fa-plus small ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
