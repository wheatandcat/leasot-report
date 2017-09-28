import fs from "fs"
import rl from "readline"
import path from "path"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { parse, reporter } from "leasot"
import mkdirp from "mkdirp"
import Header from "../components/Header"
import Source from "../components/Source"

const outputDir = "leasot-reports"

const filterExts = [
  ".js",
  ".jsx",
  ".css",
  ".sass",
  ".java",
  ".go",
  ".php",
  ".rb"
]

const todos = async file => {
  const contents = await fs.readFileSync(file, "utf8")
  const filetype = await path.extname(file)

  const list = await parse({
    ext: filetype,
    content: contents,
    fileName: file
  })

  return reporter(list, {
    reporter: "json",
    spacing: 2
  })
}

export const mapping = async (p, data = []) => {
  const list = await fs.readdirSync(p)
  await Promise.all(
    list.map(async f => {
      const fp = await path.join(p, f)
      if (fs.statSync(fp).isDirectory()) {
        await mapping(fp, data) // ディレクトリなら再帰
      } else {
        if (filterExts.indexOf(path.extname(fp)) === -1) {
          return
        }
        const tmp = await todos(fp)
        await data.push(...JSON.parse(tmp))
      }
    })
  )

  return data
}

export const files = async list => {
  const result = await []
  await Promise.all(
    list.map(async itme => {
      if (result.indexOf(itme.file) === -1) {
        result.push(itme.file)
      }
    })
  )

  return result
}

export const fixmeList = async (file, list) => {
  const filtered = await list.filter(item => {
    return item.file === file
  })
  const lins = await filtered.map(item => {
    return item.line
  })

  const code = []
  const inputStream = await fs.createReadStream(file, "utf8")
  const inputReadLine = rl.createInterface({ input: inputStream, output: {} })

  await inputReadLine
    .on("line", async line => {
      await code.push(line)
    })
    .on("close", async () => {
      const codes = await getCodes(code, lins)
      await writeSource(file, codes)
    })
}

export const getCodes = async (codes, lins) => {
  const result = await codes.map((code, index) => {
    return {
      line: index + 1,
      code,
      todo: lins.indexOf(index + 1) >= 0
    }
  })

  return result
}

export const writeSource = async (fileName, codes) => {
  const reportFileContent =
    (await "<!DOCTYPE html>\n") +
    renderToStaticMarkup(
      <Header>
        <Source codes={codes} fileName={fileName} />
      </Header>
    )

  const line = await fileName.lastIndexOf("/")
  if (line > 0) {
    await mkdirp.sync(`${outputDir}/${fileName.slice(0, line)}`)
  }

  await fs.writeFileSync(`${outputDir}/${fileName}.html`, reportFileContent)
}
