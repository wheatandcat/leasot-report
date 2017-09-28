// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { center } from "../../../.storybook/decorators"
import { Row } from "./"

storiesOf("Source", module).add("Row", () => (
  <table style={{ textAlign: "left", width: "100%", border: "none" }}>
    <tbody>
      <Row line={1} code="import React from 'react'" />
      <Row
        line={2}
        code="export default ({ file, kind, line, text, ref }: Props) => ("
      />
      <Row line={3} code="  <tr>" />
      <Row line={4} code="    <td>{file}</td>" />
      <Row line={5} code="    <td>{line}</td>" todo />
      <Row line={6} code="    <td>{kind}</td>" />
      <Row line={7} code="    <td>{text}</td>" />
      <Row line={8} code="   </tr>" />
      <Row line={9} code=" )" />
    </tbody>
  </table>
))
