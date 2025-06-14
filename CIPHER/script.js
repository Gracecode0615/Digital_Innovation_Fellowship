let encryptBtn = document.getElementById('encrypt-btn');
let encryptInput = document.getElementById('encryptInput');
let plainInput = document.getElementById('plainInput');
let copyBtn = document.getElementById('copy-btn');

// Capitalize all input text
[encryptInput, plainInput].forEach(input => {
  input.oninput = () => {
    input.value = input.value.toUpperCase();
  };
});

// Atbash Cipher encryption function
function encrypt() {
  let text = plainInput.value.toUpperCase();
  let solved = '';

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char >= 'A' && char <= 'Z') {
      // Atbash formula: Z = A + (25 - (charCode - A))
      let newChar = String.fromCharCode(90 - (char.charCodeAt(0) - 65));
      solved += newChar;
    } else {
      // Keep non-alphabet characters the same
      solved += char;
    }
  }

  encryptInput.value = solved;
}

// Copy to clipboard function
function copyText() {
  encryptInput.select();
  encryptInput.setSelectionRange(0, 99999); // for mobile devices
  document.execCommand('copy');
  alert(`Copied to clipboard: ${encryptInput.value}`);
}

// Button event listeners
encryptBtn.addEventListener('click', encrypt);
copyBtn.addEventListener('click', copyText);
