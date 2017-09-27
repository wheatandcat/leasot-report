"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "body",
    {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    },
    _react2.default.createElement("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons"
    }),
    _react2.default.createElement("link", {
      rel: "stylesheet",
      href: "https://code.getmdl.io/1.3.0/material.indigo-pink.min.css"
    }),
    _react2.default.createElement("script", { defer: true, src: "https://code.getmdl.io/1.3.0/material.min.js" }),
    children
  );
};