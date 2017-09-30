// @flow
import React from "react"
import { shallow } from "enzyme"
import Page from "./Page"

describe("components/Summary/Page", () => {
  describe("Page", () => {
    function setup () {
      const enzymeWrapper = shallow(
        <Page
          items={[
            {
              file: "foo",
              kind: "TODO",
              line: 1,
              text: "",
              ref: ""
            }
          ]}
        />
      )

      return {
        enzymeWrapper
      }
    }
    it("表示", () => {
      setup()
    })
  })
})
