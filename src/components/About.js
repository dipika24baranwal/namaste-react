import User from "./User";
import UserClass from "./UserClass"
import React from "react"
import UserContext from "../utils/UserContext"



class About extends React.Component {

    constructor(props) {
        super(props);
        console.log("Parent Constructor")
    }

    componentDidMount() {
        console.log("Parent Did mount")
    }
    render() {
        console.log("Parent Render")
        return (
        <div>
            <h1>About Us</h1>
            <h2>This is About us page.</h2>
            <div>
                <UserContext.Consumer>
                {({loggedinUserName}) =>(<h1 className="bold text-xl">{loggedinUserName}</h1> )}
            </UserContext.Consumer>
            </div>
                <UserClass name={"Dipika Class"} location={"Bangalore Class"}/>
                {/* <User name="Dipika Functional Component"/> */}
            </div>
    )
    }
}

/*const About =() => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is About us page.</h2>
                <UserClass name={"Dipika Class"} location={"Bangalore Class"}/>
            </div>
    )
}*/

export default About;