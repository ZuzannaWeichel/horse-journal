"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export const NewRideForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  })

  const onSubmit = async (data) => {
    console.log(data)
  }

  const [value, setValue] = useState(null);

  return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel >Date</StyledLabel>
        <input defaultValue="" placeholder="Date" {...register("date", {require, pattern})} />
        {errors.date?.type === 'required' && <p role="alert">Date is required</p>}

        <StyledLabel>Barn Name</StyledLabel>
        <input defaultValue="" placeholder="Barn Name" {...register("location")} />

        <StyledLabel>Your Horse Name</StyledLabel>
        <input defaultValue="" placeholder="Your Horse Name" {...register("horseName")} />
        
        <StyledLabel>Notes</StyledLabel>
        <input defaultValue="" {...register("notes")} />
        
        <StyledButton type="submit">Save</StyledButton>
      </StyledForm>

  );
}

const StyledButton = styled.button`
  margin: 1rem 0;
  padding: 0.5rem;
`

const StyledLabel = styled.label`
  padding: 1rem 0 0.5rem 0;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
`