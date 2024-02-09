//stack with min and max
// ● Instead of storing a single value in the stack we will store an object with current, max and min values.
// ● While adding the new value in the stack we will check if the stack is empty or not.
// ● If it is empty then add the current value as current, max and min values.
// ● Else get the previous value and compare it with the current item, if it is greater than the existing then replace the max, If it is less than the existing then replace the min.

function MinMaxStack() {
  const stack = [];
  let length = 0;

  this.push = (element) => {
    if (length === 0) {
      stack.push({ data: element, min: element, max: element });
      length += 1;
    } else {
      const peekedElement = this.stack.peek();
      let { min, max } = peekedElement;
      max = max > element.max ? max : element.max;
      min = min < element.min ? min : element.min;
      stack.push({ data: element, min: element, max: element });
      length++;
    }
  };

  this.peek = () => {
    return stack[length - 1];
  };
}
