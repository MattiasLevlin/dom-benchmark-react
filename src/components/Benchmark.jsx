import React, { Component } from 'react';
import BenchmarkContainer from './BenchmarkContainer.jsx';

class Benchmark extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfDivElements: 0,
        }
    }

    add1000DivElementsToTheDom = () => {
        this.setState({
            numberOfDivElements: 10000
        })
    }

    delete1000DivElementsFromTheDom = () => {
        this.setState({
            numberOfDivElements: 0
        })
    }

    render() {
        return (
            <div className="Benchmark">
                <button
                    onClick={this.add1000DivElementsToTheDom}
                >
                    Add 10,000 div elements
                </button>
                <button
                    onClick={this.delete1000DivElementsFromTheDom}
                >
                    Remove 10,000 div elements
                </button>
                <BenchmarkContainer
                    numberOfDivElements={this.state.numberOfDivElements}
                />
            </div>
        );
    }
}

export default Benchmark;
