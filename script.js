const input = document.getElementById("user-input");
const btn = document.getElementById("btn");
const output = document.getElementById("output-code");
const selectedShift = document.querySelector('input[name="step"]')

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function caesarEncrypt(text, step) {
  return text.split('').map(char => {
    if (!alphabet.includes(char)) return char;

    const index = alphabet.indexOf(char);
    const shiftedIndex = (index + step) % alphabet.length;
    return alphabet[shiftedIndex];
  }).join('');
}

btn.addEventListener("click", () => {
  const text = input.value.trim().toLowerCase();
    
  const step = parseInt(selectedShift.value);
  const encryptedText = caesarEncrypt(text, step);
  output.textContent = encryptedText;
}); 