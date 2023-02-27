import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form'//библиотека для формы
import { ErrorMessage } from '@hookform/error-message';//библиотека сообщающая об ошибке в форме
// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import {Title} from './Title'
import './style.scss';


export const Form =(name,mobile) => {

    const { register, handleSubmit, formState: { errors } } = useForm()//состояние формы регистрации хука


    //состояние для анимации

    const onSubmit = (data) => {console.log(data)};
     // console.log(entered data('username','password'...));

    const [value, setValue] = useState(() => localStorage.getItem(name) || '')
    //нужно что бы все поля сохранились в localstorage
    
        useEffect(() => {
             localStorage.setItem("name",JSON.stringify(name))
            }, [name]);

            
    
        return (
                <section>
                    <div className="register">
                        <div className="col-1">
                           
                            <Title/>
                            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)} >
                                <input type="text" {...register("username")} placeholder='username' required />
                                {/* зарегистрируйте свой ввод в hook, вызвав функцию "register" */}
                                <ErrorMessage errors={errors} name="singleErrorInput" />
      
                                <ErrorMessage
                                  errors={errors}
                                  name="singleErrorInput"
                                  render={({ message }) => <p>{message}</p>}
                                />
                                <input type="text" {...register("password")} placeholder='password' required  />

                                <input type="text" {...register("confirmpwd")} placeholder='confirm password'  />
                                <input type="text" {...register("mobile", { required : true, maxLength: 12 ,  pattern: {
                                    value:
                                    /[\s(]*\d{3}[)\s]*/,
                                    // регулярное выражение при попытке ввода 8 и 7 цифра меняется на +7, так же что бы номер автоматически прописывался а вскобках и с разделением знаком " - "
                                    message: "Email must be valid",
                                }, })} placeholder='mobile number' pattern="-?\d{1,3}\.\d+"/>

                                {errors.mobile?.type === "required" && "Mobile Number is required"}
                                {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                               
                                <input type="submit" className='btn' onClick={() => console.log(`${name}: ${localStorage.getItem(name)}, ${localStorage.getItem(mobile)}`)}>Sign In</button>
                            </form>
                            
                        </div>
                    </div>
                </section>
            )         
        }
