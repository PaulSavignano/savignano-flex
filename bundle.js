'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

var classNameMap = {
  alignItems: {
    center: 'align-items-center',
    'flex-start': 'align-items-flex-start',
    'flex-end': 'align-items-flex-end'
  },
  alignSelf: {
    stretch: 'align-self-stretch',
    center: 'align-self-center',
    start: 'align-self-start',
    end: 'align-self-end',
    'flex-start': 'align-self-flex-start',
    'flex-end': 'align-self-flex-end'
  },
  flex: {
    '0 0 200px': 'flex-0-0-200px',
    '0 0 250px': 'flex-0-0-250px',
    '0 0 300px': 'flex-0-0-300px',
    '0 0 310px': 'flex-0-0-310px',
    '0 0 auto': 'flex-0-0-auto',
    '0 1 100px': 'flex-0-1-100px',
    '1 1 auto': 'flex-1-1-auto',
    '2 2 auto': 'flex-2-2-auto',
    '3 3 auto': 'flex-3-3-auto'
  },
  flexFlow: {
    row: 'flex-flow-row',
    'row wrap': 'flex-flow-row-wrap',
    column: 'flex-flow-column'
  },
  justifyContent: {
    center: 'justify-content-center',
    'flex-start': 'justify-content-flex-start',
    'flex-end': 'justify-content-flex-end',
    'space-around': 'justify-content-space-around',
    'space-between': 'justify-content-space-between'
  },
  justifySelf: {
    stretch: 'justify-self-stretch',
    center: 'justify-self-center',
    start: 'justify-self-start',
    end: 'justify-self-end',
    'flex-start': 'justify-self-flex-start',
    'flex-end': 'justify-self-flex-end'
  },
  padding: {
    0: 'padding-0px',
    5: 'padding-5px',
    10: 'padding-10px'
  },
  margin: {
    '-5': 'margin--5px',
    0: 'margin-0px',
    10: 'margin-10px',
    2.5: 'margin-2.5px',
    5: 'margin-5px'
  }
};

var classNames = function classNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var className = args.filter(Boolean).map(function (arg) {
    return arg;
  }).join(' ');
  return className;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function handleClassNameMap(props) {
  var alignItems = props.alignItems,
      className = props.className,
      alignSelf = props.alignSelf,
      justifySelf = props.justifySelf,
      flex = props.flex,
      flexFlow = props.flexFlow,
      justifyContent = props.justifyContent,
      padding = props.padding,
      margin = props.margin,
      rest = _objectWithoutProperties(props, ["alignItems", "className", "alignSelf", "justifySelf", "flex", "flexFlow", "justifyContent", "padding", "margin"]);

  var styleProps = {
    alignItems: alignItems,
    alignSelf: alignSelf,
    justifyContent: justifyContent,
    justifySelf: justifySelf,
    flex: flex,
    flexFlow: flexFlow,
    padding: padding,
    margin: margin
  };
  var classesAndStyles = Object.keys(styleProps).filter(function (k) {
    return styleProps[k];
  }).reduce(function (a, v) {
    var result = a;

    if (classNameMap[v] && classNameMap[v][styleProps[v]]) {
      result.classes = [].concat(_toConsumableArray(result.classes || []), [classNameMap[v][styleProps[v]]]);
      return result;
    }

    console.error("\n      handleClassNameMap: ".concat([v], " ").concat(styleProps[v], " does not have a mapping in the classNameMap and inline style is being defined for use in styling. \n      You may add a mapping in classNameMap.js and a css declaration in _classNameMap.scss for increased performace by elminating the cost of style redefinition.\n    "));
    result.styles = _objectSpread({}, result.styles, _defineProperty({}, v, styleProps[v]));
    return result;
  }, {});
  return _objectSpread({
    className: classNames.apply(void 0, [className].concat(_toConsumableArray(classesAndStyles.classes || []))),
    style: _objectSpread({}, classesAndStyles.styles || {})
  }, rest);
}

function Flex(props) {
  var _handleClassNameMap = handleClassNameMap(props),
      children = _handleClassNameMap.children,
      className = _handleClassNameMap.className,
      Component = _handleClassNameMap.component,
      rest = _objectWithoutProperties(_handleClassNameMap, ["children", "className", "component"]);

  return React.createElement(Component, Object.assign({}, rest, {
    className: classNames('Flex', className)
  }), children);
}

Flex.defaultProps = {
  component: 'div'
};

module.exports = Flex;
