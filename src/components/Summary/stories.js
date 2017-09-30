// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { center } from "../../../.storybook/decorators"
import Page, { Row, Header } from "./"

storiesOf("Summary", module)
  .addDecorator(center)
  .add("Header", () => (
    <table
      className='mdl-data-table mdl-js-data-table mdl-shadow--2dp'
      style={{ textAlign: "left", width: "90%" }}
    >
      <Header />
    </table>
  ))
  .add("Row", () => (
    <table
      className='mdl-data-table mdl-js-data-table mdl-shadow--2dp'
      style={{ textAlign: "left", width: "90%" }}
    >
      <tbody>
        <Row file='example/index.js' line={2} kind='TODO' text='foo bar' />
        <Row file='example/index.js' line={4} kind='TODO' text='foo bar' />
      </tbody>
    </table>
  ))
  .add("Page", () => (
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
