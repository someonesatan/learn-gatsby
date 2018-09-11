import React from 'react'
import styledNormalize from 'styled-normalize'
import styled, { injectGlobal } from 'styled-components'

import Header from '../components/header'

injectGlobal`
  ${styledNormalize}

  @font-face {
    font-family: "Montserrat-regular";
    src: url("../fonts/Montserrat-Regular.eot") format("embedded-opentype");
    src: url("../fonts/Montserrat-Regular.woff") format("embedded-opentype");
    src: url("../fonts/Montserrat-Regular.woff2") format("embedded-opentype");
  }

  @font-face {
    font-family: "Montserrat-bold";
    src: url("../fonts/Montserrat-Bold.eot") format("embedded-opentype");
    src: url("../fonts/Montserrat-Bold.woff") format("embedded-opentype");
    src: url("../fonts/Montserrat-Bold.woff2") format("embedded-opentype");
  }

  @font-face {
    font-family: "Montserrat-semibold";
    src: url("../fonts/Montserrat-SemiBold.eot") format("embedded-opentype");
    src: url("../fonts/Montserrat-SemiBold.woff") format("embedded-opentype");
    src: url("../fonts/Montserrat-SemiBold.woff2") format("embedded-opentype");
  }

  body {
    font-family: Montserrat-regular, sans-serif;
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