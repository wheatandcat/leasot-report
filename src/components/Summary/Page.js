// @flow
import React from "react"
import { Row, Header } from "./"
import type { Props as ItemProps } from "./Row"

type Props = {
  items: Array<ItemProps>
}

export default ({ items }: Props) => (
  <div style={{ width: "90%" }}>
    <h3>Leasot Report</h3>

    <h4>Files</h4>
    <table
      className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp"
      style={{ textAlign: "left", width: "100%" }}
    >
      <Header />
      {items.map(({ file, kind, line, text, ref }: ItemProps) => (
        <Row
          key={file + "_" + line}
          file={file}
          kind={kind}
          line={line}
          text={text}
          ref={ref}
        />
      ))}
    </table>
  </div>
)
