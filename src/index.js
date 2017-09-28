#!/usr/bin/env node
import "babel-polyfill"
import leasot from "leasot"
import { rmdirSync, writeFileSync } from "fs"
import rimraf from "rimraf"
import mkdirp from "mkdirp"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { mapping, files, fixmeList } from "./utils/file"
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

  const map = await mapping(process.argv[2])
  const list = await files(map)
  await list.map(async file => {
    await fixmeList(file, map)
  })

  await summaryReport(map)
}

start()
