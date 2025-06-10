const manhwas = [
  {
    nome: "Lágrimas Sobre Flores Murchas",
    desc: "",
    pasta: "lagrimas"
  },
  {
    nome: "Flores São Iscas",
    desc: "",
    pasta: "flores"
  },
  {
    nome: "Selfish Romance",
    desc: "",
    pasta: "selfish"
  }
  // ...adicione mais manhwas aqui...
];

const urlParams = new URLSearchParams(window.location.search);
const idx = parseInt(urlParams.get('idx')) || 0;
const manhwa = manhwas[idx];

document.getElementById('manhwa-titulo').innerText = manhwa.nome;
document.getElementById('manhwa-desc').innerText = manhwa.desc;

// Preencher seletor de capítulos (do maior para o menor)
const capituloSel = document.getElementById('capitulo');
for (let i = 56; i >= 1; i--) {
  const opt = document.createElement('option');
  opt.value = i;
  opt.innerText = `Capítulo ${i}`;
  capituloSel.appendChild(opt);
}

// Carregar progresso salvo
const progressoKey = `progresso_${manhwa.pasta}`;
const salvo = JSON.parse(localStorage.getItem(progressoKey) || '{}');
if (salvo.capitulo) capituloSel.value = salvo.capitulo;

// Carregar páginas do capítulo selecionado
function carregarPaginas() {
  const cap = capituloSel.value;
  localStorage.setItem(progressoKey, JSON.stringify({ capitulo: cap }));
  const container = document.getElementById('paginas-container');
  container.innerHTML = '';
  // Tenta carregar até 55 páginas por capítulo
  for (let p = 1; p <= 56; p++) {
    const imgPath = `manhwas/${manhwa.pasta}/capitulo${cap}_${p}.jpg`;
    const img = document.createElement('img');
    img.src = imgPath;
    img.alt = `Página ${p}`;
    img.onerror = function() { this.style.display = 'none'; };
    img.className = 'pagina-manhwa';
    container.appendChild(img);
  }
}
capituloSel.addEventListener('change', carregarPaginas);
carregarPaginas();

// Botão "Voltar ao topo"
const btnTopo = document.getElementById('btn-topo');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    btnTopo.style.display = 'flex';
  } else {
    btnTopo.style.display = 'none';
  }
});
btnTopo.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
