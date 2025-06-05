// Lista de manhwas (adicione mais conforme desejar)
const manhwas = [
  {
    nome: "Lágrimas Sobre Flores Murchas",
    capa: "imagens/capas/manhwa1.jpeg",
  },
  {
    nome: "Flores São Iscas",
    capa: "imagens/capas/manhwa2.jpg",
  },
  {
    nome: "Selfish Romance",
    capa: "imagens/capas/manhwa3.jpeg",
  }
  // ...adicione mais manhwas aqui...
];

window.onload = () => {
  // Preencher lista de manhwas
  const lista = document.getElementById('manhwa-lista');
  if (lista) {
    manhwas.forEach((m, idx) => {
      const card = document.createElement('div');
      card.className = 'manhwa-card';
      card.onclick = () => window.location.href = `manhwa.html?idx=${idx}`;
      card.innerHTML = `
        <img src="${m.capa}" alt="${m.nome}"/>
        <span>${m.nome}</span>
        <div class="manhwa-desc">${m.desc}</div>
      `;
      lista.appendChild(card);
    });
  }

  // Avatar flutuante
  const avatar = document.getElementById('avatar-flutuante');
  if (avatar) setTimeout(() => avatar.style.display = 'none', 10000);

  // Música só no menu principal
  const musica = document.getElementById('musica-menu');
  if (musica) {
    musica.volume = 0.15;
  }
};
