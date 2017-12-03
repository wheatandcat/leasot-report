// @flow
import React from "react"
import styled from "styled-components"
import Divider from "material-ui/Divider"

const Root = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem;
`

export default () => (
  <Root>
    <Divider />
    Leasot&nbsp;Report&nbsp;generated&nbsp;by&nbsp;
    <a href='https://github.com/pgilad/leasot' target='_blank' rel='noopener noreferrer'>
      leasot
    </a>
    &nbsp;and&nbsp;
    <a
      href='https://github.com/wheatandcat/leasot-report'
      target='_blank'
      rel='noopener noreferrer'
    >
      leasot-report
    </a>
  </Root>
)
