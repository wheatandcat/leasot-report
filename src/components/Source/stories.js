// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { center } from "../../../.storybook/decorators"
import Page, { Row } from "./"

storiesOf("Source", module)
  .addDecorator(center)
  .add("Row", () => (
    <table style={{ textAlign: "left", width: "100%", border: "none" }}>
      <tbody>
        <Row line={1} code="import React from 'react'" />
        <Row line={2} code='export default ({ file, kind, line, text, ref }: Props) => (' />
        <Row line={3} code='  <tr>' />
        <Row line={4} code='    <td>{file}</td>' />
        <Row line={5} code='    <td>{line}</td>' todo />
        <Row line={6} code='    <td>{kind}</td>' />
        <Row line={7} code='    <td>{text}</td>' />
        <Row line={8} code='   </tr>' />
        <Row line={9} code=' )' />
      </tbody>
    </table>
  ))
  .add("Page", () => (
    <Page
      fileName='example/index.js'
      back='./../../'
      codes={[
        {
          line: 1,
          code: "import React from 'react'",
          todo: false
        },
        {
          line: 2,
          code: "export default ({ file, kind, line, text, ref }: Props) => (",
          todo: false
        },
        {
          line: 3,
          code: " <tr>",
          todo: false
        },
        {
          line: 4,
          code: "   <td>{file}</td>",
          todo: false
        },
        {
          line: 5,
          code: "   <td>{line}</td>",
          todo: true
        },
        {
          line: 6,
          code: "   <td>{text}</td>",
          todo: false
        },
        {
          line: 7,
          code: " <tr>",
          todo: false
        },
        {
          line: 8,
          code: " )",
          todo: false
        }
      ]}
    />
  ))
