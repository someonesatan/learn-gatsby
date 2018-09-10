import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../images/logo.png'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Pages = styled.div`
  
`


export default () => {
  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt='Вернуться на главную страницу'/>
      </Link>
      <Pages>

      </Pages>
    </Container>
  )
}