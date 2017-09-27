// @flow
import React from "react"

export type Props = {
  file: string,
  kind: string,
  line: number,
  text: string,
  ref: string
}

export default ({ file, kind, line, text, ref }: Props) => <div>{file}</div>
