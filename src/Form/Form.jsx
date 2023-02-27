import React from 'react';
import { useForm } from 'react-hook-form';
import Cleave from 'cleave.js/react';
import { Title } from './Title'
import './style.scss';

export const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        for (const dataKey in data) {
            localStorage.setItem(dataKey, JSON.stringify(data[dataKey]))
        }
    };
    

    return (
        <section>
            <div className="register">
                <div className="col-1">

                    <Title />

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)} >

                        <input type="text" {...register("username", {
                            required: 'Username name is required'
                        })} placeholder='username' />
                        {errors.username?.type === 'required' && <p role="alert">Username name is required</p>}

                        <input type="text" {...register("password", {
                            required: "Password name is required"
                        })} placeholder='password' />
                        {errors.password?.type === 'required' && <p role="alert">Password name is required</p>}

                        <input type="text" {...register("confirmPassword", {
                            required: "Confirm password name is required"
                        })} placeholder='confirm password' />
                        {errors.confirmPassword?.type === 'required' && <p role="alert">Confirm password name is required</p>}

                        <input type="text" {...register("mobile", {
                            required: "Mobile number is required.",
                            pattern: {
                                value: /\d+/,
                                message: "This input is number only."
                            },
                            minLength: {
                                value: 11,
                                message: "This input must exceed 10 characters"
                            }
                        } )} placeholder='mobile number' onChange={(event) => {
                            console.log('event.target.value', event.target.value)
                            event.target.value.replace(/\D/g, "").replace(/^8/, "+7").replace(/^9/, "+79")
                        }} />
                        {errors.mobile?.type === "required" && "Mobile Number is required"}
                        {errors.mobile?.type === "minLength" && "Min Length 11 characters"}

                        <input type="submit" value="Отправить" className='btn' />
                    </form>

                </div>
            </div>
        </section>
        )
    }