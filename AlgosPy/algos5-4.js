// Given in an alumni interview in 2021.
// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears. 

// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.


const str1 = "aaaabbcdddaaa";
const expected1 = "a4b2cd3a3"; //either of these are acceptable based on the parameters of the algo
const expected1b = "a4bbcd3a3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "ccbb";
const expected4 = "ccbb";

const str5 = "abbbbbbbbbbbbbbbbb"
const expected5 = "ab17"

/**
* Encodes the given string such that duplicate characters appear once followed
* by a number representing how many times the char occurs. Only encode strings
* when the result yields a shorter length.
* - Time: O(?).
* - Space: O(?).
* @param {string} str The string to encode.
* @returns {string} The given string encoded.
*/
// RIOT  Read Input Output Talk

function encodeStr(str) {
    let compressed = ""
    let stringArray = str.split("")
    for (let i = 0; i < stringArray.length; i++){
        let count = 1 
        let letter = stringArray[i]
        while (i < stringArray.length - 1 && stringArray[i] === stringArray[i+1]){
            count++ 
            i++
        }
        if (count === 1){
            compressed +=letter 
        }
        else if(count === 2){
            compressed += letter + letter
        }
        else {
            compressed += letter + count
        }
    }
    return compressed
}

console.log(encodeStr(str1)) // Expected: "a4b2cd3a3" or "a4bbcd3a3";
console.log(encodeStr(str2)) // Expected: ""
console.log(encodeStr(str3)) // Expected: a
console.log(encodeStr(str4)) // Expected: ccbb
console.log(encodeStr(str5)) // Expected: ab17