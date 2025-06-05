const form = document.getElementById('form-mensagem');
const lista = document.getElementById('mensagens-lista');

function renderizarMensagens() {
  const msgs = JSON.parse(localStorage.getItem('mensagens_kuromi') || '[]');
  lista.innerHTML = msgs.map(m => `<div class="msg-item">${m}</div>`).join('');
}

form.onsubmit = e => {
  e.preventDefault();
  const msg = document.getElementById('mensagem').value.trim();
  if (msg) {
    const msgs = JSON.parse(localStorage.getItem('mensagens_kuromi') || '[]');
    msgs.push(msg);
    localStorage.setItem('mensagens_kuromi', JSON.stringify(msgs));
    document.getElementById('mensagem').value = '';
    renderizarMensagens();
  }
};

renderizarMensagens();
