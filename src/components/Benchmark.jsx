import React, { Component } from 'react';
import '../App.css';


let operationStartTime = null
let operationEndTime = null

class Benchmark extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            selectedTest: 0,
            divElementsForLoop: [],
            divElementsMap: 0,
            results: [],
        };
    }

    componentDidUpdate() {
        operationEndTime = performance.now()
        console.log('Operation took ' + (operationEndTime - operationStartTime) + ' milliseconds')
    }

    // A) DATA STRUCTURE: FOR LOOP

    // 1 
    addDiv() {
        console.log('A) FOR LOOP, TEST 1: ADD 10000 DIVS')
        operationStartTime = performance.now()
        let temporaryArray = []
        for (var i = 0; i < 10000; i ++) {
        temporaryArray.push(
            <div
                key={i}
            >
                <p>
                    Div {i}
                </p>
            </div>
            )
        }
        this.setState({
            divElementsForLoop: temporaryArray
        })
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
        console.log('A) FOR LOOP, TEST 4: REMOVE ONE DIV')
        operationStartTime = performance.now()
        let newArray = this.state.divElementsForLoop.filter(x => x.key !== this.state.divElementsForLoop.length-1);
        this.setState({
            divElementsForLoop: newArray
        })
    }

    // 5
    removeAllDiv() {
        console.log('A) FOR LOOP, TEST 5: REMOVE ALL')
        this.setState({
            divElementsForLoop: []
        })
        operationStartTime = performance.now()
    }

    // B) DATA STRUCTURE: ARRAY MAP

    // 1
    addMap() {
        console.log('B) ARRAY MAP, TEST 1: ADD 10000 DIVS')
        operationStartTime = performance.now()
        this.setState({
            divElementsMap: 1000
        })
    }

    // 2
    editOneMap() {
        // console.log('B) ARRAY MAP, TEST 1: ADD 10000 DIVS')
        operationStartTime = performance.now()
        this.setState({
            divElementsMap: 1000
        })
    }

    // 3
    editAllMap() {
        // console.log('B) ARRAY MAP, TEST 1: ADD 10000 DIVS')
        operationStartTime = performance.now()
        this.setState({
            divElementsMap: 1000
        })
    }

    // 4
    removeOneMap() {
        operationStartTime = performance.now()
        let asd = this.state.divElementsMap
        this.setState({
            divElementsMap: asd - 1
        })
    }

    // 5
    removeAllMap() {
        // console.log('B) ARRAY MAP, TEST 5: REMOVE ALL')
        operationStartTime = performance.now()
        this.setState({
            divElementsMap: 0
        })
    }

    render() {
        return (
            <div className="Benchmark">
                <p>A) For loop</p>
                <button onClick={() => this.addDiv()}>1 Add</button>
                <button onClick={() => this.editOneDiv()}>2 Edit One</button>
                <button onClick={() => this.editAllDiv()}>3 Edit All</button>
                <button onClick={() => this.removeOneDiv()}>4 Remove One</button>
                <button onClick={() => this.removeAllDiv()}>5 Remove all</button>

                <p>B) Array map</p>
                <button onClick={() => this.addMap()}>1 Add</button>
                <button onClick={() => this.editOneMap()}>2 Edit one</button>
                <button onClick={() => this.editAllMap()}>3 Edit all</button>
                <button onClick={() => this.removeOneMap()}>4 Remove one</button>
                <button onClick={() => this.removeAllMap()}>5 Remove all</button>

                <div>
                    {this.state.divElementsForLoop}
                </div>
                
                <div
                    id="divElementsMap">
                    {
                        [...Array(this.state.divElementsMap)].map(
                            (e, i) =>
                                <div
                                    id={i}
                                    key={i}
                                    ref={this.myRef}
                                >
                                    <p>Div {i}
                                    </p>
                                </div>
                        )
                    }

                </div>
            </div>
        );
    }
}

export default Benchmark;
