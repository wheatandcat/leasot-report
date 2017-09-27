"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var items = _ref.items;
  return _react2.default.createElement(
    "div",
    { style: { width: "90%" } },
    _react2.default.createElement(
      "h3",
      null,
      "Leasot Report"
    ),
    _react2.default.createElement(
      "h4",
      null,
      "Files"
    ),
    _react2.default.createElement(
      "table",
      {
        className: "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp",
        style: { textAlign: "left", width: "100%" }
      },
      _react2.default.createElement(_.Header, null),
      items.map(function (_ref2) {
        var file = _ref2.file,
            kind = _ref2.kind,
            line = _ref2.line,
            text = _ref2.text,
            ref = _ref2.ref;
        return _react2.default.createElement(_.Row, {
          key: file + "_" + line,
          file: file,
          kind: kind,
          line: line,
          text: text,
          ref: ref
        });
      })
    )
  );
};