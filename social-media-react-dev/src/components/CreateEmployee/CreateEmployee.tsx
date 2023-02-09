import React from 'react'
import './CreateEmployee.css'
import Navbar from '../navbar/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const CreateEmployee: React.FC<any> = (props: any) => {
  const navigate = useNavigate();
  const employeeprofile = async () => {
    navigate("/employeeprofile/");
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [error, setError] = useState("");
  // get user profile/authId
  const user = props.currentUser;

  const getUserAuthId = async () => {
    try{
      console.log(`Hello, ${user.email}. Your id is ${user.id}`)
      const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/${user.id}/user`)
      if (response.status == 200){

      }
    } catch(error){
      console.error(error)
    }
  }
  // useEffect to get authorId automatically?
  // React.useEffect(()=>{
  //   getUserAuthId();
  //   // setAuthorId();
  // }, [])



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
  // in order to createEmployee, we need employee(firstName,lastName,department) AND user(authorId) =>props?
  const createEmployee = async () => {
    console.log("firstName: "+ firstName + "\nlastName: " + lastName + "\nAuthorId: " + authorId + "\nDepartment: " + department);
    const response = await axios.post("http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/employee", {firstName, lastName, authorId, department});
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
          {/* <h2>Hello, {user.email}</h2> */}
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
                  {/* <option value="Select a department">Select a department</option>
                  <option value="Trainer">Trainer</option>
                  <option value="QC">QC</option>
                  <option value="HR">HR</option>
                  <option value="CoE">CoE</option>
                  <option value="Recruiters">Recruiters</option> */}
                  <option value="0">Select a department</option>
                  <option value="1">Accounting Team</option>
                  <option value="2">Center of Excellence</option>
                  <option value="3">HR Team</option>
                  <option value="4">IT Support</option>
                  <option value="5">Legal Team</option>
                  <option value="6">Management</option>
                  <option value="7">Marketing Team</option>
                  <option value="8">PDP Team</option>
                  <option value="9">QC Team</option>
                  <option value="10">Recruitment Department</option>
                  <option value="11">Sales Department</option>
                  <option value="12">Training Department</option>
                </select>
              </div>
              
              <button type='submit'>Submit</button>

            </form>

          </div>
        </div>
      </div>

    </>
  )
}

export default CreateEmployee
