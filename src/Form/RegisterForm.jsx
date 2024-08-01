import React from 'react'
import { useFormik } from 'formik'; // get value
import * as yup from 'yup'; // vadiation

const RegisterForm = () => {
    const frmLogin = useFormik({
        initialValues: {
            username: '',
            email: '',
            gender: '',
            country: 'usa',
            password: '',
        },

        validationSchema: yup.object().shape({
            username: yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
            email: yup.string().required('email is a requied').email('email is invalid !'),
            gender: yup.string().required('Gender is required'),
            country: yup.string().required('Country is required'),
            password: yup.string().required('password is requied').min(6, '6-10 ký tự').max(10, '6-10 ký tự')
        }),

        onSubmit:(values, {resetForm}) => {
            console.log(values);

            // Reset lại form sau khi submit đăng ký
            resetForm();
        },
    });

    return (
        <form className='container' onSubmit={frmLogin.handleSubmit}>
            <div className='w-50 mx-auto card'>
                <div className="card-header text-center">
                    <h3 className='fw-bold'>User Registration</h3>
                </div>
                <div className="card-body">
                    <div className="form-group mt-2">
                        <label htmlFor="username">Username</label>
                        <input data-type='username' className='form-control' type="" id='username' name='username' placeholder='input username' onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} value={frmLogin.values.username}/>
                        {frmLogin.errors.username && <p className='alert alert-danger my-1'>{frmLogin.errors.username}</p>}
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="email">Email</label>
                        <input data-type='email' className='form-control' type="" id='email' name='email' placeholder='input email' onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} value={frmLogin.values.email}/>
                        {frmLogin.errors.email && <p className='alert alert-danger my-1'>{frmLogin.errors.email}</p>}
                    </div>
                    <div className="form-group mt-2">
                        <label className='fw-bold' htmlFor="gender">Gender</label>
                        <input className='form-check-input mx-2' type="radio" id='female' name='gender' placeholder='' value='female' onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} checked={frmLogin.values.gender === 'female'} />
                        <label htmlFor="female" className='ms-2'>Female</label>
                        <input className='form-check-input mx-2' type="radio" id='male' value='male' name='gender' placeholder='' onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} checked={frmLogin.values.gender === 'male'} />
                        <label htmlFor="male" className='ms-2'>Male</label>
                        {frmLogin.errors.gender && frmLogin.touched.gender && <p className='alert alert-danger my-1'>{frmLogin.errors.gender}</p>}
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="country">Country</label>
                        <select className='form-control' name="country" id="" onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} value={frmLogin.values.country}>
                            <option value={"usa"}>USA</option>
                            <option value={"canada"}>Canada</option>
                            <option value={"uk"}>UK</option>
                            <option value={"austraia"}>Austraia</option>
                        </select>
                        {frmLogin.errors.country && frmLogin.touched.country && <p className='alert alert-danger my-1'>{frmLogin.errors.country}</p>}
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="password">Password</label>
                        <input data-type='password' className='form-control' type="password" id='password' name='password' placeholder='input password' onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} value={frmLogin.values.password}/>
                        {frmLogin.errors.password && <p className='alert alert-danger my-1'>{frmLogin.errors.password}</p>}
                    </div>
                    <div className='text-center mt-2'>
                        <button type='submit' className='btn btn-primary mt-2'>Register</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default RegisterForm