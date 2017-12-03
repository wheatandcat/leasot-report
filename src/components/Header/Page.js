// @flow
import React, { type Node } from "react"

export default ({ children }: { children: Node }) => (
  <html lang='en'>
    <head>
      <title>leasot report</title>
      <meta charSet='UTF-8' />
    </head>
    <body style={{ backgroundColor: "#F4F3F4" }}>{children}</body>
  </html>
)
