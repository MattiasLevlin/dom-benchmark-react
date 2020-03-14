import React, { Component } from 'react';
import BenchmarkContainer from './BenchmarkContainer.jsx';

class Benchmark extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfElements: 0,
            selectedTest: 0,
        }
    }

    // Test 1, 2: Empty <div> elements

    addEmptyDivs = () => {
        this.setState({
            numberOfElements: 10000,
            selectedTest: 1,
        })
    }

    removeEmptyDivs = () => {
        this.setState({
            numberOfElements: 0,
            selectedTest: 1,
        })
    }

    // Test 3, 4: Nonempty <div> elements

    addDivs = () => {
        this.setState({
            numberOfElements: 10000,
            selectedTest: 2,
        })   
    }

    removeDivs = () => {
        this.setState({
            numberOfElements: 0,
            selectedTest: 2,
        })
    }

    // Test 5, 6: empty <svg> elements

    addEmptySvgs = () => {
        this.setState({
            numberOfElements: 10000,
            selectedTest: 3,
        })
    }

    removeEmptySvgs = () => {
        this.setState({
            numberOfElements: 0,
            selectedTest: 3,
        })
    }

    // Test 7, 8: nonempty <svg> elements

    addSvgs = () => {
        this.setState({
            numberOfElements: 10000,
            selectedTest: 4,
        })
    }

    removeSvgs = () => {
        this.setState({
            numberOfElements: 0,
            selectedTest: 4,
        })
    }

    render() {
        return (
            <div className="Benchmark">
                <button onClick={this.addEmptyDivs}>1 addEmptyDivs</button>
                <button onClick={this.removeEmptyDivs}>2 removeEmptyDivs</button>
                <button onClick={this.addDivs}>3 addDivs</button>
                <button onClick={this.removeDivs}>4 removeDivs</button>
                <button onClick={this.addEmptySvgs}>5 addEmptySvgs</button>
                <button onClick={this.removeEmptySvgs}>6 removeEmptySvgs</button>
                <button onClick={this.addSvgs}>7 addSvgs</button>
                <button onClick={this.removeSvgs}>8 removeSvgs</button>

                <div>
                    <BenchmarkContainer
                        testSelection={this.state.selectedTest}
                        numberOfElements={this.state.numberOfElements}
                    />
                </div>
            </div>
        );
    }
}

export default Benchmark;
