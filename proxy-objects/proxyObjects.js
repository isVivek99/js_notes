//The Proxy object enables you to create a proxy for another object,
//which can intercept and redefine fundamental operations for that object.

const target = {
  message1: "hello",
  message2: "vivek",
};

const handler = {
  //target: target object
  //prop:target objects value, which is being called, here messageX
  //receiver:the proxy object
  get(target, prop, receiver) {
    console.log(receiver, Reflect.get(...arguments));
    return "world";
  },
  set(obj, prop, value) {
    if (prop === "hello") {
      console.log("cannot set keys which already exist as values!");
    } else {
      return Reflect.set(...arguments);
    }
  },
};

const proxy = new Proxy(target, handler);
console.log(proxy.message1);
proxy.hello = "and";
