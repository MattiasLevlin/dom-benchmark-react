import React, { Component } from 'react';
import '../App.css';

let operationStartTime = null
let operationEndTime = null

class Benchmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedTest: 0,
        };
        // this.addDiv = this.addDiv.bind(this);
    }

    componentDidUpdate() {
        operationEndTime = performance.now()
        console.log('Operation took ' + (operationEndTime - operationStartTime) + ' milliseconds')
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

    render() {
        return (
            <div className="Benchmark">
                <p>div</p>
                <button onClick={() => this.addDiv()}>1 addDiv</button>
                <button onClick={() => this.editOneDiv()}>2 editDiv</button>
                <button onClick={() => this.removeAllDiv()}>5 removeAllDiv</button>
                <div>
                    {this.state.items}
                </div>
            </div>
        );
    }
}

export default Benchmark;
