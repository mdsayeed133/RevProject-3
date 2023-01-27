import React from 'react'
import Navbar from '../navbar/Navbar'

const AdvancedSearch = () => {
  return (
    <>
     <Navbar/>
    <div className='advancedSearch_container'>advancedSearch</div>
<div className='choose_container'>
    <h4>Where</h4>
    <div className='where_container'>
    <input type="checkbox" id='where' name='where' value="All" />All
    <input type="checkbox" id='where' name='where' value="Trainers" />Trainers
    <input type="checkbox" id='where' name='where' value="Posts" />Posts
    <input type="checkbox" id='where' name='where' value="Users" />Users
    </div>
<div className='status-container'>
    
    
    </div>    

</div>

</>

  )
}

export default AdvancedSearch