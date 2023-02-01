import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
import './Employees.css'

const Employees = () => {

    // import navigate
    const navigate = useNavigate();

    const seeProfile = async () => {
        navigate('/employeeprofile')
    }

    // for(var counter:number = 1; counter<10; counter++){
    //     console.log("for loop executed : " + counter)
    // }
    // const dispEmp = async()=>{
    //     for(let counter:number = 0; counter<20; counter++){
    //         let empDisplay:HTMLElement = document.getElementById("empDisplay") as HTMLElement;
    //         empDisplay.innerText ="Hello";
    //     }
    // }
    return (
        <>
            <Navbar />
            <div className="Employees-container container">
                <h1>Display employees</h1>
                <p><em>auto populate...</em></p>
                <div className="display-Employees row" id="dispEmployee">
                    {/* this card format will auto generate the Employees */}
                    <div className="col-md-3 employee-columns">
                        <div className="card employee-card">
                            <div className="employee-img">
                                <FaUserCircle size="5em" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Employee</h5>
                                <p className="card-text">Department: <em>QC</em></p>
                                <button className="btn btn-primary" onClick={seeProfile}>See Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Employees