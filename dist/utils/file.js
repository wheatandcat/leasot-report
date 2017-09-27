"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.files = undefined;

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _leasot = require("leasot");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var todos = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
    var contents, filetype, list;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _fs2.default.readFileSync(file, "utf8");

          case 2:
            contents = _context.sent;
            _context.next = 5;
            return _path2.default.extname(file);

          case 5:
            filetype = _context.sent;
            _context.next = 8;
            return (0, _leasot.parse)({
              ext: filetype,
              content: contents,
              fileName: file
            });

          case 8:
            list = _context.sent;
            return _context.abrupt("return", (0, _leasot.reporter)(list, {
              reporter: "json",
              spacing: 2
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function todos(_x) {
    return _ref.apply(this, arguments);
  };
}();

var files = exports.files = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(p) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var list;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _fs2.default.readdirSync(p);

          case 2:
            list = _context3.sent;
            _context3.next = 5;
            return Promise.all(list.map(function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(f) {
                var fp, tmp;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _path2.default.join(p, f);

                      case 2:
                        fp = _context2.sent;

                        if (!_fs2.default.statSync(fp).isDirectory()) {
                          _context2.next = 8;
                          break;
                        }

                        _context2.next = 6;
                        return files(fp, data);

                      case 6:
                        _context2.next = 13;
                        break;

                      case 8:
                        _context2.next = 10;
                        return todos(fp);

                      case 10:
                        tmp = _context2.sent;
                        _context2.next = 13;
                        return data.push.apply(data, _toConsumableArray(JSON.parse(tmp)));

                      case 13:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, undefined);
              }));

              return function (_x4) {
                return _ref3.apply(this, arguments);
              };
            }()));

          case 5:
            return _context3.abrupt("return", data);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function files(_x3) {
    return _ref2.apply(this, arguments);
  };
}();