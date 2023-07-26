import type { Block, Edit, Props, VElement, VNode } from "./types";

/*
Props | null: This is a union type that allows the props parameter to be either 
of type Props or null. Props is a type that 
is not specified in the code you provided, but it could represent
 the type of the properties or attributes expected for the element.
= {}: This is the default value assignment for the props parameter. 
It means that if no argument is passed when invoking the function, 
the props parameter will default to an empty object ({}).
*/

export const h = (
  type: string,
  props: Props | null = {},
  ...children: VNode[]
): VElement => ({
  type,
  props: props || {},
  children,
});

//{ type: 'div', props: { id: 'foo' }, children: [ 'hello' ] }

const render = (
  vnode: VNode,
  edits: Edit[] = [],
  path: number[] = []
): HTMLElement | Text => {
  if (typeof vnode === "string") return document.createTextNode(vnode);

  const el = document.createElement(vnode.type);

  if (vnode.props) {
    for (const name in vnode.props) {
      const value = vnode.props[name];
      if (value instanceof Hole) {
        edits.push({
          type: "attribute",
          path, // the path we need to traverse to get to the element
          attribute: name, // to set the value during mount/patch
          hole: value.key, // to get the value from props during mount/patch
        });
        continue;
      }
      (el as any)[name] = value;
    }
  }

  for (let i = 0; i < vnode?.children.length; i++) {
    const child = vnode.children[i];
    if (child instanceof Hole) {
      edits.push({
        type: "child",
        path,
        index: i,
        hole: child.key,
      });
      continue;
    }
    el.appendChild(render(child, edits, [...path, i]));
  }

  return el;
};

class Hole {
  key: string;
  constructor(key: string) {
    this.key = key;
  }
}

export const block = (fn: (props: Props) => VNode) => {
  // by using a proxy, we can intercept ANY property access on
  // the object and return a Hole instance instead.
  // e.g. props.any_prop => new Hole('any_prop')
  const proxy = new Proxy(
    {},
    {
      get(_, prop: string) {
        return new Hole(prop);
      },
    }
  );

  const edits: Edit[] = [];
  // we pass the proxy to the function, so that it can
  // replace property accesses with Hole placeholders
  const vnode = fn(proxy);

  const root = render(vnode, edits);

  // allows us to see instances of Hole inside the virtual node tree!
  console.log(vnode, root, root.childNodes, edits);
};

const Button = block(({ numberValue }) => {
  return h("button", { id: "name", className: "vivek" }, numberValue);
});

const Button1 = block(({ number }) => {
  return h("div", { id: "foo" }, "hello");
});
