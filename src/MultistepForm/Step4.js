import React from 'react'
import gif from "../assets/ok.gif"

function Step4({stepChange,data,modify,submitForm}) {
  return (
    <div className='container_form'>
      <div className='form_wrapper'> 
        <div className='check'>
            <input type="checkbox"
              value={data.term_condition}
              checked= {data.term_condition}
              onChange={e => modify({
                ...data,
                term_condition:e.target.checked
              })
            }
            />
          <label>Terms and conditions</label>
        </div>
        <div className='check'>
            <input type="checkbox"
              value={data.confirm}
              checked= {data.confirm}
              onChange={e => {modify({
                ...data,
                confirm:e.target.checked
              })}
            }
            />
          <label>Please confirm the Required info is correct </label>
        </div> 
        <div className='gif'>
          <img width="50%" height="50%" src={gif} />
        </div>
      </div>
      <div className='button_field'>
        <button onClick={(e) => (stepChange(2))}>
          Previos
        </button>
        <button onClick={(e) => (submitForm("Request is sending"))}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default Step4