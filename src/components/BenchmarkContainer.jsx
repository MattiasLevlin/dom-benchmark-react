import React, { Component } from 'react';
import '../App.css';

class BenchmarkContainer extends Component {
    render() {
        const renderedOutput = [...Array(this.props.numberOfDivElements)].map(() =>
            <div>
                <p>DOM</p>
            </div>
        )

        return (
            <div>
                {renderedOutput}
            </div>
        );
    }
}

export default BenchmarkContainer;
