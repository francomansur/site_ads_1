const params = new URLSearchParams(window.location.search);

const id = params.get('id');
const v_nome = params.get('nome');
const v_curso = params.get('curso');

const botao = document.getElementById('btn');

if (id) {
    botao.textContent = 'Salvar';
    document.querySelector('#nome').value = v_nome;
    document.querySelector('#curso').value = v_curso;
} else {
    botao.textContent = 'Cadastrar';
}

document.querySelector('form').addEventListener('click', function(e) {
  e.preventDefault();
  alert(`Aluno ${id} Salvo com sucesso!`);
  window.location.href = 'index.html';
});