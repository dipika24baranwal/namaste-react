import React from "react"

class UserClass extends React.Component {
    constructor(props ){
        super(props)
        this.state={
            count: 0,
            count2:2,
            userInfo: {
                name: "Dummy",
                Location: "Default"
            }
        }
        //console.log("Child Constructor")
    }
    async componentDidMount() {
        console.log("Child Did mount")
        const userData= await fetch("https://api.github.com/users/dipika24baranwal");
        const jsonData= await userData.json();
        console.log("user data::", jsonData);
        this.setState({
            userInfo: jsonData
        })
    }

    componentDidUpdate() {
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render() {
        //const {name,location}= this.props
        const {login,type,avatar_url}=this.state.userInfo
        const{count, count2}=this.state
        //console.log("Child Render")
        return (
            <div className="user-card">
                <img src={avatar_url} />
            <h2>Name : {login}</h2>
            <h3>Count : {count}</h3>
            {/* <button onClick={()=>{
                this.setState({
                    count: this.state.count + 1
                })
            }}>Count Increase</button> */}
            <h3>Location : {type}</h3>
            <h3>Contact : abc@gmail.com</h3>
        </div>
        )
    }
}

export default UserClass;