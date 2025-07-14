const input = document.getElementById("user-input");
const btn = document.getElementById("btn");
const output = document.getElementById("output-code");
const selectedShift = document.querySelector('input[name="step"]')
const btnDecrypt = document.getElementById("btn-decrypt")
const langSelect = document.getElementById("lang-select")

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const alphabetUk = ['а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я']


function caesarEncrypt(text, step) {
  return text.split('').map(el => {
    if (!alphabet.includes(el) && !alphabetUk.includes(el)) return el;
    if (langSelect.value === "en") {
       const index = alphabet.indexOf(el);
       const shiftedIndex = (index + step) % alphabet.length;
       return alphabet[shiftedIndex];
    } else {
      const index = alphabetUk.indexOf(el);
       const shiftedIndex = (index + step) % alphabetUk.length;
       return alphabetUk[shiftedIndex];
    }
  }).join('');
}

function ceasarDecrypt(text, step) {
  return text.split('').map(el => {
    if (!alphabet.includes(el) && !alphabetUk.includes(el)) return el;

    if (langSelect.value === "en") {
      const index = alphabet.indexOf(el);
      const shiftedIndex = (index - step + alphabet.length) % alphabet.length;
      return alphabet[shiftedIndex];
    } else {
      const index = alphabetUk.indexOf(el);
      const shiftedIndex = (index - step + alphabetUk.length) % alphabetUk.length;
      return alphabetUk[shiftedIndex];
    }
  }).join('');
}

btn.addEventListener("click", () => {
  const text = input.value.trim().toLowerCase();
    
  const step = parseInt(selectedShift.value);
  const encryptedText = caesarEncrypt(text, step);
  output.textContent = encryptedText;
}); 

btnDecrypt.addEventListener("click", () => {
  const text = input.value.trim().toLowerCase();
    
  const step = parseInt(selectedShift.value);
  const encryptedText = ceasarDecrypt(text, step);
  output.textContent = encryptedText;
}); 