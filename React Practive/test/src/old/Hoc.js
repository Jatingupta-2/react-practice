import React from 'react'



const Cat = withM((props) =>{
    return(<h1>Cat{props.name}</h1>)
})

function withM(Component){
    return class extends React.Component{
        constructor(props){
            super(props);

        }
       render(){
        const {name} = this.props;
        return <Component name={name? name.toUpperCase():''}/>
       }
    }
}

const Hoc = () => {
  return (
    <>
    <Cat name={'abc'}></Cat>
    <div>Hoc</div>
    </>
  )
}

export default Hoc;