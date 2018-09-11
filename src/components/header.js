import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../images/logo.png'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 82px;
  width: 1100px;
  margin: 0 auto;
`
const Pages = styled.div`
  a {
    /* font-weight: 600; */
    font-family: Montserrat-semibold, sans-serif;
    text-decoration: none;
    font-size: 16px;
    color: #2d2d2d;
  }
`
const Lang = styled.div`
  p {
    display: inline-block;
  }
`


export default () => {
  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt='Вернуться на главную страницу'/>
      </Link>
      <Pages>
        <Link to='/products'>Продукты</Link>
        <Link to='/solutions'>Решения</Link>
        <Link to='/services'>Услуги</Link>
        <Link to='/projects'>Проекты</Link>
        <Link to='/contacts'>Контакты</Link>
      </Pages>
      <Lang>
        <p>RUS</p>
        <p>ENG</p>
      </Lang>
    </Container>
  )
}