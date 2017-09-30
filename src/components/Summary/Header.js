// @flow
import React, { type Node } from "react"

const Cel = ({ children }: { children: Node }) => (
  <td
    style={{
      border: "1px #ccc solid",
      textAlign: "left",
      backgroundColor: "#F2F2F2",
      fontWeight: "bold"
    }}
  >
    {children}
  </td>
)

export default () => (
  <thead>
    <tr>
      <Cel>Filename</Cel>
      <Cel>Line</Cel>
      <Cel>Kind</Cel>
      <Cel>Message</Cel>
    </tr>
  </thead>
)
