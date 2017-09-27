// @flow
import React, { type Node } from "react"

export type Props = {
  file: string,
  kind: string,
  line: number,
  text: string,
  ref: string
}

const Cel = ({ children }: { children: Node }) => {
  return (
    <td
      style={{
        border: "1px #ccc solid",
        textAlign: "left",
        backgroundColor: "#FCFFF4",
        color: "#275B28"
      }}
    >
      {children}
    </td>
  )
}

export default ({ file, kind, line, text, ref }: Props) => (
  <tr>
    <Cel>{file}</Cel>
    <Cel>{line}</Cel>
    <Cel>{kind}</Cel>
    <Cel>{text}</Cel>
  </tr>
)
