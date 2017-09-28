// @flow
import React, { type Node } from "react"

export type Props = {
  line: number,
  code: string,
  todo: boolean
}

const style = {
  margin: "0px",
  padding: "0px",
  border: "none"
}

const todoStyle = {
  margin: "0px",
  padding: "0px",
  backgroundColor: "#FFC0CB",
  border: "none"
}

export default ({ line, code, todo }: Props) => (
  <tr style={!todo ? style : todoStyle}>
    <td
      style={{
        textAlign: "left",
        width: "20px",
        fontSize: "15px",
        margin: "0px",
        padding: "0px",
        border: "none"
      }}
    >
      {line}
    </td>
    <td
      style={{
        textAlign: "left",
        fontSize: "15px",
        margin: "0px",
        padding: "0px",
        border: "none"
      }}
    >
      <pre style={{ margin: "0px", padding: "0px", border: "none" }}>
        <code>
          <span>{code}</span>
        </code>
      </pre>
    </td>
  </tr>
)
