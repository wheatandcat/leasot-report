// @flow
import { readFileSync, readdirSync, statSync } from "fs"
import { extname, join } from "path"
import { parse, reporter } from "leasot"

const filterExts = [".js", ".jsx", ".css", ".sass", ".java", ".go", ".php", ".rb"]

const todos = async (file) => {
  const contents = await readFileSync(file, "utf8")
  const filetype = await extname(file)

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
  const list = await readdirSync(p)
  await Promise.all(
    list.map(async (f) => {
      const fp = await join(p, f)
      if (statSync(fp).isDirectory()) {
        await mapping(fp, data)
      } else {
        if (filterExts.indexOf(extname(fp)) === -1) {
          return
        }
        const tmp = await todos(fp)
        await data.push(...JSON.parse(tmp))
      }
    })
  )

  return data
}

export const files = async (list) => {
  const result = await []
  await Promise.all(
    list.map(async (itme) => {
      if (result.indexOf(itme.file) === -1) {
        result.push(itme.file)
      }
    })
  )

  return result
}
