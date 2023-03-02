import React, { useState } from 'react'

function Step1({stepChange,data,modify}) {

  return (
    <div className='container_form'>
      <div className='form_wrapper'>
        <div className='input_field'>
          <input
            type="text"
            required
            value={data.fName}
            onChange={e => modify({
              ...data,
              fName:e.target.value
            })
          }
          />
          <label>First Name</label>
        </div>
        <div className='input_field'>
          <input
            type="text"
            required
            value={data.lName}
            onChange={e => modify({
              ...data,
              lName: e.target.value
            })
          }
          />
          <label>Last Name</label>
        </div>
        <div className='input_field'>
          <input
            type="email"
            required
            value={data.email}
            onChange={e => modify({
              ...data,
              email: e.target.value
            })
          }
          />
          <label>Email</label>
        </div>   
        <div className='input_field'>
          <input
            required
            type="number"
            value={data.age}
            onChange={e => modify({
              ...data,
              age: e.target.value
            })
          }
          />
          <label>Age</label>
        </div> 
      </div>
      <div className='button_field'>
        <button className="hidden"></button>
        <button onClick={(e) => {
          stepChange(1)
        }}>
          Next
        </button>
      </div>
    </div>
  )
}

export default React.memo(Step1)