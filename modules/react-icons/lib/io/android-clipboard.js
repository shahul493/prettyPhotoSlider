'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = require('react-icon-base');

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IoAndroidClipboard = function IoAndroidClipboard(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.6 6.3c1.8 0 3.4 1.5 3.4 3.3v24.5c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-24.5c0-1.8 1.6-3.3 3.4-3.3h6.8c0.5-2.2 2.5-3.8 4.8-3.8s4.3 1.6 4.8 3.8h6.8z m-11.6 0c-0.9 0-1.6 0.7-1.6 1.6s0.7 1.7 1.6 1.7 1.6-0.8 1.6-1.7-0.7-1.6-1.6-1.6z m11.9 28.1v-25h-3.1v5.6h-17.5v-5.6h-3.2v25h23.8z' })
        )
    );
};

exports.default = IoAndroidClipboard;
module.exports = exports['default'];