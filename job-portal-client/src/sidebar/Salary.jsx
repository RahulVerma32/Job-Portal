import React from 'react'
import Button from './Button'
import InputField from '../component/InputField'

const Salary = ({handleClick,handleChange}) => {
  return (
    <div>
     <h4 className='text-lg font-medium mb-2'>Salary</h4>
     <div className='mb-2'>
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
     </div>

    <div>
    <label className='sidebar-label-container'>
        <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
        <span className='checkmark'></span>All
        </label>

        <InputField handleChange={handleChange} value={30} title="<30000k" name="test" />
        <InputField handleChange={handleChange} value={50} title="<50000k" name="test" />
        <InputField handleChange={handleChange} value={80} title="<80000k" name="test" />
        <InputField handleChange={handleChange} value={100} title="<100000k" name="test" />
       
    </div>

    </div>
  )
}

export default Salary
