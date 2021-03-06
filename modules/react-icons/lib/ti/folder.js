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

var TiFolder = function TiFolder(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30 10h-10c0-1.8-1.5-3.3-3.3-3.3h-6.7c-2.8 0-5 2.2-5 5v16.6c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5v-13.3c0-2.8-2.2-5-5-5z m-20 0h6.7c0 1.8 1.5 3.3 3.3 3.3h10c0.9 0 1.7 0.8 1.7 1.7h-23.4v-3.3c0-1 0.8-1.7 1.7-1.7z m20 20h-20c-0.9 0-1.7-0.7-1.7-1.7v-11.6h23.4v11.6c0 1-0.8 1.7-1.7 1.7z' })
        )
    );
};

exports.default = TiFolder;
module.exports = exports['default'];