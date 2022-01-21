// Julius Caesar protected his confidential information by encrypting it using a cipher. 
// Caesar's cipher shifts each letter by a number of letters. If the shift takes you past 
// the end of the alphabet, just rotate back to the front of the alphabet. In the case of 
// a rotation by 3, w, x, y, and z would map to z, a, b and c. Code the Caesar Cipher in 
// Javascript and submit it here.

function mod(n, m) { // found online for negative mods and performance
    return ((n % m) + m) % m; //Using this instead of n % m
  }

function enc_caesar(plaintext, shift) { // Original string, How much to shift
    // Create array with alphabet
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    // Create string that will be the encrypted text
    var enc_string = ""
   
    for (let i = 0; i < plaintext.length; i++) { // loop through plaintext
        if (plaintext[i] == " ") { // If blank space just skip and add space
            enc_string += " "
            continue;
        }
        for (let j = 0; j < alphabet.length; j++) { // Loop through alphabet array
            if (plaintext[i] == alphabet[j]) { // If matching
                enc_string += alphabet[ mod((j + shift), 26) ]; // Add and find modulus
                continue;
            }
        }
    } // Probably super inefficient since loops through multiple letters for no reason
      // Maybe the continue helps, I'm not sure

    console.log("Original String: " + plaintext); // Print original string
    console.log("Encrypted String: "  + enc_string); // Print encrypted stirng
    console.log();
}


enc_caesar("wxyz wxyz", 3);
enc_caesar("wxyz wxyz", -23); // Should be same as first one since 3 = 3-26 = -23 mod 26