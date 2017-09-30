// @flow
import React, { type Node } from "react"

export type Props = {
  file: string,
  kind: string,
  line: number,
  text: string,
  ref: string,
}

const Cel = ({ children }: { children: Node }) => (
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

export default ({ file, kind, line, text, ref }: Props) => (
  <tr>
    <Cel>
      <a href={`./${file}.html#L${line}`}>{file}</a>
    </Cel>
    <Cel>{line}</Cel>
    <Cel>
      <span className='mdl-chip' style={{ backgroundColor: "rgb(251, 213, 226)" }}>
        <span className='mdl-chip__text'>{kind}</span>
      </span>
    </Cel>
    <Cel>{text}</Cel>
  </tr>
)
