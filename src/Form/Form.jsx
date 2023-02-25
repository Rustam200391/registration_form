import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'
import { useForm } from 'react-hook-form';
// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import './style.scss';


export const Form =(username,mobile) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [show,setShow] = useState(false)

    const onSubmit = (data) => {console.log(data)};
     // console.log(entered data('username','password'...));

    const [value, setValue] = React.useState(() => localStorage.getItem(username,mobile) || '')
    //нужно что бы и mobile сохранился в localstorage
    
        React.useEffect(() => {
             localStorage.setItem(username,mobile, value)
            }, [username,mobile, value])

   
    
        return (
                <section>
                    <div className="register">
                        <div className="col-1">
                            <h2 onClick={() => setShow(!show)}>Sign In</h2>
                            {show ?'': 'enjoy the service'}
                            
                            <CSSTransition 
                            in={show} 
                            timeout={3000}
                            classNames='alert'
                            unmountOnExit
                            >
                            <h3>Registration process after filling out the form...</h3>
                            </CSSTransition>

                            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)} onChange={e => setValue(e.target.value)}>
                                <input type="text" {...register("username")} placeholder='username' required />
                                {/* зарегистрируйте свой ввод в hook, вызвав функцию "register" */}
                                <input type="text" {...register("password")} placeholder='password' required  />

                                <input type="text" {...register("confirmpwd")} placeholder='confirm password'  />
                                <input type="text" {...register("mobile", { required : true, maxLength: 11 ,  pattern: {
                                    value:
                                    /^(\+7)[\s(]*\d{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                                    // регулярное выражение при попытке ввода 8 и 7 цифра меняется на +7, так же что бы номер автоматически прописывался а вскобках и с разделением знаком " - "
                                    message: "Email must be valid",
                                }, })} placeholder='mobile number' />

                                {errors.mobile?.type === "required" && "Mobile Number is required"}
                                {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                                <CSSTransition 
                                    in={show} 
                                    timeout={3000}
                                    classNames='alert'
                                    unmountOnExit
                                    >
                                <button className='btn' onSubmit={onSubmit} onClick={() => console.log(`${username}: ${localStorage.getItem(username)}, ${localStorage.getItem(mobile)}`)}>Sign In</button>
                                </CSSTransition>
                            </form>
                            
                        </div>
                    </div>
                </section>
            )         
        }
