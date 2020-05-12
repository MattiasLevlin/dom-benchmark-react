import React, { Component } from 'react';

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
            dogsz: 1,
            randomText: 'asd'
        };
    }

    componentDidUpdate() {
        operationEndTime = performance.now()
        console.log('Operation took ' + (operationEndTime - operationStartTime) + ' milliseconds')
    }

    // B) DATA STRUCTURE: ARRAY MAP

    // 1
    addMap() {
        operationStartTime = performance.now()
        this.setState({
            divElementsMap: 1000
        })
    }

    // 2
    editOneMap() {
        operationStartTime = performance.now()
        this.myRef.current.textContent = Math.random()
        this.setState({
            randomText: Math.random()
        })
    }

    // 3
    editAllMap() {
        operationStartTime = performance.now()
        this.setState({
            dogsz: Math.random()
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
        operationStartTime = performance.now()
        this.setState({
            divElementsMap: 0
        })
    }

    dogs(i) {
        // console.log(i)
        // console.log(this.state.dogsz)
        return this.state.dogsz * i
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
                                    <p>Div {this.dogs(i)}
                                    </p>
                                </div>
                        )
                    }
                    <p>{ this.state.randomText }</p>
                </div>
            </div>
        );
    }
}

    // A) DATA STRUCTURE: FOR LOOP

    // 1 

    /*
    addDiv() {
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
        operationStartTime = performance.now()
        let newArray = this.state.divElementsForLoop;
        newArray[0] = Math.random()
        this.setState({
            divElementsForLoop: newArray
        })
    }

    // 3
    editAllDiv() {
        operationStartTime = performance.now()
        let editTemporaryArray = []
        for (var i = 0; i < this.state.divElementsForLoop.length; i ++) {
        editTemporaryArray.push(
            <div
                key={i}
            >
                <p>
                    DivEdit { Math.random() }
                </p>
            </div>
            )
        }
        this.setState({
            divElementsForLoop: editTemporaryArray
        })
    }

    // 4
    removeOneDiv() {
        operationStartTime = performance.now()
        let newArray = this.state.divElementsForLoop.filter(x => x.key !== this.state.divElementsForLoop.length-1);
        this.setState({
            divElementsForLoop: newArray
        })
    }

    // 5
    removeAllDiv() {
        this.setState({
            divElementsForLoop: []
        })
        operationStartTime = performance.now()
    } */

export default Benchmark;
