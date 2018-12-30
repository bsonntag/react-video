'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Video = function (_Component) {
  _inherits(Video, _Component);

  function Video() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.ref = (0, _react.createRef)(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Video, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          play = _props.play,
          srcObject = _props.srcObject,
          volume = _props.volume;


      if (srcObject) {
        this.ref.current.srcObject = srcObject;
      }

      if (play) {
        this.ref.current.play();
      }

      if (Number.isFinite(volume)) {
        this.ref.current.volume = volume;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          play = _props2.play,
          srcObject = _props2.srcObject,
          volume = _props2.volume;


      if (srcObject !== prevProps.srcObject) {
        this.ref.current.srcObject = srcObject;
      }

      if (play && !prevProps.play) {
        this.ref.current.play();
      }

      if (!play && prevProps.play) {
        this.ref.current.pause();
      }

      if (Number.isFinite(volume) && volume !== prevProps.volume) {
        this.ref.current.volume = volume;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var videoProps = Object.keys(this.props).reduce(function (result, key) {
        if (!['play', 'srcObject', 'volume'].includes(key)) {
          result[key] = _this2.props[key];
        }

        return result;
      }, {});

      return _react2.default.createElement('video', _extends({}, videoProps, {
        ref: this.ref
      }));
    }
  }]);

  return Video;
}(_react.Component);

Video.propTypes = {
  autoPlay: _propTypes2.default.bool,
  controls: _propTypes2.default.bool,
  muted: _propTypes2.default.bool,
  onPause: _propTypes2.default.func,
  onPlay: _propTypes2.default.func,
  play: _propTypes2.default.bool,
  src: _propTypes2.default.string,
  srcObject: _propTypes2.default.object,
  volume: _propTypes2.default.number
};
exports.default = Video;