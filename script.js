let decryptCodecode = document.getElementById('code')
let key = document.getElementById('key')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    if (!code.value && !key.value) {
        alert('enter code to encrypt and key')
    } else if (!code.value) {
        alert('enter code to encrypt')
    } else if (!key.value) {
        alert('enter key')
    } else {
        let encryptedData = code.value ^ key.value
        result.textContent = encryptedData
    }
})


let decryptCode = document.getElementById('decrypt-code')
let decryptKey = document.getElementById('decrypt-key')
const decryptBtn = document.querySelector('#decrypt-btn')
const decryptResult = document.querySelector('#decrypt-result')

decryptBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (!decryptCode.value && !decryptKey.value) {
        alert('enter code to decrypt and key')
    } else if (!decryptCode.value) {
        alert('enter code to decrypt')
    } else if (!decryptKey.value) {
        alert('enter key')
    } else {
        let decryptedData = decryptKey.value ^ decryptCode.value
        decryptResult.textContent = decryptedData
    }
})