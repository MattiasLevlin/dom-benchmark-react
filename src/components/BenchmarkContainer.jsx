import React, { Component } from 'react';
import '../App.css';

class BenchmarkContainer extends Component {
    render() {
        let renderedDomOutput = null
        console.log(this.props.numberOfElements)
        if (this.props.testSelection === 1) {
            renderedDomOutput = [...Array(this.props.numberOfElements)].map(() =>
                <div/>
            )
        } else if (this.props.testSelection === 2) {
            renderedDomOutput = [...Array(this.props.numberOfElements)].map(() =>
                <div>
                    <p>div</p>
                </div>
            )
        } else if (this.props.testSelection === 3) {
            renderedDomOutput = [...Array(this.props.numberOfElements)].map(() =>
                <svg/>
            )
        } else if (this.props.testSelection === 4) {
            renderedDomOutput = [...Array(this.props.numberOfElements)].map(() =>
                <svg>
                    <text>svg</text>
                </svg>
            )
        }
        return (
            <div>
                {renderedDomOutput}
            </div>
        );
    }
}

export default BenchmarkContainer;
