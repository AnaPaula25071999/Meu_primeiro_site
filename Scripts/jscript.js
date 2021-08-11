
const obj_amarelo = document.querySelector('#troca_amarelo')
const obj_azul = document.querySelector('#troca_azul')
const obj_roxo = document.querySelector('#troca_roxo')
const obj_troca_cor = document.querySelector('.plano1')

obj_amarelo.addEventListener('click', FunTrocaCorFundoAmarelo)
obj_azul.addEventListener('click', FunTrocaCorFundoAzul)
obj_roxo.addEventListener('click', FunTrocaCorFundoRoxo)

function FunTrocaCorFundoAmarelo() {
    obj_troca_cor.setAttribute('class', obj_amarelo.value)

}

function FunTrocaCorFundoAzul() {
    obj_troca_cor.setAttribute('class', obj_azul.value)
   
}

function FunTrocaCorFundoRoxo() {
    obj_troca_cor.setAttribute('class', obj_roxo.value)
   
}



const obj_nome_pergunta = document.querySelector('#nome_pergunta')
const obj_botao_pergunta = document.querySelector('#bt_troca_nome')
const obj_div_pergunta = document.querySelector('.pergunta')
const obj_seu_nome = document.querySelector('#seu_nome')

obj_botao_pergunta.addEventListener('click', FunMudaNome)


function FunMudaNome() {

    if (obj_nome_pergunta.value != '' ){

        obj_seu_nome.style.color = 'purple'
        obj_seu_nome.innerText = 'Senhor(a). ' + obj_nome_pergunta.value


    }
    else{
        alert('Digite algo no campo!')
    }
}



const obj_fonte_nome = document.querySelector('.cb_fonte_nome')

const obj_div_nome = document.querySelector('.nome')


obj_fonte_nome.addEventListener('click', FunMudaFonteNome)


function FunMudaFonteNome() {
    if (obj_fonte_nome.checked) {
        obj_div_nome.setAttribute('id', obj_fonte_nome.value)
    }
    else{
        obj_div_nome.removeAttribute('id', obj_fonte_nome.value)
    }
}