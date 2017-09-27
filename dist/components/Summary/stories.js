"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _react3 = require("@storybook/react");

var _decorators = require("../../../.storybook/decorators");

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)("Summary", module).addDecorator(_decorators.center).add("Header", function () {
  return _react2.default.createElement(
    "table",
    {
      className: "mdl-data-table mdl-js-data-table mdl-shadow--2dp",
      style: { textAlign: "left", width: "90%" }
    },
    _react2.default.createElement(_.Header, null)
  );
}).add("Row", function () {
  return _react2.default.createElement(
    "table",
    {
      className: "mdl-data-table mdl-js-data-table mdl-shadow--2dp",
      style: { textAlign: "left", width: "90%" }
    },
    _react2.default.createElement(
      "tbody",
      null,
      _react2.default.createElement(_.Row, { file: "example/index.js", line: 2, kind: "TODO", text: "foo bar" }),
      _react2.default.createElement(_.Row, { file: "example/index.js", line: 4, kind: "TODO", text: "foo bar" })
    )
  );
}).add("Page", function () {
  return _react2.default.createElement(_2.default, {
    items: [{
      file: "example/index.js",
      line: 2,
      kind: "TODO",
      text: "foo bar"
    }, {
      file: "example/index.js",
      line: 4,
      kind: "TODO",
      text: "foo bar"
    }]
  });
});