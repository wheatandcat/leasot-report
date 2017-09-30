// @flow
import React, { type Node } from "react"

export default ({ children }: { children: Node }) => (
  <html lang='en'>
    <head>
      <title>leasot report</title>
    </head>
    <body
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      <link rel='stylesheet' href='https://code.getmdl.io/1.3.0/material.indigo-pink.min.css' />
      <script defer src='https://code.getmdl.io/1.3.0/material.min.js' />
      {children}
    </body>
  </html>
)
