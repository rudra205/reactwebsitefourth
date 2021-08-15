import React ,{useState}from 'react'
import Formignup from './Formignup.js'
import './Form.css'
import FormSuccess from './FormSuccess'

const Form = () => {
    const [isSubmitted,setIsSubmitted] = useState(false)
   
    function submitForm() {
        setIsSubmitted(true);
    };
    return (
        <>
        <div className="form-container">
            <div className="container">
            <span className="close-btn">x</span>
            <div className="spancontent-left">
                <h1 className='text'>React login form</h1>
            </div>
            <div className="login-box">
            {!isSubmitted ? <Formignup submitForm={submitForm}/> : <FormSuccess/>}
            </div>
            </div>
            
        </div>
        
        </>
        
    )
}

export default Form


