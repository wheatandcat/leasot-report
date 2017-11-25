// @flow
import React from "react"
import { renderToString } from "react-dom/server"
import { createReadStream, writeFileSync } from "fs"
import { createInterface } from "readline"
import { sync } from "mkdirp"
import { SheetsRegistry } from "react-jss/lib/jss"
import { create } from "jss"
import preset from "jss-preset-default"
import JssProvider from "react-jss/lib/JssProvider"
import createGenerateClassName from "material-ui/styles/createGenerateClassName"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import Provider from "../components/Provider"
import Header from "../components/Header"
import Source from "../components/Source"

const outputDir = process.argv[3] || "leasot-reports"

export default async (file, list, css = "") => {
  const filtered = await list.filter(item => item.file === file)
  const lins = await filtered.map(item => item.line)

  const code = []
  const inputStream = await createReadStream(file, "utf8")
  const inputReadLine = createInterface({ input: inputStream, output: {} })

  await inputReadLine
    .on("line", async (line) => {
      await code.push(line)
    })
    .on("close", async () => {
      const codes = await codeRecords(code, lins)
      await write(file, codes, css)
    })
}

const codeRecords = async (codes, lins) => {
  const result = await codes.map((code, index) => ({
    line: index + 1,
    code,
    todo: lins.indexOf(index + 1) >= 0
  }))

  return result
}

const write = async (fileName, codes, css = "") => {
  const count = await fileName.split("/").length

  const sheet = new ServerStyleSheet()

  const jss = create(preset())

  jss.options.createGenerateClassName = createGenerateClassName

  const sheetsRegistry = new SheetsRegistry()

  let back = "./"
  for (let i = 0; i < count - 1; i += 1) {
    back += "../"
  }

  const reportFileContent = await renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <JssProvider registry={sheetsRegistry} jss={jss}>
        <Provider>
          <Header>
            <Source codes={codes} fileName={fileName} back={back} />
          </Header>
        </Provider>
      </JssProvider>
    </StyleSheetManager>
  )

  const styleTags = sheet.getStyleTags()

  const line = await fileName.lastIndexOf("/")
  if (line > 0) {
    await sync(`${outputDir}/${fileName.slice(0, line)}`)
  }

  await writeFileSync(
    `${outputDir}/${fileName}.html`,
    `<!DOCTYPE html>\n<style>${css}</style>${styleTags}${reportFileContent}`,
    { encoding: "utf8" }
  )
}
