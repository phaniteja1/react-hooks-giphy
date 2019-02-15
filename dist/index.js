"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _useAxios2 = _interopRequireDefault(require("./use-axios.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Giphy(_ref) {
  var tag = _ref.tag,
      _ref$triggers = _ref.triggers,
      triggers = _ref$triggers === void 0 ? [] : _ref$triggers,
      config = _objectWithoutProperties(_ref, ["tag", "triggers"]);

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

  var title = config.title;
  return _react.default.createElement("div", null, loading && _react.default.createElement("p", null, "Loading..."), error && _react.default.createElement("p", null, "Error!"), data && _react.default.createElement("div", {
    className: "gif"
  }, title && _react.default.createElement("p", null, data.data.title), _react.default.createElement("img", {
    alt: "Gif",
    src: data.data.image_original_url
  })));
}

var _default = Giphy;
exports.default = _default;