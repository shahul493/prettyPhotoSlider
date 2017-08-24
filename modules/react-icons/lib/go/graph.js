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

var GoGraph = function GoGraph(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm27.5 10h-7.5v25h7.5v-25z m10 7.5h-7.5v17.5h7.5v-17.5z m-35 20v-5h2.5v-2.5h-2.5v-5h2.5v-2.5h-2.5v-5h2.5v-2.5h-2.5v-5h2.5v-2.5h-2.5v-5h2.5v-2.5h-5v40h40v-2.5h-37.5z m15-15h-7.5v12.5h7.5v-12.5z' })
        )
    );
};

exports.default = GoGraph;
module.exports = exports['default'];