import React, { Component } from 'react';
import BenchmarkContainer from './BenchmarkContainer.jsx';

class Benchmark extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTest: 0,
        }
    }

    addDivs = () => {
        this.setState({
            selectedTest: 1,
        })   
    }

    editDivs = () => {
        this.setState({
            selectedTest: 2,
        })
    }

    removeDivs = () => {
        this.setState({
            selectedTest: 3,
        })
    }

    render() {
        return (
            <div className="Benchmark">
                <p>div</p>
                <button onClick={this.addDivs}>1 addDivs</button>
                <button onClick={this.editDivs}>2 editDivs</button>
                <button onClick={this.removeDivs}>3 removeDivs</button>
                <div>
                    <BenchmarkContainer
                        testSelection={this.state.selectedTest}
                    />
                </div>
            </div>
        );
    }
}

export default Benchmark;
