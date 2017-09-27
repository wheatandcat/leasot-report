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
        backgroundColor: "#F2F2F2",
        fontWeight: "bold"
      }
    },
    children
  );
};

exports.default = function () {
  return _react2.default.createElement(
    "thead",
    null,
    _react2.default.createElement(
      "tr",
      null,
      _react2.default.createElement(
        Cel,
        null,
        "Filename"
      ),
      _react2.default.createElement(
        Cel,
        null,
        "Line"
      ),
      _react2.default.createElement(
        Cel,
        null,
        "Kind"
      ),
      _react2.default.createElement(
        Cel,
        null,
        "Message"
      )
    )
  );
};