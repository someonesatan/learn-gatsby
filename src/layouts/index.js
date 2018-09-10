import React from 'react'
import styledNormalize from 'styled-normalize'
import styled, { injectGlobal } from 'styled-components'

import Header from '../components/header'

injectGlobal`
  ${styledNormalize}
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