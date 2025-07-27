/**
 * ROT13 decoder
 * 
 * This script decodes a ROT13-encoded string and prints the result.
 * ROT13 is a simple letter substitution cipher that replaces a letter 
 * with the 13th letter after it in the alphabet.
 */

// The encoded string to decode
const encodedString = 'Pbatenghyngvbaf ba ohvyqvat n pbqr-rqvgvat ntrag!';

/**
 * Function to decode a ROT13-encoded string
 * @param {string} str - The ROT13-encoded string
 * @return {string} The decoded string
 */
function rot13Decode(str) {
    return str.replace(/[a-zA-Z]/g, function(char) {
        // Get the character code
        const charCode = char.charCodeAt(0);
        
        // Handle uppercase letters (A-Z: 65-90)
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        }
        // Handle lowercase letters (a-z: 97-122)
        else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
        }
        // Return non-alphabetic characters unchanged
        return char;
    });
}

// Decode and print the message
const decodedString = rot13Decode(encodedString);
console.log(decodedString);