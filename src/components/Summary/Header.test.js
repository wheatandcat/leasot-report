// @flow
import React from "react"
import { shallow } from "enzyme"
import Header from "./Header"

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
})
