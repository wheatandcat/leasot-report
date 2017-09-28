// @flow
import React, { type Node } from "react"
import Row, { type Props as RowProps } from "./Row"

export type Props = {
  fileName: number,
  codes: Array<RowProps>
}

const style = {
  margin: "0px",
  padding: "0px",
  border: "none"
}

export default ({ fileName, codes }: Props) => (
  <div>
    <h3>Leasot Report</h3>
    <h4>{fileName}</h4>
    <div style={{ width: "60rem", border: "1px solid #DEDEDF" }}>
      <table
        style={{
          textAlign: "left",
          width: "100%",
          border: "none",
          backgroundColor: "#FFF",
          borderCollapse: "collapse",
          borderSpacing: 0
        }}
      >
        <tbody>
          {codes.map(({ line, code, todo }) => (
            <Row key={line} line={line} code={code} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
)
