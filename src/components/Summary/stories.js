// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import Table, { TableBody } from "material-ui/Table"
import { center } from "../../../.storybook/decorators"
import Page, { Row, Header } from "./"

storiesOf("Summary", module)
  .addDecorator(center)
  .add("Header", () => (
    <Table>
      <Header />
    </Table>
  ))
  .add("Row", () => (
    <Table>
      <TableBody>
        <Row file='example/index.js' line={2} kind='TODO' text='foo bar' />
        <Row file='example/index.js' line={4} kind='TODO' text='foo bar' />
      </TableBody>
    </Table>
  ))

storiesOf("Summary", module).add("Page", () => (
  <Page
    items={[
      {
        file: "example/index.js",
        line: 2,
        kind: "TODO",
        text: "foo bar"
      },
      {
        file: "example/index.js",
        line: 4,
        kind: "TODO",
        text: "foo bar"
      }
    ]}
  />
))
