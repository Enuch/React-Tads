import React from 'react'
import { useForm } from 'react-hook-form'

export default function Formulario() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data)

    console.log(watch('example'))
    return (
        <div className='bg-dark'>
            <div className='container text-secondary text-center bg-light border border-dark'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" {...register('example', { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" {...register('exampleRequired', { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Diga-nos algo</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <input type='submit' class="btn btn-primary mb-3" />
                </form>


                

            </div>

        </div>
    )
}