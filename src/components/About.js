//import User from "./User";
import UserClass from "./UserClass"
import React from "react"


class About extends React.Component {

    constructor(props) {
        super(props);
        console.log("Parent Constructor")
    }

    ComponentDidMount() {
        console.log("Parent Did mount")
    }
    render() {
        console.log("Parent Render")
        return (
        <div>
            <h1>About Us</h1>
            <h2>This is About us page.</h2>
                <UserClass name={"Dipika Class"} location={"Bangalore Class"}/>
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