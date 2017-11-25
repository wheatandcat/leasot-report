// @flow
import fixmeList, { __RewireAPI__ } from "./source"

const codeRecords = __RewireAPI__.__get__("codeRecords")

describe("files", () => {
  describe("fixmeList", () => {
    it("result match", async () => {
      await fixmeList("example/testDir/index_001.js", [
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
    })
  })

  describe("codeRecords", () => {
    it("result match", async () => {
      const result = await codeRecords(
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
        { code: "// @TODO: foo", line: 1, todo: false },
        { code: "// @TODO: bar", line: 2, todo: false }
      ])
    })
  })
})
