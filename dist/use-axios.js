"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAxios;

var _react = require("react");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useAxios(_ref) {
  var url = _ref.url,
      method = _ref.method,
      options = _ref.options,
      triggers = _ref.triggers;

  var _useState = (0, _react.useState)({
    response: null,
    error: null,
    loading: true
  }),
      _useState2 = _slicedToArray(_useState, 2),
      response = _useState2[0],
      setResponse = _useState2[1];

  (0, _react.useEffect)(function () {
    (0, _axios.default)(_objectSpread({
      url: url,
      method: method
    }, options)).then(function (res) {
      setResponse({
        response: res,
        error: null,
        loading: false
      });
    }).catch(function (error) {
      setResponse({
        response: null,
        error: error,
        loading: false
      });
    });
    return setResponse({
      loading: true
    });
  }, triggers);
  return response;
}