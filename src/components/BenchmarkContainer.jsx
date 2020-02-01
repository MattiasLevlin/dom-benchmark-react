import React, { Component } from 'react';
import '../App.css';

class BenchmarkContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        /* const renderedOutput2 = this.props.numberOfDivElements.map((element, i) => {
            return(
                <div>
                    <p>asd</p>
                </div>
            )
        }) */

        const renderedOutput = [...Array(this.props.numberOfDivElements)].map((e, i) =>
            <div
                className="benchmark-container"
                key={i}>div #{i}
            </div>
        )

        return (
            <div>
                {renderedOutput}
            </div>
        );
    }
}

export default BenchmarkContainer;
