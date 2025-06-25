import {useState, useEffect} from "react"

const User =(props)=> {
    const [count] = useState(0);
    const [count1] = useState(1);
    useEffect(()=>{
        console.log("UseEffect call");

        return ()=> {
            console.log("useEffect return")
        }
    })

    console.log("Render")
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