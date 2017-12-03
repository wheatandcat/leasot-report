// @flow
import React from "react"
import styled from "styled-components"
import { TableHead as MuiTableHead, TableRow, TableCell } from "material-ui/Table"

const TableHead = styled(MuiTableHead)`background-color: #eeeeee !important;`

export default () => (
  <TableHead>
    <TableRow>
      <TableCell>Filename</TableCell>
      <TableCell>Line</TableCell>
      <TableCell>{"　"}Kind</TableCell>
      <TableCell>Message</TableCell>
    </TableRow>
  </TableHead>
)
