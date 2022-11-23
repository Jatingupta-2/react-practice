import React from 'react'

const Cat = withHoc((props)=>{
    return (<h1>{props.name}</h1>)
})

function withHoc(Component){
    return class extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
            return <Component name="abc" />
        }
    }
}

const Hoc = () => {
  return (
    <div>
        <Cat />
    </div>
  )
}

export default Hoc