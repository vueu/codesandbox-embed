'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var axios = _interopDefault(require('axios'));
var PropTypes = _interopDefault(require('prop-types'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var CodeSandbox = function (_Component) {
  inherits(CodeSandbox, _Component);

  function CodeSandbox() {
    classCallCheck(this, CodeSandbox);
    return possibleConstructorReturn(this, (CodeSandbox.__proto__ || Object.getPrototypeOf(CodeSandbox)).apply(this, arguments));
  }

  createClass(CodeSandbox, [{
    key: 'componentDidMount',
    value: async function componentDidMount() {
      var _props = this.props,
          id = _props.id,
          precheck = _props.precheck;

      var url = 'https://codesandbox.io/api/v1/sandboxes/' + id;

      try {
        var response = await axios.get(url);

        console.log(response.status);
      } catch (e) {
        console.log(e);

        throw new Error('The sandbox you requested does not exist!');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var id = this.props.id;


      return React__default.createElement('iframe', {
        src: 'https://codesandbox.io/embed/' + id,
        style: {
          width: '100%',
          height: '500px',
          border: '0',
          borderRadius: '4px',
          overflow: 'hidden'
        },
        sandbox: 'allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
      });
    }
  }]);
  return CodeSandbox;
}(React.Component);

CodeSandbox.propTypes = {
  id: PropTypes.string.isRequired,
  precheck: PropTypes.bool
};

module.exports = CodeSandbox;
