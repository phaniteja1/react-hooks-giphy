"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

var _useAxios2 = _interopRequireDefault(require("./use-axios.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Giphy(_ref) {
  var tag = _ref.tag,
      _ref$triggers = _ref.triggers,
      triggers = _ref$triggers === void 0 ? [] : _ref$triggers;
  var key = "V6AU97qCSCYVmbIC5UDppEiVM1xnuO9E";
  var giphyUrl = "https://api.giphy.com/v1/gifs/random";

  var _useAxios = (0, _useAxios2.default)({
    url: giphyUrl,
    method: "GET",
    triggers: triggers,
    options: {
      params: {
        api_key: key,
        tag: tag
      }
    }
  }),
      response = _useAxios.response,
      loading = _useAxios.loading,
      error = _useAxios.error;

  var _ref2 = response || {},
      data = _ref2.data;

  return _react.default.createElement("div", null, loading && _react.default.createElement("p", null, "Loading..."), error && _react.default.createElement("p", null, "Error!"), data && _react.default.createElement("div", {
    className: "gif"
  }, _react.default.createElement("p", null, data.data.title), _react.default.createElement("img", {
    alt: "Gif",
    src: data.data.image_original_url
  })));
}

var _default = Giphy;
exports.default = _default;