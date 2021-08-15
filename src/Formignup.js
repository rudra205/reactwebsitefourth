import React from 'react'
import useForm from './useForm'
import validate from './validationinfo'
import './Form.css'

const Formignup = ({submitForm}) => {

    const {handleChange,values,handleSubmit, errors} = useForm(submitForm,validate);
    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>
                    Get started with us today. create ur account today by filling up the application form.
                </h1>
                <div className="form-inputs">
                    <label htmlFor="Username" className="form-label">Username</label>
                        
                        <input type="text"
                        id='username'
                        name='Username'
                        className='form-input'
                        placeholder='Enter Your userName'
                        value={values.Username}
                        onChange={handleChange}
                        />
                        {errors.Username &&  <p>{errors.Username}</p>}
                    
                </div>

                <div className="form-inputs">
                    <label htmlFor="Username" className="form-label">Email</label>
                        
                        <input type="email"
                        id='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter Your email'
                        value={values.email}
                        onChange={handleChange}/>
                        {errors.email && <p>{errors.email}</p>}
                    
                </div>
                <div className="form-inputs">
                    <label htmlFor="Pasword" className="form-label"> Password</label>
                        
                        <input type="password"
                        id='pasword'
                        name='pasword'
                        className='form-input'
                        placeholder='Enter Your pasword'
                        value={values.pasword}
                        onChange={handleChange}/>
                        {errors.pasword && <p>{errors.pasword}</p>}
                    
                </div>
                <div className="form-inputs">
                    <label htmlFor="Username" className="form-label">Conform your pasword</label>
                        
                        <input type="password"
                        id='pasword2'
                        name='pasword2'
                        className='form-input'
                        placeholder='enter pasword again'
                        value={values.pasword2}
                        onChange={handleChange}/>
                        {errors.pasword2 && <p>{errors.pasword2}</p>}
                    
                </div>
                <button type='submit' className='form-input-btn'>Sign up</button>
                <span>Already have an account ? login <a href="#">here</a></span>
            </form>
            
        </div>
    )
}

export default Formignup
