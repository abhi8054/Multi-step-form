import React from 'react'

function Step2({stepChange,data,modify}) {
  return (
    <div className='container_form'>
      <div className='form_wrapper'>
        <div className='input_field'>
            <input type="text"
              required
            value={data.address}
            onChange={e => modify({
              ...data,
              address:e.target.value
              })
            }    
            />
            <label>Address</label>
        </div>
        <div className='input_field'>
            <input
              type="text"
              required
              value={data.pincode}
              onChange={e => modify({
                ...data,
                pincode:e.target.value
              })
            }
            />
            <label>Pincode</label>
        </div>
        <div className='input_field'>
            <input type="text"
              required
              value={data.city}
              onChange={e => modify({
                ...data,
                city:e.target.value
              })
            }
            />
            <label>City</label>
        </div>   
        <div className='input_field'>
            <input type="text"
              required
              value={data.state}
              onChange={e => modify({
                ...data,
                state:e.target.value
              })
            }
            />
            <label>State</label>
        </div> 
      </div>
      <div className='button_field'>
        <button onClick={(e) => (stepChange(0))}>
          Previos
        </button>
        <button onClick={(e) => (stepChange(2))}>
          Next
        </button>
      </div>
  </div>
  )
}

export default Step2