// @flow
import React from "react"

const style = {
  marginTop: "30px",
  marginBottom: "15px",
  color: "#212121",
  display: "flex",
  justifyContent: "center"
}

export default () => (
  <div style={style}>
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
  </div>
)
