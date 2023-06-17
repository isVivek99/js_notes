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
console.log(h("div", { id: "foo" }, "hello"));
