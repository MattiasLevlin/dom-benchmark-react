import React, { Component } from 'react';
import '../App.css';

let operationStartTime = null
let operationEndTime = null

class BenchmarkContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
      }

    componentDidUpdate() {
        operationEndTime = performance.now()
        console.log('Operation took ' + (operationEndTime - operationStartTime) + ' milliseconds')
    }

    // 1 
    addDiv() {
        for (var i = 0; i < 10000; i ++) {
          this.state.items.push(<div key={i}><p>asd</p></div>)
        }
        operationStartTime = performance.now()
        console.log('TEST 1) ADD 10000 DIVS')
    }

    // 2 
    editOneDiv() {
       // this.state.items.forEach(console.log('asd'))
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
        this.state.items = []
        operationStartTime = performance.now()
        console.log('TEST 5) REMOVE 10000 DIVS')
    }

    render() {
        
        if (this.props.testSelection === 1) {
            this.addDiv()
        } else if (this.props.testSelection === 2) {
            this.editOneDiv()
        } else if (this.props.testSelection === 3) {
            this.editAllDiv()
        } else if (this.props.testSelection === 4) {
            this.removeOneDiv()
        } else if (this.props.testSelection === 5) {
            this.removeAllDiv()
        }
        return (
            <div>
                {this.state.items}
            </div>
        );
    }
}

export default BenchmarkContainer;
