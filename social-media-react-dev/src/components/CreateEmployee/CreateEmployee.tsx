import React from 'react'
import './CreateEmployee.css'
import Navbar from '../navbar/Navbar'

const CreateEmployee = () => {
    return (
        <>
        <Navbar/>
        <div>CreateEmployee</div>
        <div className='createemployee_container'>
            <div className='firstname'>
              <h3>First Name</h3>
              <input type="text" name="firstname" id="firstname" placeholder='Fist Name' />
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

        </div>
        </>
    )
}

export default CreateEmployee