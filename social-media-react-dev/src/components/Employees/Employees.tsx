import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
import EmployeeCard from './EmployeeCard';
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
                <h2>Here is a collection of all employees available for review on RevRater...</h2>
                <div className="display-Employees row" id="dispEmployee">
                    {/* this card format will auto generate the Employees */}
                    <EmployeeCard/>
                </div>
            </div>
        </>
    )
}

export default Employees