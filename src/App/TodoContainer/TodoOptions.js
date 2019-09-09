import React, { Component } from 'react'

export default class TodoOptions extends Component {

    toggleCompletedButton() {
        if(this.props.showCompleted)
        {
            return(
                <button className="btn btn-dark border-light" onClick={ () => this.props.toggleCompleted() }>
                    Toggle completed
                    <i class="fas fa-eye-slash ml-2"></i>
                </button>
            );
        } else { 
            return(
                <button className="btn btn-dark border-light" onClick={ () => this.props.toggleCompleted() }>
                    Toggle completed
                    <i class="fas fa-eye ml-2"></i>
                </button>
            );
        }
    }

    removeCompletedButton() {
        return(
            <button className="btn btn-dark border-light" onClick={ () => this.props.removeCompleted() }>
                Remove completed <i class="fas fa-check-double ml-2"></i>
            </button>
        );
    }

    render() {
        return (
            <div className="card-footer">
                <div className="form-row">
                    <div className="col">
                        { this.removeCompletedButton() }
                    </div>
                    <div className="col text-right">
                        { this.toggleCompletedButton() }
                    </div>
                </div>
            </div>
        );
    }
}
