// @flow
import React from "react"
import styled from "styled-components"
import MuiTable, { TableBody } from "material-ui/Table"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import Divider from "material-ui/Divider"
import { Row, Header } from "./"
import type { Props as ItemProps } from "./Row"
import Footer from "../Footer"

type Props = {
  items: Array<ItemProps>
}

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Frame = styled.div`width: 90%;`

const Table = styled(MuiTable)`background-color: #fcfff0 !important;`

export default ({ items }: Props) => (
  <div>
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Typography type='title' color='inherit'>
          Leasot Report
        </Typography>
      </Toolbar>
    </AppBar>

    <Contents>
      <Frame>
        <h4>Files</h4>
        <Divider />
        <Table>
          <Header />
          <TableBody>
            {items.map(({ file, kind, line, text, ref }: ItemProps) => (
              <Row
                key={`${file}_${line}`}
                file={file}
                kind={kind}
                line={line}
                text={text}
                ref={ref}
              />
            ))}
          </TableBody>
        </Table>
      </Frame>
    </Contents>
    <Footer />
  </div>
)
