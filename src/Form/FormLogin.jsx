import React, { useState } from 'react'

const FormLogin = () => {
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
        phone: '',
    });
    const [error, setError] =useState({
        email: '',
        password: '',
        phone: '',
    })
    console.log(userLogin);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Chặn submit khi form không hợp lệ
        // Hợp lệ khi (các error bằng rỗng và form nhập liệu)
        for(let key in error) {
            if(error[key] !== '') {
                alert('Dữ liệu không hợp lệ !');
                return; // Dừng hàm submit
            }
        }
        for(let key in userLogin) {
            if(userLogin[key] === '' && key !== 'phone') {
                alert('Dữ liệu không hợp lệ !');
                return;
            }
        }
        // Xử lý submit
        console.log('submit');
    };

    const handleChangeInput = (e) => {
        // state value
        const {name,value} = e.target;
        let attrType = e.target.getAttribute('data-type');
        console.log(attrType);
        // state error
        let messError = '';
        if(value === ''){
            messError = `${name} is required !`;
        } else{
            // Xét lỗi nếu như đã nhập liệu thì xét lỗi regex
            switch(attrType){
                case 'email' :{
                    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if(!regexEmail.test(value)) {
                        messError = `${name} is invalid !`
                    }
                };break;
                case 'phone' :{
                    const regexPhone = /^(0[1-9]{1}[0-9]{8}|(84|0)(9[0-9]|8[1-9]|7[0-9]|6[2-9]|5[0-9]|4[0-9]|3[2-9]|2[0-9]|1[0-9])[0-9]{7})$/;
                    if(!regexPhone.test(value)) {
                        messError = `${name} is invalid (ex: 0909009090)`
                    }
                }; break;
            }
        }
        setError({
            ...error,
            [name]: messError,
        })
        // setState
        setUserLogin({
            ...userLogin,
            [name]: value
        })
    };

    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className='w-50 mx-auto card'>
                <div className="card-header text-center">
                    <h3 className='fw-bold'>User Registration</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input data-type='email' className='form-control' type="" id='email' name='email' placeholder='input email' onChange={handleChangeInput} />
                        {error.email && <p className='text text-danger'>{error.email}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input data-type='phone' className='form-control' type="" id='phone' name='phone' placeholder='input phone' onChange={handleChangeInput} />
                        {error.phone && <p className='text text-danger'>{error.phone}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className='form-control' type="" id='password' name='password' placeholder='input password' onChange={handleChangeInput} />
                        {error.password && <p className='text text-danger'>{error.password}</p>}
                    </div>
                    <div className='text-center'>
                        <button type='submit' className='btn btn-primary mt-2'>Login</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormLogin