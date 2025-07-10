
// Function to encrypt plaintext using the Vigenère cipher
function vigenereEncrypt(plainText, key) {
    let encryptedText = '';

    // Convert both plaintext and key to uppercase
    plainText = plainText.toUpperCase();
    key = key.toUpperCase();
    console.log(plainText);
    console.log(key);

    // Loop through each character of the plaintext
    for (let i = 0, j = 0; i < plainText.length; i++) {
        let plainChar = plainText.charCodeAt(i);

        // Check if the character is a letter
        if (plainChar >= 65 && plainChar <= 90) {
            let keyChar = key.charCodeAt(j % key.length) - 65;
            let encryptedChar = ((plainChar - 65 + keyChar) % 26) + 65;
            encryptedText += String.fromCharCode(encryptedChar);
            j++;
        } else {
            // If the character is not a letter, leave it unchanged
            encryptedText += plainText.charAt(i);
        }
    }

    return encryptedText;
}

// Function to decrypt ciphertext using the Vigenère cipher
function vigenereDecrypt(cipherText, key) {
    let decryptedText = '';

    // Convert both ciphertext and key to uppercase
    cipherText = cipherText.toUpperCase();
    key = key.toUpperCase();

    // Loop through each character of the ciphertext
    for (let i = 0, j = 0; i < cipherText.length; i++) {
        let cipherChar = cipherText.charCodeAt(i);

        // Check if the character is a letter
        if (cipherChar >= 65 && cipherChar <= 90) {
            let keyChar = key.charCodeAt(j % key.length) - 65;
            let decryptedChar = ((cipherChar - 65 - keyChar + 26) % 26) + 65;
            decryptedText += String.fromCharCode(decryptedChar);
            j++;
        } else {
            // If the character is not a letter, leave it unchanged
            decryptedText += cipherText.charAt(i);
        }
    }

    return decryptedText;
}