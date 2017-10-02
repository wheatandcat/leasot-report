// @flow
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { createReadStream, writeFileSync } from "fs"
import { createInterface } from "readline"
import { sync } from "mkdirp"
import Header from "../components/Header"
import Source from "../components/Source"

const outputDir = "leasot-reports"

export default async (file, list) => {
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
      await write(file, codes)
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

const write = async (fileName, codes) => {
  const count = await fileName.split("/").length

  let back = "./"
  for (let i = 0; i < count - 1; i += 1) {
    back += "../"
  }

  const reportFileContent =
    (await "<!DOCTYPE html>\n") +
    renderToStaticMarkup(
      <Header>
        <Source codes={codes} fileName={fileName} back={back} />
      </Header>
    )

  const line = await fileName.lastIndexOf("/")
  if (line > 0) {
    await sync(`${outputDir}/${fileName.slice(0, line)}`)
  }

  await writeFileSync(`${outputDir}/${fileName}.html`, reportFileContent, { encoding: "utf8" })
}
