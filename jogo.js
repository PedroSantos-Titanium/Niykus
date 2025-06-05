// Dress up Kuromi game logic
// Imagens devem estar em "imagens/kuromi-base.png", "imagens/roupa1.png", etc.

const canvas = document.getElementById('kuromi-canvas');
const ctx = canvas.getContext('2d');

const camadas = {
  base: "imagens/kuromi-base.png",
  roupas: [
    { nome: "Vestido Roxo", img: "imagens/roupa-roxa.png" },
    { nome: "Vestido Rosa", img: "imagens/roupa2.png" },
    { nome: "Moletom Preto", img: "imagens/roupa3.png" },
    { nome: "Sem Roupa", img: "" }
  ],
  acessorios: [
    { nome: "Laço Rosa", img: "imagens/acessorio1.png" },
    { nome: "Tiara de Coração", img: "imagens/acessorio2.png" },
    { nome: "Nenhum", img: "" }
  ]
};

let roupaAtual = 0, acessorioAtual = 2;

function desenharKuromi() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const base = new Image();
  base.src = camadas.base;
  base.onload = () => {
    ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
    if (camadas.roupas[roupaAtual].img) {
      const roupa = new Image();
      roupa.src = camadas.roupas[roupaAtual].img;
      roupa.onload = () => {
        ctx.drawImage(roupa, 0, 0, canvas.width, canvas.height);
        if (camadas.acessorios[acessorioAtual].img) {
          const acc = new Image();
          acc.src = camadas.acessorios[acessorioAtual].img;
          acc.onload = () => ctx.drawImage(acc, 0, 0, canvas.width, canvas.height);
        }
      };
    } else if (camadas.acessorios[acessorioAtual].img) {
      const acc = new Image();
      acc.src = camadas.acessorios[acessorioAtual].img;
      acc.onload = () => ctx.drawImage(acc, 0, 0, canvas.width, canvas.height);
    }
  };
}

function criarOpcoes() {
  const opcoesRoupas = document.getElementById('opcoes-roupas');
  const opcoesAcessorios = document.getElementById('opcoes-acessorios');
  opcoesRoupas.innerHTML = '';
  opcoesAcessorios.innerHTML = '';
  camadas.roupas.forEach((r, i) => {
    const btn = document.createElement('div');
    btn.className = 'opcao-roupa' + (i === roupaAtual ? ' selected' : '');
    btn.innerText = r.nome;
    btn.onclick = () => {
      roupaAtual = i;
      criarOpcoes();
      desenharKuromi();
    };
    opcoesRoupas.appendChild(btn);
  });
  camadas.acessorios.forEach((a, i) => {
    const btn = document.createElement('div');
    btn.className = 'opcao-roupa' + (i === acessorioAtual ? ' selected' : '');
    btn.innerText = a.nome;
    btn.onclick = () => {
      acessorioAtual = i;
      criarOpcoes();
      desenharKuromi();
    };
    opcoesAcessorios.appendChild(btn);
  });
}

window.onload = () => {
  criarOpcoes();
  desenharKuromi();
};
