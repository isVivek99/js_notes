// source : devtools.tech
// question : write a function to format currency value.
// eg:  i/p format(123456789) o/p 123,456,789
// eg: i/p format(13) o/p 13
// eg: i/p format('') o/p throw error

function format(n) {
  if (!n) {
    throw Error("expected length to the string, empty string was passed");
  }

  if (n.toString().length <= 3) return n.toString();

  const mystr = n.toString().split("");

  let iter = 0;
  let arr = [];
  for (i = 0; i < mystr.length; i++) {
    iter++;

    arr.push(mystr[i]);
    if (mystr.length - 1 !== i && iter === 3) {
      arr.push(",");
      iter = 0;
    }
  }

  return arr.join("");
}

console.log(format(123456789));

console.log(format(123));
