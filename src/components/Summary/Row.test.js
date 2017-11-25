// @flow
import React from "react"
import { shallow } from "enzyme"
import Row from "./Row"

describe("components/Summary/Row", () => {
  describe("Row", () => {
    function setup () {
      const enzymeWrapper = shallow(<Row />)

      return {
        enzymeWrapper
      }
    }
    it("表示", () => {
      setup()
    })
  })
})
