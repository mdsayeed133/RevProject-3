import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const EmployeeCard = () => {

    const navigate = useNavigate();

    const seeProfile = async () => {
        navigate('/employeeprofile')
    }
    return (
        <>
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
        </>
    )
}

export default EmployeeCard