# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript bug related to loose typing and the unintended concatenation of strings and numbers. The `foo` function adds its arguments.  However, if a string is passed, JavaScript performs string concatenation instead of addition.

## Bug
The `bug.js` file shows the buggy code. The `bar` function calls `foo`, expecting a numerical result. When a string is passed, however, the output is unexpected due to implicit type coercion.

## Solution
The `bugSolution.js` file presents a solution. The `bar` function now explicitly converts the input to a number, ensuring the addition operation behaves as expected regardless of the input type.