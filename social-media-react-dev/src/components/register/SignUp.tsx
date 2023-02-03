import React, { useState } from 'react'
import Navbar from '../navbar/Navbar';
import '../register/SignUp.css'
import { FaUserCircle } from "react-icons/fa"

const SignUp: React.FC<any> = (props: any) => {
    const [username, setUsername] = useState("");
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const gatherInput = (input: any) => {
        switch (input.target.name) {
            case "firstName":
                setFirst(input.target.value);
                console.log(firstName);
                break;
            case "lastName":
                setLast(input.target.value);
                console.log(lastName);
                break;
            case "email":
                setEmail(input.target.value);
                console.log(email);
                break;
            case "username":
                setUsername(input.target.value);
                console.log(username);
                break;
            case "password":
                setPassword(input.target.value);
                console.log(password);
                break;
            default: break;
        }
    }

    // create a submit async function
    const signupSubmit = async (input: any) => {
        console.log("You pushed it!")
    }
    return (
        <>
            <Navbar />
            <div className="signup-container container">
                <div className="text-container">
                    <h3>Please add your information</h3>
                    {/* firstname, lastname, username, password, address */}
                    <div className="sign-container">
                        <div className="top-row d-flex">
                        <div className="holder">
                            <input className="input-box" type="text" name="firstName" placeholder="first name" onChange={gatherInput} />
                            <input className="input-box" type="text" name="lastName" placeholder="last name" onChange={gatherInput} />
                        </div>
                        <div className="image-holder">
                            <div className="user-image" id="userImage">
                                <FaUserCircle size="5em" />
                            </div>
                            <p>Hello, <em>{username}</em></p>
                        </div>
                        <div className="holder">

                            <input className="input-box" type="text" name="username" placeholder="username" onChange={gatherInput} />
                            <input className="input-box" type="password" name="password" placeholder="password" onChange={gatherInput} />

                        </div>
                        </div>
                        <input className="input-box" type="text" name="email" placeholder="email" onChange={gatherInput} id="emailInput" />
                    </div>
                    <button className="signup-button" onClick={signupSubmit}>Sign Up</button>
                </div>

            </div>
        </>

    )
}

export default SignUp