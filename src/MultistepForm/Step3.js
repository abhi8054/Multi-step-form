import React from 'react'

function Step3({stepChange,data,modify}) {
  return (
    <div className='container_form'>
      <div className='form_wrapper'>
        <div className='input_field'>
            <input
              type="text"
              required
            value={data.college_name}
            onChange={e => modify({
              ...data,
              college_name:e.target.value
            })
          }
          />
          <label>College Name</label>
        </div>
        <div className='input_field'>
            <input type="text"
              required
              value={data.semester}
              onChange={e => modify({
                ...data,
                semester:e.target.value
              })
            }
            />
            <label>Semester</label>
        </div>
        <div className='input_field'>
            <input type="text"
              required
              value={data.passing_year}
              onChange={e => modify({
                ...data,
                passing_year:e.target.value
                })
              }
              />
              <label>Passing Year</label>
        </div>   
      </div>
      <div className='button_field'>
        <button onClick={(e) => (stepChange(1))}>
          Previos
        </button>
        <button onClick={(e) => (stepChange(3))}>
          Next
        </button>
      </div>
  </div>
  )
}

export default Step3