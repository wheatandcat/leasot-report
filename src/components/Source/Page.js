// @flow
import React from "react"
import Row, { type Props as RowProps } from "./Row"
import Footer from "../Footer"

export type Props = {
  fileName: number,
  codes: Array<RowProps>,
  back: string,
}

export default ({ fileName, codes, back }: Props) => (
  <div>
    <h3>
      <a href={`${back}index.html`}>Leasot Report</a>
    </h3>
    <h4>{fileName}</h4>
    <hr />
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
    <Footer />
  </div>
)
