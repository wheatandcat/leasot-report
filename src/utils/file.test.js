// @flow
import { mapping, files, __RewireAPI__ } from "./file"

const todos = __RewireAPI__.__get__("todos")

describe("utils/file", () => {
  describe("todos", () => {
    it("result match", async () => {
      const result = await todos("example/testDir/index_001.js")
      await expect(JSON.parse(result)).toEqual([
        {
          file: "example/testDir/index_001.js",
          kind: "TODO",
          line: 16,
          text: "foo",
          ref: ""
        }
      ])
    })
  })

  describe("mapping", () => {
    it("result match", async () => {
      const result = await mapping("example")
      await expect(result.length).toEqual(4)
    })
  })

  describe("files", () => {
    it("result match", async () => {
      const result = await files([
        {
          file: "example/index.js"
        },
        {
          file: "example/testDir/index_001.js"
        },
        {
          file: "example/testDir/index_002.js"
        },
        {
          file: "example/testDir/index_002.js"
        }
      ])
      await expect(result).toEqual([
        "example/index.js",
        "example/testDir/index_001.js",
        "example/testDir/index_002.js"
      ])
    })
  })
})
