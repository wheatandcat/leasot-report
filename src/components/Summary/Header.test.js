// @flow
import React from "react"
import { shallow } from "enzyme"
import Header, { __RewireAPI__ } from "./Header"

const Cel = __RewireAPI__.__get__("Cel")

describe("components/Summary/Header", () => {
  describe("Header", () => {
    function setup () {
      const enzymeWrapper = shallow(<Header />)

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
