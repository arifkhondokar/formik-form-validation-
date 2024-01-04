import React from 'react'
import './formVali.css'
import { useFormik } from 'formik';
import { validation } from './Validation';

const FormVali = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema : validation,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm()
        }
    })

  return (
    <>
        <div className='formbody'>
            <form className='form_container' method='post' onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label> <br />
                    <input type="text" name='firstName' id='firstName'  onChange={formik.handleChange}
                        value={formik.values.firstName} />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className='error_text'>{formik.errors.firstName}</div>
                        ) : null}
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label> <br />
                    <input type="text" name='lastName' id='lastName'  onChange={formik.handleChange}
                        value={formik.values.lastName}/>
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className='error_text'>{formik.errors.lastName}</div>
                        ) : null}
                </div>

                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input type="text" name='email' id='email'  onChange={formik.handleChange}
                        value={formik.values.email}/>
                    {formik.touched.email && formik.errors.email ? (
                        <div className='error_text'>{formik.errors.email}</div>
                        ) : null}
                </div>

                <div>
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" name='password' id='password'  onChange={formik.handleChange}
                        value={formik.values.password}/>
                    {formik.touched.password && formik.errors.password ? (
                        <div className='error_text'>{formik.errors.password}</div>
                        ) : null}
                </div>

                <button type="submit" id='btn'>Submit</button>
            </form>
        </div>
    
    </>
   
  )
}

export default FormVali