const buttonSend = document.querySelector('#send')
const buttonOk = document.querySelector('#ok')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const namee = document.querySelector('#inname')
const lastName = document.querySelector('#inlast-name')
const tel = document.querySelector('#intel')
const birthInput = document.querySelector('#inbirth')
const city = document.querySelector('#incity')

buttonSend.addEventListener('click', sendButton)
function sendButton (event) {
    event.preventDefault()

    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    const dataNascimento = birthInput.value
    const dataNascimentoObj = new Date(dataNascimento)
    const anoNascimento = dataNascimentoObj.getFullYear()
    const mesNascimento = dataNascimentoObj.getMonth() + 1
    const diaNascimento = dataNascimentoObj.getDate() + 1

    const hoje = new Date()
    const anoAtual = hoje.getFullYear()
    const mesAtual = hoje.getMonth() + 1
    const diaAtual = hoje.getDate()

    var idade = anoAtual - anoNascimento;
    
    // Verifica se o aniversário já ocorreu este ano
    if (mesAtual <= mesNascimento && diaAtual < diaNascimento) {
        // Ainda não fez aniversário este ano
        idade--
    }
    
    
    document.querySelector("#pname p").innerText = `O nome do cliente é: ${namee.value}`
    document.querySelector("#plast-name p").innerText = `O sobrenome do cliente é: ${lastName.value}`
    document.querySelector("#ptel p").innerText = `O telefone do cliente é: ${tel.value}`
    document.querySelector("#pbirth p").innerText = `A idade do cliente é: ${idade}`
    document.querySelector("#pcity p").innerText = `A cidade do cliente é: ${city.value}`
}

buttonOk.addEventListener('click', okButton)
function okButton (event) {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
}