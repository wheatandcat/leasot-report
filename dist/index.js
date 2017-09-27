#!/usr/bin/env node
"use strict";

require("babel-polyfill");

var _leasot = require("leasot");

var _leasot2 = _interopRequireDefault(_leasot);

var _fs = require("fs");

var _rimraf = require("rimraf");

var _rimraf2 = _interopRequireDefault(_rimraf);

var _mkdirp = require("mkdirp");

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _file = require("./utils/file");

var _Summary = require("./components/Summary");

var _Summary2 = _interopRequireDefault(_Summary);

var _Header = require("./components/Header");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var outputDir = "leasot-reports";

var summaryReport = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(items) {
    var reportFileContent;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return "<!DOCTYPE html>\n";

          case 2:
            _context.t0 = _context.sent;
            _context.t1 = (0, _server.renderToStaticMarkup)(_react2.default.createElement(
              _Header2.default,
              null,
              _react2.default.createElement(_Summary2.default, { items: items })
            ));
            reportFileContent = _context.t0 + _context.t1;
            _context.next = 7;
            return (0, _fs.writeFileSync)(outputDir + "/index.html", reportFileContent);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function summaryReport(_x) {
    return _ref.apply(this, arguments);
  };
}();

var start = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var list;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _rimraf2.default.sync(outputDir);

          case 2:
            _context2.next = 4;
            return _mkdirp2.default.sync(outputDir);

          case 4:
            _context2.next = 6;
            return (0, _file.files)(process.argv[2]);

          case 6:
            list = _context2.sent;
            _context2.next = 9;
            return summaryReport(list);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function start() {
    return _ref2.apply(this, arguments);
  };
}();

start();