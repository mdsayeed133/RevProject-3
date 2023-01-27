import React from 'react'
import Navbar from '../navbar/Navbar'

const AdvancedSearch = () => {
  return (
    <>
      <Navbar />
      <div className='advancedSearch_container'>advancedSearch</div>
      <div className='choose_container container'>
        <h4>Where</h4>
        <div className='where'>
          <input type="checkbox" id='where' name='where' value="All" />All
    <br />      <input type="checkbox" id='where' name='where' value="Trainers" />Trainers
    <br />       <input type="checkbox" id='where' name='where' value="Posts" />Posts
    <br />      <input type="checkbox" id='where' name='where' value="Users" />Users
        </div>

        <h4>status</h4>
        <div className='status'>
          <input type="checkbox" id='status' name='status' value="All" />All
<br />          <input type="checkbox" id='status' name='status' value="Active" />Active
<br />          <input type="checkbox" id='status' name='status' value="Inactive" />Inactive
        </div>

        <h4>Department</h4>
        <div className='department'>
          <input type="checkbox" id='department' name='department' value="All" />All
  <br />        <input type="checkbox" id='department' name='department' value="Trainer" />Trainer
  <br />        <input type="checkbox" id='department' name='department' value="QC" />QC
  <br />        <input type="checkbox" id='department' name='department' value="HR" />HR
  <br />        <input type="checkbox" id='department' name='department' value="CoE" />CoE
  <br />        <input type="checkbox" id='department' name='department' value="PDP" />PDP
  <br />        <input type="checkbox" id='department' name='department' value="Recruiters" />Recruiters
        

  <h3>Search Terms</h3>
  <div className='searchTerm_container'>
Include: <input type="text"  />    
Exclude: <input type="text" />
</div>

<button className='clearEntry'>Clear Entries</button>
<button className='advancedsearch'>Search</button></div>

      </div>

    </>

  )
}

export default AdvancedSearch