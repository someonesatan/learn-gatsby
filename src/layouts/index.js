import React from 'react'

import styledNormalize from 'styled-normalize'
import styled, { injectGlobal } from 'styled-components'

import Header from '../components/header'

injectGlobal`
  ${styledNormalize}

  @font-face {
    font-family: 'montserrat';
    font-weight: 400;
    src: local('montserrat-regular'), url(static/fonts/Montserrat-Regular.eot) format('eot');
    src: local('montserrat-regular'), url(static/fonts/Montserrat-Regular.woff) format('woff');
    src: local('montserrat-regular'), url(static/fonts/Montserrat-Regular.woff2) format('woff2');
  }

  @font-face {
    font-family: 'montserrat';
    font-weight: 700;
    src: local('montserrat-regular'), url(static/fonts/Montserrat-Bold.eot) format('eot');
    src: local('montserrat-regular'), url(static/fonts/Montserrat-Bold.woff) format('woff');
    src: local('montserrat-regular'), url(static/fonts/Montserrat-Bold.woff2) format('woff2');
  }

  @font-face {
    font-family: 'montserrat';
    font-weight: 600;
    src: local('montserrat-regular'), url(static/fonts/Montserrat-SemiBold.eot) format('eot');
    src: local('montserrat-regular'), url(static/fonts/Montserrat-SemiBold.woff) format('woff');
    src: local('montserrat-regular'), url(static/fonts/Montserrat-SemiBold.woff2) format('woff2');
  }

  body {
    font-family: montserrat;
  }
`

const Layout = styled.div`
  margin: 0 auto;
`

export default ({ children }) => {
  return (
    <Layout>
      <Header/>

      {children()}
    </Layout>
  )
}