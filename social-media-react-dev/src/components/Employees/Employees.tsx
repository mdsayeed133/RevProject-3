import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
import EmployeeCard from './EmployeeCard';
import './Employees.css'

const Employees: React.FC<any> = (props: any) => {

    // import navigate
    const navigate = useNavigate();

    const seeProfile = async () => {
        navigate('/employeeprofile')
    }

    // display employees
    // const displayAllEmployees = async () => {
    //     const response = await axios.get("http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/employee");
    //     console.log(response)
    //     // map through data
    // }
    // =======================================

    // fetch data of all employees
    const [employees, setEmployees] = React.useState<any[]>([]);
    React.useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/employee");
            setEmployees(response.data);
            // var storedEmployee = employees.map(())
        }
        fetchData();
    }, []);


    return (
        <>
            <Navbar />
            <div className="Employees-container container">
                {/* <h2>Here is a collection of all employees available for review on RevRater...</h2> */}
                <div className="display-Employees row" id="dispEmployee">
                    {/* this card format will auto generate the Employees */}
                    {/* map here */}
                    {employees.map((employee, index) => (
                        < EmployeeCard key={index} employee={employee} />
                    ))}
                    {/* <EmployeeCard/> */}

                </div>
            </div>
        </>
    )
}

export default Employees