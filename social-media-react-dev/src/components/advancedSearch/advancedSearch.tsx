import axios from 'axios'
import React, { useState } from 'react'
import EmployeeCard from '../Employees/EmployeeCard'
import Navbar from '../navbar/Navbar'
import './advancedSearch.css'
import{ Employee} from '../../interfaces/employee'


const AdvancedSearch: React.FC<any> = (props: any) => {

  // employee props
//   const [employees, setEmployees] = useState<Employee[]>([]);
//   const [name, setName] = useState<string>("");
//   const [departmentId, setDepartmentId] = useState<number>(1);
//   const [tagId, setTagId] = useState<number>(0);

// const fetchEmployees = async () => {
//   const response = await axios.post(
//     "http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/employee/advance/search",
//     { name, departmentId, tagId,}
//   );
//   setEmployees(response.data);
// };


  return (
    <>
      <Navbar />
      <div className="advanced-search-container container">
      <section className="advanced-searchbar-container">
          <div className="searchbar-input">
              <input type="search" name="searchbox" id="searchbox" placeholder="enter employee name here" className="nav-search" />
          </div>
          <section className="advanced-section-box d-flex justify-content-between">
            <div className="select-dropbox" id="personnel-drop">
              <select name="personnel" id="personnel" > 
                <option value="0">Who are you searching for?</option>
                <option value="1">Employee</option>
              </select>
            </div>
            <div className="select-dropbox" id="department-drop">
              <select name="department" id="department" >
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
            <div className="select-dropbox" id="tags-drop">
              <select name="tags" id="advancedtags" >
                <option value="0">Select a tag</option>
                <option value="1">aggravating</option>
                <option value="2">amusing</option>
                <option value="3">anxious</option>
                <option value="4">bad</option>
                <option value="5">boring</option>
                <option value="6">challenging</option>
                <option value="7">childish</option>
                <option value="8">confusing</option>
                <option value="9">discouraging</option>
                <option value="10">disliked</option>
                <option value="11">engaging</option>
                <option value="12">friendly</option>
                <option value="13">frustrating</option>
                <option value="14">fulfilling</option>
                <option value="15">glhf</option>
                <option value="16">good</option>
                <option value="17">inconsiderate</option>
                <option value="18">infuriating</option>
                <option value="19">musical</option>
                <option value="20">nerd</option>
                <option value="21">offputting</option>
                <option value="22">rage-inducing</option>
                <option value="23">respected</option>
                <option value="24">respectful</option>
                <option value="25">stressful</option>
                <option value="26">understanding</option>
              </select>
            </div>
          </section>
        </section>
        <div className="display-Employees row" id="dispEmployee">
          {/* this card format will auto generate the Employees */}
          {/* map here */}
          {/* {employees.map((employee, index) => (
                        < EmployeeCard key={index} employee={employee} />
                    ))} */}
        </div>
        
      </div>

    </>

  )
}

export default AdvancedSearch