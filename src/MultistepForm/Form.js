import React, { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import "./index.css"

function Form() {

  const [step,setStep] = useState(0)
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    age: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    college_name: "",
    semester: "",
    passing_year: "",
    term_condition: false,
    confirm:false,
  })

  const stepChange = (flag) => {
    setStep(flag)
  }

  const submitForm = (str) => {
    console.log(data);
  } 

  return (
    <div className='container'>
      <div className='wrapper'>
        <h1>Multi Step Form </h1>
        <div className='indicatorWrapper'>
          <div className='indicator'>
            <button onClick={e => setStep(0)} className={`flag ${step === 0 && 'ok'}`}>1</button>
            <button onClick={e => setStep(1)} className={`flag ${(step === 1 && step < 2) && 'ok'}`}>2</button>
            <button onClick={e => setStep(2)} className={`flag ${step === 2 && 'ok'}`}>3</button>
            <button onClick={e => setStep(3)} className={`flag ${step === 3 && 'ok'}`} >4</button>
          </div>
        </div>
        <div className='content'>
          {
            step === 0 &&
            <Step1
              stepChange = {stepChange}
              data = {data}
              modify = {setData}
            />
          }
            {
            step === 1 &&
            <Step2
              stepChange = {stepChange}
              data = {data}
              modify = {setData}
            />
          }
            {
            step === 2 &&
            <Step3
              stepChange = {stepChange}
              data = {data}
              modify = {setData}
            />
          }
            {
            step === 3 &&
            <Step4
              stepChange = {stepChange}
              data = {data}
              modify = {setData}
              submitForm = {submitForm}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default Form