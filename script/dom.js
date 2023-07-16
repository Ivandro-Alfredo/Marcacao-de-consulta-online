var btn = document.getElementById('botao');
var nome = document.forms[0].elements['nome'].value;

btn.addEventListener('click', () => {
	alert('Consulta Marcada, Enviaremos uma mensagem de confirmação.')
});
