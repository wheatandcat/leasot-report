// @flow
import React from "react"
import { shallow } from "enzyme"
import Row, { __RewireAPI__ } from "./Row"

const Cel = __RewireAPI__.__get__("Cel")

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

  describe("Cel", () => {
    function setup () {
      const enzymeWrapper = shallow(<Cel />)

      return {
        enzymeWrapper
      }
    }
    it("表示", () => {
      setup()
    })
  })
})
