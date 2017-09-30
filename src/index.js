#!/usr/bin/env node
// @flow
import "babel-polyfill"
import program from "commander"
import { writeFileSync } from "fs"
import rimraf from "rimraf"
import mkdirp from "mkdirp"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { mapping, files } from "./utils/file"
import source from "./utils/source"
import SummaryPage from "./components/Summary"
import Header from "./components/Header"

program.version("0.7.1").parse(process.argv)

const outputDir = "leasot-reports"

const summaryReport = async (items) => {
  const reportFileContent =
    (await "<!DOCTYPE html>\n") +
    renderToStaticMarkup(
      <Header>
        <SummaryPage items={items} />
      </Header>
    )

  await writeFileSync(`${outputDir}/index.html`, reportFileContent)
}

const start = async () => {
  await rimraf.sync(outputDir)
  await mkdirp.sync(outputDir)

  const map = await mapping(process.argv[2])
  const list = await files(map)
  await list.map(async (file) => {
    await source(file, map)
  })

  await summaryReport(map)
}

start(program)
