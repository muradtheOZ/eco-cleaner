import React from 'react';
import { useForm } from 'react-hook-form';

const CustomBooking = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('firstName')} />
          <input {...register('lastName', { required: true })} />
          {errors.lastName && <p>Last name is required.</p>}
          <input {...register('age', { pattern: /\d+/ })} />
          {errors.age && <p>Please enter number for age.</p>}
          <input type="submit" text="Book Now" />
        </form>
      );
    
};

export default CustomBooking;