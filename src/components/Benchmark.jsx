import React, { Component } from 'react';
import '../App.css';
import BenchmarkContainer from './BenchmarkContainer.jsx';


let operationStartTime = null
let operationEndTime = null

class Benchmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedTest: 0,
            ingredients: [],
            
        };
        // this.addDiv = this.addDiv.bind(this);
    }

    componentDidUpdate() {
        operationEndTime = performance.now()
        console.log('Operation took ' + (operationEndTime - operationStartTime) + ' milliseconds')
    }

    addDivMap() {
        this.setState({
            ingredients: 1000
        })
        this.forceUpdate()
    }

    // 1 
    addDiv() {
        for (var i = 0; i < 10000; i ++) {
        this.state.items.push(
            <div key={i}>
                <p>
                    asd
                </p>
            </div>
            )
        }
        operationStartTime = performance.now()
        console.log('TEST 1) ADD 10000 DIVS')
        this.forceUpdate()
    }

    // 2 
    editOneDiv() {
     // ...
    }

    // 3
    editAllDiv() {
        // ...
    }

    // 4
    removeOneDiv() {
        // ...
    }

    // 5
    removeAllDiv() {
        this.setState({
            items: []
        })
        operationStartTime = performance.now()
        console.log('TEST 5) REMOVE 10000 DIVS')
    }


    // 1  BENCHMARK CONTAINER add all
    addDivsBenchmarkContainer = () => {
        this.setState({
            selectedTest: 1,
        })
        operationStartTime = performance.now()
    }

    // 5 BENCHMARK CONTAINER remove all
    removeDivBenchmarkCOntainer = () => {
        this.setState({
            selectedTest: 3,
        })
        operationStartTime = performance.now()
    }

    render() {
        return (
            <div className="Benchmark">
                <p>In component</p>
                <button onClick={() => this.addDivMap()}>0 MAP</button>
                <button onClick={() => this.addDiv()}>1 addDiv</button>
                <button onClick={() => this.editOneDiv()}>2 editDiv</button>
                <button onClick={() => this.removeAllDiv()}>5 removeAllDiv</button>

                <p>BenchmarkContainer</p>
                <button onClick={this.addDivsBenchmarkContainer}>1 add BC</button>
                <button onClick={this.removeDivBenchmarkCOntainer}>5 remove BC</button>

                <div>
                    {this.state.items}
                </div>
                <div>{this.state.ingredients.map((abc, i) =>
                    <p key={abc}>Div {abc}</p>
                )}
                </div>
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
