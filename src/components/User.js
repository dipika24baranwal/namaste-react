import {useState} from "react"

const User =(props)=> {
    const [count] = useState(0);
    const [count1] = useState(1)
    return (
        <div className="user-card">
            <h2>Name : {props.name}</h2>
            <h3>Count : {count}</h3>
            <h3>Location : Bangalore</h3>
            <h3>Contact : abc@gmail.com</h3>
        </div>
    )
}

export default User;