import axios from 'axios'
import React from 'react'
import EmployeeCard from '../Employees/EmployeeCard'
import Navbar from '../navbar/Navbar'
import './advancedSearch.css'


const AdvancedSearch: React.FC<any> = (props: any) => {

  // employee props
  const [employees, setEmployees] = React.useState<any[]>([]);

  // map function
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
      <div className="advanced-search-container container">
        <div className="display-Employees row" id="dispEmployee">
          {/* this card format will auto generate the Employees */}
          {/* map here */}
          {/* {employees.map((employee, index) => (
                        < EmployeeCard key={index} employee={employee} />
                    ))} */}
          {/* <EmployeeCard/> */}
        </div>
        <section className="advanced-section-box d-flex justify-content-evenly">
          <div className="select-dropbox" id="personnel-drop">
            <select name="personnel" id="personnel">
              <option value="0">Who are you searching for?</option>
              <option value="1">Employee</option>
            </select>
          </div>
          <div className="select-dropbox" id="department-drop">
            <select name="department" id="department">
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
            <select name="tags" id="advancedtags">
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
      </div>
      <hr />
      <div className='choose_container'>
        <h4>Where</h4>
        <div className="where">
          <input type="checkbox" id='where' name='where' value="All" />All
          <br /><input type="checkbox" id='where' name='where' value="Trainers" />Trainers
          <br /><input type="checkbox" id='where' name='where' value="Users" />Users
        </div>
        {/* 
        <h4>status</h4>
        <div className='status'>
          <input type="checkbox" id='status' name='status' value="All" />All
          <br />          <input type="checkbox" id='status' name='status' value="Active" />Active
          <br />          <input type="checkbox" id='status' name='status' value="Inactive" />Inactive
        </div> */}

        <h4>Department</h4>
        <div className='department'>
          <input type="checkbox" id='department' name='department' value="All" />All
          <br />        <input type="checkbox" id='department' name='department' value="Trainer" />Trainer
          <br />        <input type="checkbox" id='department' name='department' value="QC" />QC
          <br />        <input type="checkbox" id='department' name='department' value="HR" />HR
          <br />        <input type="checkbox" id='department' name='department' value="CoE" />CoE
          <br />        <input type="checkbox" id='department' name='department' value="PDP" />PDP
          <br />        <input type="checkbox" id='department' name='department' value="Recruiters" />Recruiters

          <h4>Tags</h4>


          <h3>Search Terms</h3>
          <div className='searchTerm_container'>
            Include: <input type="text" />
            Exclude: <input type="text" />
          </div>

          <button className='clearEntry'>Clear Entries</button>
          <button className='advancedsearch'>Search</button></div>

      </div>

    </>

  )
}

export default AdvancedSearch