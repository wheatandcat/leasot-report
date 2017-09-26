#!/usr/bin/env node
import "babel-polyfill"
import leasot from "leasot"
import { files } from "./utils/file"

const start = async () => {
  const list = await files(process.argv[2])
  await console.log(list)
}

start()
