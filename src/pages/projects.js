import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  padding: 25px;
  border: 1px solid #00f;
`

export default () => {
  return (
    <Container>
      <h1>Projects</h1>
      <Link to='/'>Home</Link>
    </Container>
  )
}