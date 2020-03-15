import React, { Component } from 'react';
import '../App.css';

class BenchmarkContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
      }

    // 1 
    addDiv() {
        for (var i = 0; i < 10000; i ++) {
          this.state.items.push(<div key={i}><p>asd</p></div>)
        }
    }

    // 2 
    editDiv() {
       // this.state.items.forEach(console.log('asd'))
    }

    // 3 
    removeDiv() {
        this.state.items = []
    }

    render() {
        
        if (this.props.testSelection === 1) {
            this.addDiv()
        } else if (this.props.testSelection === 2) {
            this.editDiv()
        } else if (this.props.testSelection === 3) {
            this.removeDiv()
        }
        return (
            <div>
                {this.state.items}
            </div>
        );
    }
}

export default BenchmarkContainer;
