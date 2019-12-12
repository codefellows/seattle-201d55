# Review Challenges

We will complete these review challenges together as there's time.

## Challenge 1

Write a piece of code that creates a variable `numberOfChugga` and sets the value of that variable to 4. Then, write code that uses that variable to print out the word `chugga` 4 times, and then at the end prints out `choo choo!` once.

## Challenge 2

Write a function called `getTwo` that takes in no parameters and returns the number 2.

## Challenge 3

Write a function called `addTwo` that takes in one parameter, a number, and returns 2 more than the input number.

Input | Output
------|-------
0     | 2
7     | 9
-5.4  | -3.4

## Challenge 4

Write a function called `repeat` that takes in two parameters, a string and a number, and returns the string repeated that many times, with spaces between repeats.

Input | Output
------|-------
`'a',0` | `''`
`'a',1` | `'a'`
`'a',2` | `'a a'`
`'a',4` | `'a a a a'`
`'abc',3` | `'abc abc abc'`

## Challenge 5

Write a function that takes in 2 parameters, a string and a number, and returns a string consisting of the number, followed by the string, followed by an 's' if the string should be pluralized based on the number.

Input      | Output
-|-
`'cookie', 1` | `'1 cookie'`
`'cookie', 2` | `'2 cookies'`
`'cookie', 12` | `'12 cookies'`
`'cookie', 0` | `'0 cookies'`
`'salmon', 1` | `'1 salmon'`
`'salmon', 2` | `'2 salmons'`
`'mouse', 3` | `'3 mouses'`

## Challenge 6

In what order will these `console.log` statements run?

```javascript
console.log(1);

function doStuff() {
  console.log(2);
}

console.log(3);

function doThings() {
  console.log(4);
  doStuff();
  console.log(5);
}

console.log(6);

doStuff();

console.log(7);

doThings();

console.log(8);
```
