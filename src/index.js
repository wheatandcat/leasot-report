#!/usr/bin/env node
// @flow
import "babel-polyfill"
import program from "commander"
import { writeFileSync } from "fs"
import rimraf from "rimraf"
import mkdirp from "mkdirp"
import React from "react"
import { renderToString } from "react-dom/server"
import { SheetsRegistry } from "react-jss/lib/jss"
import { create } from "jss"
import preset from "jss-preset-default"
import JssProvider from "react-jss/lib/JssProvider"
import createGenerateClassName from "material-ui/styles/createGenerateClassName"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import Provider from "./components/Provider"
import { mapping, files } from "./utils/file"
import source from "./utils/source"
import SummaryPage from "./components/Summary"
import Header from "./components/Header"

program
  .usage("[options] <file> <output>")
  .version("1.1.0")
  .parse(process.argv)

const outputDir = process.argv[3] || "leasot-reports"

const summaryReport = async (items) => {
  const sheet = new ServerStyleSheet()

  const jss = create(preset())

  jss.options.createGenerateClassName = createGenerateClassName

  const sheetsRegistry = new SheetsRegistry()

  const reportFileContent = await renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <JssProvider registry={sheetsRegistry} jss={jss}>
        <Provider>
          <Header>
            <SummaryPage items={items} />
          </Header>
        </Provider>
      </JssProvider>
    </StyleSheetManager>
  )

  const styleTags = sheet.getStyleTags()

  const css = sheetsRegistry.toString()

  await writeFileSync(
    `${outputDir}/index.html`,
    `<!DOCTYPE html>\n<style>${css}</style>${styleTags}${reportFileContent}`,
    { encoding: "utf8" }
  )

  return css
}

const start = async () => {
  await rimraf.sync(outputDir)
  await mkdirp.sync(outputDir)

  const map = await mapping(process.argv[2])
  const css = await summaryReport(map)

  const list = await files(map)
  await list.map(async (file) => {
    await source(file, map, css)
  })
}

start(program)
