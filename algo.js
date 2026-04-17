const input = document.getElementById('titulo');
const textarea = document.getElementById('conteudo');

const titulodigitado = document.getElementById('titulo')
const conteudodigitado = document.getElementById('conteudo')
const novoTitulo = document.createElement('titulo');
const novoconteudo = document.createElement('conteudo');


novaDiv.appendChild(novoTitulo)
novaDiv.appendChild(novoconteudo)
const container = document.getElementById('container de notas');
container.appendChild(novaDiv);

const formulario = document.getElementById('form');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const valorinput = input.value
    const valortextarea = textarea.value
    const novaDiv = document.createElement('div');
    
});
