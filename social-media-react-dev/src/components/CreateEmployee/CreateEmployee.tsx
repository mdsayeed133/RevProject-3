import React from 'react'
import './CreateEmployee.css'
import Navbar from '../navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const CreateEmployee: React.FC<any> = (props: any) => {
  const navigate = useNavigate();

  const employeeprofile = async () => {
    navigate("/employeeprofile")
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!firstName || !lastName || !department || department === "Select a department") {
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) {
      setError("All fields are required");
      return;
    }
    setError("");
    employeeprofile();
  }
  // create employee function
  const createEmployee = async () => {
    console.log("firstName: "+ firstName + "\nlastName: " + lastName + "\nDepartment: " + department);
    const response = await axios.post("http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/employee", {firstName, lastName, department});
    if (response.status === 202){
      console.log(response);
      // test
    }
  }

  return (
    <>
      <Navbar />
      <div className="create-employee-container">
        <div className="text-container">
          {error && <p className="error-message">{error}</p>}
          
          <div className='create_employee'>
            <form onSubmit={handleSubmit}>
              <div className='firstname'>
                <h3>First Name</h3>
                <input type="text" value={firstName}
                  placeholder='First Name'
                  onChange={(e) => setFirstName(e.target.value)} required
                />
              </div>
              <div>
                <h4>Last Name</h4>
                <input type="text" value={lastName} placeholder='Last Name'
                  onChange={(e) => setLastName(e.target.value)} required />
              </div>

              <div>
                <h3>Department</h3>
                
                <select name="department" id="department" onChange={(e) => setDepartment(e.target.value)}>
                  <option value="Select a department">Select a department</option>
                  <option value="Trainer">Trainer</option>
                  <option value="QC">QC</option>
                  <option value="HR">HR</option>
                  <option value="CoE">CoE</option>
                  <option value="Recruiters">Recruiters</option>
                </select>
              </div>
              
              <button type='submit' onClick={createEmployee}>Submit</button>

            </form>

          </div>
        </div>
      </div>

    </>
  )
}

export default CreateEmployee
