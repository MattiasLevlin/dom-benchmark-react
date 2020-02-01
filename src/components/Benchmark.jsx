import React, { Component } from 'react';

class Benchmark extends Component {
    render1000Elements() {
        console.log('Render to DOM')
    }
    render() {
    return (
        <div className="Benchmark">
            <button
                onClick={this.render1000Elements}
            >
                Render 1000 div elements
            </button>
            <button>Render 1 div element</button>
        </div>
    );
    }
}

export default Benchmark;
