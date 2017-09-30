// @flow
import React from "react"

export type Props = {
  line: number,
  code: string,
  todo: boolean,
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

const lineStyle = {
  textAlign: "left",
  width: "20px",
  fontSize: "10px",
  margin: "0px",
  padding: "0px",
  border: "none",
  backgroundColor: "#F7F7F7",
  paddingLeft: "30px",
  color: "#A29999"
}

const todoLineStyle = {
  textAlign: "left",
  width: "20px",
  fontSize: "10px",
  margin: "0px",
  padding: "0px",
  border: "none",
  backgroundColor: "#FFC0CB",
  paddingLeft: "30px",
  color: "#A29999"
}

export default ({ line, code, todo }: Props) => (
  <tr style={!todo ? style : todoStyle}>
    <td style={!todo ? lineStyle : todoLineStyle}>{line}</td>
    <td
      style={{
        textAlign: "left",
        fontSize: "10px",
        margin: "0px",
        border: "none",
        paddingLeft: "5px"
      }}
      id={`L${line}`}
    >
      <pre style={{ margin: "0px", padding: "0px", border: "none" }}>
        <code>
          <span>{code}</span>
        </code>
      </pre>
    </td>
  </tr>
)
