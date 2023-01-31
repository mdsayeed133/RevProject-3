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
              <input type="text" name="firstname" id="firstname" />
            </div>
        <div>
            <h4>Last Name</h4>
        </div>

        </div>
        </>
    )
}

export default CreateEmployee