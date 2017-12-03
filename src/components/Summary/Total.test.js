// @flow
import React from "react"
import { shallow } from "enzyme"
import Total from "./Total"

describe("components/Summary/Total", () => {
  describe("Total", () => {
    function setup () {
      const enzymeWrapper = shallow(
        <Total
          items={[
            {
              file: "foo",
              kind: "TODO",
              line: 1,
              text: "",
              ref: ""
            },
            {
              file: "ber",
              kind: "FIXME",
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
