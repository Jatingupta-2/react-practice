import React from 'react';
import Context from './old/context';
import Api from './old/api';
import Child from './old/child';
import CustomHook from './old/customHook';
import Hoc from './old/Hoc';
import Reducer from './old/reducer';
// import Memo from './memo';
// import Redux from './Redux';

class Parent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 10
        }

    }


    render() {

        const { count } = this.state

         const change = () =>{
            this.setState({count:count+1})
        }

        return (
            <div>
                {/* <h1>{count}</h1>
                <button onClick={change}>Click</button> */}
                {/* <Child></Child> */}
                {/* <Reducer /> */}
                {/* <CustomHook /> */}
                {/* <Api /> */}
                {/* <Hoc /> */}
                {/* <Context /> */}
                {/* <Memo /> */}
                {/* <Redux /> */}
            </div>
        );
    }
}

export default Parent;