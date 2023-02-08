import axios from 'axios';
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { Employee } from '../../interfaces/employee';

    // const [employee, setEmployee] = useState<EmpC[]>([]);

    // try getting employee data
const EmployeeCard = (props: { employee: Employee }) => {
        const navigate = useNavigate();
        const employee = props.employee;
        
        
        const seeProfile = () => {
            const employeeId = employee.id;
            navigate(`/employeeprofile/${employeeId}`);
        }
        
        
        return (
            <div className="col-md-3 employee-columns">
                <div className="card employee-card">
                    <div className="employee-img">
                        <FaUserCircle size="5em" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{`${employee.firstName} ${employee.lastName}`}</h5>
                        <p className="card-text">Department: <em>{employee.department.title}</em></p>
                        <div className="button-row">
                            <button className="btn btn-secondary" onClick={seeProfile}>See Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        ) 
}

export default EmployeeCard