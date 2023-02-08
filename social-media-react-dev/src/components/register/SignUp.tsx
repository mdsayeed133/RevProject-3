import React, { useState } from 'react'
import Navbar from '../navbar/Navbar';
import '../register/SignUp.css'
import { FaUserCircle } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp: React.FC<any> = (props: any) => {
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

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
            case "password":
                setPassword(input.target.value);
                console.log(password);
                break;
            default: break;
        }
    }

    
    // create a submit async function
    const signupSubmit = async () => {
       // console.log("You pushed it!");
        console.log("email: "+email+"\npassword: "+password+"\nfirstName: "+firstName+"\nlastName: "+lastName);
        const response = await axios.post("http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/auth/register", { email, password, firstName, lastName });
        if (response.status === 201) {
            console.log(response);
            props.changeUser(response.data);
            props.changeStatus(true);
            setTimeout(()=>{navigate("/")},3000);
        }
        else if(response.status === 406) //blocked on profanity filter
        {
            console.log(response);
            
        }
        else if(response.status === 400) //blocked because of client error
        {
            console.log(response);
            
        }
        else
        {
            console.log(response);
            
        }
    };
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
                                <p>Hello, <em>{email}</em></p>
                            </div>
                            <div className="holder">

                                <input className="input-box" type="text" name="email" placeholder="email" onChange={gatherInput} />
                                <input className="input-box" type="password" name="password" placeholder="password" onChange={gatherInput} />

                            </div>
                        </div>
                        {/* <input className="input-box" type="text" name="email" placeholder="email" onChange={gatherInput} id="emailInput" /> */}
                    </div>
                    <button className="signup-button" onClick={signupSubmit}>Sign Up</button>
                </div>

            </div>
        </>

    )
}

export default SignUp