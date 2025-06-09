import React from "react"

class UserClass extends React.Component {
    constructor(props ){
        super(props)
        this.state={
            count: 0,
            count2:2
        }
        console.log("Child Constructor")
    }
    ComponentDidMount() {
        console.log("Child Did mount")
    }
    render() {
        const {name,location}= this.props
        const{count, count2}=this.state
        console.log("Child Render")
        return (
            <div className="user-card">
            <h2>Name : {name}</h2>
            <h3>Count : {count}</h3>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count + 1
                })
            }}>Count Increase</button>
            <h3>Location : {location}</h3>
            <h3>Contact : abc@gmail.com</h3>
        </div>
        )
    }
}

export default UserClass;