let resposta = document.getElementById('resposta')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click' , ()=>{
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let titulo = Number(document.getElementById('titulo').value)

    const cidadao = new Eleitor()

    cidadao.nome = nome
    cidadao.idade = idade
    cidadao.titulo = titulo


    let mensagem = cidadao.verificaVoto()

    resposta.innerHTML = ''
    resposta.innerHTML += `o eleitor ${cidadao.nome} <br>`
    resposta.innerHTML += ` tem ${cidadao.idade} anos de idade<br>`
    resposta.innerHTML += mensagem + '<br>'


})