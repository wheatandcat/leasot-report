// @flow
import React from "react"
import styled from "styled-components"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import Divider from "material-ui/Divider"
import Row, { type Props as RowProps } from "./Row"
import Footer from "../Footer"

export type Props = {
  fileName: number,
  codes: Array<RowProps>,
  back: string
}

const Link = styled.a`color: #fff;`

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Frame = styled.div`width: 90%;`

export default ({ fileName, codes, back }: Props) => (
  <div>
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Typography type='title' color='inherit'>
          <Link href={`${back}index.html`}>Leasot Report</Link>
        </Typography>
      </Toolbar>
    </AppBar>

    <Contents>
      <Frame>
        <h4>{fileName}</h4>
        <Divider />
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
      </Frame>
    </Contents>
    <Footer />
  </div>
)
