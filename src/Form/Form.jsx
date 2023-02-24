import React from 'react';
import { useForm } from 'react-hook-form';
// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import './style.scss';


export function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(entered data('username','password'...));
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' required />
                    <input type="text" {...register("password")} placeholder='password' required />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 11 })} placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn' onSubmit>Sign In</button>
                </form>

            </div>
        </div>
    </section>
  )
}
