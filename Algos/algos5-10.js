/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";         // ( () () )
const expected1 = true;

const str2 = "N(0(p)3";               // ( ( ) 
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";          // ( ) ) (
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.


/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.

 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
    var stack = [];
    for(var char of str){
        if (char === "("){
            stack.push(char)
        }
        else if( char === ")"){
            if (stack.length === 0){
                return false;
            }
            stack.pop(char)
        }
    }
    return stack.length === 0
}

console.log(parensValid(str1)) // expected: true
console.log(parensValid(str2)) // expected: false
console.log(parensValid(str3)) // expected: false


/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const strA = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";    // ( {} [ ({}) ] ) [{}]
const expectedA = true;

const strB = "D(i{a}l[ t]o)n{e";          // ({} []) {
const expectedB = false;

const strC = "A(1)s[O (n]0{t) 0}k";       // () [(] {) }
const expectedC = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.

 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    var stack = [];
    for(var char of str){
        if (char === "(" || char ==="[" || char==="{") {
            stack.push(char)
            console.log("opening", char, stack)
        }
        else if( char === ")" || char==="]" || char==="}"){
            if (stack.length === 0){
                return false;
            }
            if (stack[stack.length-1] ===char){
                stack.pop(char)
            } 
        }
        console.log("opening", char, stack)
    }
    return stack.length === 0
}

console.log(bracesValid(strA)) // expected: true
console.log(bracesValid(strB)) // expected: false
console.log(bracesValid(strC)) // expected: false