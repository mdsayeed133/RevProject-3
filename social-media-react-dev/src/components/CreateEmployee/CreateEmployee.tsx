import React from 'react'
import './CreateEmployee.css'
import Navbar from '../navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const CreateEmployee = () => {



   const navigate = useNavigate();

   const employeeprofile = async()=>{
    navigate("/employeeprofile")}

    const [firstName, setfirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [department, set]



const validateForm = () => {
    if (!firstName || !lastName ||!department) {
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


    return (
        <>
        <Navbar/>
        <div>CreateEmployee</div>
        <div className='createemployee_container'>
            <div className='firstname'>
              <h3>First Name</h3>
              <input type="text" name='lastname' id="firstname" placeholder='Fist Name' />
            </div>
        <div>
            <h4>Last Name</h4>
            <input type="text" name='lastname' id='firstname' placeholder='Last Name'/>
        </div>

        <div>
            <h3>Department</h3>
            <label htmlFor="Department">Select a department:</label>
            <select name="department" id="department">
               <option value="Trainer">Trainer</option>
               <option value="QC">QC</option>
               <option value="HR">HR</option>
               <option value="CoE">CoE</option>
               <option value="Recruiters">Recruiters</option>
            </select>
        </div>

        <button onClick={employeeprofile }>Submit</button>

        </div>
        </>
    )
}

export default CreateEmployee