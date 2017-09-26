import fs from "fs"
import path from "path"
import { parse, reporter } from "leasot"

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

export const files = async (p, data = []) => {
  const list = await fs.readdirSync(p)
  await Promise.all(
    list.map(async f => {
      const fp = await path.join(p, f)
      if (fs.statSync(fp).isDirectory()) {
        await files(fp, data) // ディレクトリなら再帰
      } else {
        const tmp = await todos(fp)
        await data.push(...JSON.parse(tmp))
      }
    })
  )

  return data
}
