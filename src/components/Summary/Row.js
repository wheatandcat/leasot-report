// @flow
import React from "react"
import styled from "styled-components"
import MuiChip from "material-ui/Chip"
import { TableRow, TableCell } from "material-ui/Table"

export type Props = {
  file: string,
  kind: string,
  line: number,
  text: string,
  ref: string
}

const Chip = styled(MuiChip)`background-color: #ffe4e1 !important;`

export default ({ file, kind, line, text, ref }: Props) => (
  <TableRow>
    <TableCell>
      <a href={`./${file}.html#L${line}`}>{file}</a>
    </TableCell>
    <TableCell>{line}</TableCell>
    <TableCell>
      <Chip label={kind} />
    </TableCell>
    <TableCell>{text}</TableCell>
  </TableRow>
)
