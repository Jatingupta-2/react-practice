import React from "react";
import Context from "./old_23_11_22/Context";
import CustomHooks from "./old_23_11_22/CustomHooks";
import Debounce from "./old_23_11_22/Debounce";
import Hoc from "./old_23_11_22/Hoc";

class Child1 extends React.PureComponent{

    componentDidUpdate(){
        console.log("child Updated")
    }

    render(){
        return (<h1>Child</h1>)
    }
}

class Parent2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 10,
            display:true
        }
    }

    componentDidMount(){
        console.log("componentDidMount called")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate called")
    }

    render() {
        const { count } = this.state;

        const click = () =>{
            console.log(this.state)
            this.setState({...this.state,count:count+1})
        }

        return (<>
        {/* <h1>{count}</h1> */}
        {/* <Child1 /> */}
        {/* <button onClick={click}>Click me</button> */}
        {/* <Context /> */}
        {/* <Debounce /> */}
        {/* <CustomHooks /> */}
        <Hoc />
        </>);
    }
}


export default Parent2;