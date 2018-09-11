import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  padding: 25px;
  border: 1px solid #00f;
`

export default ({data}) => {
  return (
    <Container>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) =>
            <tr key={index}>
              <td>
                {node.relativePath}
              </td>
              <td>
                {node.prettySize}
              </td>
              <td>
                {node.extension}
              </td>
              <td>
                {node.birthTime}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Link to='/'>Home</Link>
    </Container>
  )
}

export const query = graphql`
  query MyfilesQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
