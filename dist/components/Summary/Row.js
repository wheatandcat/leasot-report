"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cel = function Cel(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    "td",
    {
      style: {
        border: "1px #ccc solid",
        textAlign: "left",
        backgroundColor: "#FCFFF4",
        color: "#275B28"
      }
    },
    children
  );
};

exports.default = function (_ref2) {
  var file = _ref2.file,
      kind = _ref2.kind,
      line = _ref2.line,
      text = _ref2.text,
      ref = _ref2.ref;
  return _react2.default.createElement(
    "tr",
    null,
    _react2.default.createElement(
      Cel,
      null,
      file
    ),
    _react2.default.createElement(
      Cel,
      null,
      line
    ),
    _react2.default.createElement(
      Cel,
      null,
      kind
    ),
    _react2.default.createElement(
      Cel,
      null,
      text
    )
  );
};