#!/usr/bin/env node
import "babel-polyfill"
import leasot from "leasot"
import { rmdirSync, writeFileSync } from "fs"
import rimraf from "rimraf"
import mkdirp from "mkdirp"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { files } from "./utils/file"
import SummaryPage from "./components/Summary"
import Header from "./components/Header"

const outputDir = "leasot-reports"

const summaryReport = async items => {
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

  const list = await files(process.argv[2])

  await summaryReport(list)
}

start()
