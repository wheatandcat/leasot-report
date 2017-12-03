// @flow
import React from "react"
import styled, { css } from "styled-components"
import MuiTable, { TableBody, TableCell, TableRow } from "material-ui/Table"
import MuiChip from "material-ui/Chip"
import type { Props as ItemProps } from "./Row"

type Props = {
  items: Array<ItemProps>
}

const Total = styled(MuiChip)`
  background-color: #f08080 !important;
  color: #fff !important;
`

const Kind = styled(TableCell)`
  width: 2.5rem !important;
  padding: 0 1rem !important;
`

const TotalLable = styled(TableCell)`
  color: #f08080 !important;
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  padding: 0 1rem !important;
  width: 2.5rem !important;
`

const Lable = styled(TableCell)`
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  padding: 0 1rem !important;
  width: 2.5rem !important;
`

const Table = styled(MuiTable)`
  width: 30rem !important;
`

const Chip = styled(MuiChip)`
  ${props =>
    (props.kind === "FIXME"
      ? css`
          background-color: #e0ffff !important;
        `
      : css`
          background-color: #ffe4e1 !important;
        `)};
`

export default ({ items }: Props) => (
  <Table>
    <TableBody>
      <TableRow>
        <Kind>
          <Total label='TOTAL' />
        </Kind>
        <TotalLable>{items.length}</TotalLable>

        <Kind>
          <Chip label='FIXME' kind='FIXME' />
        </Kind>
        <Lable>{items.filter(({ kind }) => kind === "FIXME").length}</Lable>

        <Kind>
          <Chip label='TODO' kind='TODO' />
        </Kind>
        <Lable>{items.filter(({ kind }) => kind === "TODO").length}</Lable>
      </TableRow>
    </TableBody>
  </Table>
)
