import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { get } from 'http';

const Container = styled.div`
  padding: 25px;
  border: 1px solid #00f;
`

export default ({data}) => {
  return (
    <Container>
      <h1>Solutions</h1>
      {data.markdownRemark.excerpt}<br/>
      <Link to='/'>Home</Link>
    </Container>
  )
}

export const query = graphql`
  query getData {
    markdownRemark {
      excerpt
      htmlAst
    }
  }
`
