import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  padding: 25px;
  border: 1px solid palevioletred;
`

export default () => {
  return (
    <Container>
      <h1>Main</h1>
      <Link to='/projects'>Projects</Link>
    </Container>
  )
}
