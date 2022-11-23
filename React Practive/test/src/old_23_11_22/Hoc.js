import React from 'react'

const Cat = withM((props) =>{
    return <h1>Cat {props.name}</h1>
})

function withM(Component) {

    return class extends React.Component{
        constructor(props){
            super(props)
        }

        render(){
            const {name} = this.props;
            return <Component name={name? name.toUpperCase():""} />
        }
    }

}
// const withM = ({Component,props}) =>{
//     return <Component name={props.name? props.name.toUpperCase():''}/>
// }

const Hoc = () => {
  return (
    <div>
        <Cat name="Tom" />
    </div>
  )
}

export default Hoc