"use client"
import styled from "styled-components"
import { NewRideForm } from "./components/NewRideForm"

export default function Home () {
  return (
    <StyledCard>
      <Title>Horse Journal</Title>
      <NewRideForm/>
    </StyledCard>
  )
}

const StyledCard = styled.div` 
  width: 500px;
`

const Title = styled.h1`
  padding: 2rem;
  margin: 0 0;
`
