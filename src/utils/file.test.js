// @flow
import { fixmeList, getCodes, writeSource } from "./file"

describe("files", () => {
  describe("fixmeList", () => {
    it("result match", async () => {
      const result = await fixmeList("example/testDir/index_001.js", [
        {
          file: "example/index.js",
          kind: "TODO",
          line: 1,
          text: "foo",
          ref: ""
        },
        {
          file: "example/index.js",
          kind: "TODO",
          line: 2,
          text: "bar",
          ref: ""
        },
        {
          file: "example/testDir/index_001.js",
          kind: "TODO",
          line: 1,
          text: "foo",
          ref: ""
        },
        {
          file: "example/testDir/index_001.js",
          kind: "TODO",
          line: 2,
          text: "bar",
          ref: ""
        },
        {
          file: "example/testDir/index_002.js",
          kind: "TODO",
          line: 1,
          text: "foo",
          ref: ""
        },
        {
          file: "example/testDir/index_002.js",
          kind: "TODO",
          line: 2,
          text: "bar",
          ref: ""
        }
      ])
      expect(1).toEqual(1)
    })
  })

  describe("getCodes", () => {
    it("result match", async () => {
      const result = await getCodes(
        ["// @TODO: foo", "// @TODO: bar"],
        [
          {
            file: "example/testDir/index_001.js",
            kind: "TODO",
            line: 1,
            text: "foo",
            ref: ""
          },
          {
            file: "example/testDir/index_001.js",
            kind: "TODO",
            line: 2,
            text: "bar",
            ref: ""
          }
        ]
      )
      expect(result).toEqual([
        { code: "// @TODO: foo", line: 1, todo: true },
        { code: "// @TODO: bar", line: 2, todo: true }
      ])
    })
  })

  describe("writeSource", () => {
    it("write source", async () => {
      await writeSource("example/testDir/index_001.js", [
        { code: "// @TODO: foo", line: 1, todo: true },
        { code: "// foo", line: 2, todo: false },
        { code: "// @TODO: bar", line: 3, todo: true },
        { code: "// foo", line: 4, todo: false }
      ])
    })
  })
})
