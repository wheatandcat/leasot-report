// @flow
import React from "react"
import Row from "./Row"
import type { Props as ItemProps } from "./Row"

type Props = {
  items: Array<ItemProps>
}

export default ({ items }: Props) => (
  <div>
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
  </div>
)
