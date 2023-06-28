// Can omit parameter list parentheses if there is only one
// userName => {...}
// () => {...}
// (userName, userAge) => {...}
// Can omit function body curly braces if there is just a return statement
number => {
    return number * 3;
}
number => number *3;
// Must tell JS that an object should be created and returned, not to define a function body
number => ({age: number});