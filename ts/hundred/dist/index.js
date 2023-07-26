"use strict";
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
// Object.defineProperty(exports, "__esModule", { value: true });
// block = h = void 0;
/*
Props | null: This is a union type that allows the props parameter to be either
of type Props or null. Props is a type that
is not specified in the code you provided, but it could represent
 the type of the properties or attributes expected for the element.
= {}: This is the default value assignment for the props parameter.
It means that if no argument is passed when invoking the function,
the props parameter will default to an empty object ({}).
*/
var h = function (type, props) {
  if (props === void 0) {
    props = {};
  }
  var children = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    children[_i - 2] = arguments[_i];
  }
  return {
    type: type,
    props: props || {},
    children: children,
  };
};
h = h;
//{ type: 'div', props: { id: 'foo' }, children: [ 'hello' ] }
var render = function (vnode, edits, path) {
  if (edits === void 0) {
    edits = [];
  }
  if (path === void 0) {
    path = [];
  }
  if (typeof vnode === "string") return document.createTextNode(vnode);
  var el = document.createElement(vnode.type);
  if (vnode.props) {
    for (var name_1 in vnode.props) {
      var value = vnode.props[name_1];
      if (value instanceof Hole) {
        edits.push({
          type: "attribute",
          path: path,
          attribute: name_1,
          hole: value.key, // to get the value from props during mount/patch
        });
        continue;
      }
      el[name_1] = value;
    }
  }
  for (
    var i = 0;
    i < (vnode === null || vnode === void 0 ? void 0 : vnode.children.length);
    i++
  ) {
    var child = vnode.children[i];
    if (child instanceof Hole) {
      edits.push({
        type: "child",
        path: path,
        index: i,
        hole: child.key,
      });
      continue;
    }
    el.appendChild(
      render(
        child,
        edits,
        __spreadArray(__spreadArray([], path, true), [i], false)
      )
    );
  }
  return el;
};
var Hole = /** @class */ (function () {
  function Hole(key) {
    this.key = key;
  }
  return Hole;
})();
var block = function (fn) {
  // by using a proxy, we can intercept ANY property access on
  // the object and return a Hole instance instead.
  // e.g. props.any_prop => new Hole('any_prop')
  var proxy = new Proxy(
    {},
    {
      get: function (_, prop) {
        return new Hole(prop);
      },
    }
  );
  const edits = [];
  // we pass the proxy to the function, so that it can
  // replace property accesses with Hole placeholders
  const vnode = fn(proxy);

  const root = render(vnode, edits);

  // allows us to see instances of Hole inside the virtual node tree!
  console.log(vnode, root, root.childNodes, edits);
};
block = block;
var Button = (0, block)(function (_a) {
  var numberValue = _a.numberValue;
  return (0, h)("button", { id: "name", className: "vivek" }, numberValue);
});
var Button1 = (0, block)(function (_a) {
  var number = _a.number;
  return (0, h)("div", { id: "foo" }, "hello");
});
