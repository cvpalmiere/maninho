/* =============================================
   NOSSO JARDIM — Diário de Gestação
   Lógica completa — localStorage, PDF, Senha
   Para: Mana Mari
   Versão 2.0 — Planta contínua + Sono + Fotos + Nomes + Peso
   ============================================= */

// ==============================================
// CONFIGURAÇÕES
// ==============================================
const SENHA_CORRETA = 'ManaMari';
const NOME_MAE = 'Mana Mari';

// Frases por semana
const FRASES_SEMANAIS = [
    'Lucas 1:42 — "Bendita és tu entre as mulheres, e bendito é o fruto do teu ventre."',
    'Lucas 1:45 — "Bem-aventurada a que creu, pois se hão de cumprir as coisas que da parte do Senhor lhe foram ditas."',
    'Salmos 127:3 — "Eis que os filhos são herança do Senhor, e o fruto do ventre, o seu galardão."',
    'Provérbios 17:17 — "Em todo o tempo ama o amigo, e na angústia se faz o irmão."',
    'Provérbios 18:24 — "Há amigo mais chegado do que um irmão."',
    'Provérbios 27:9 — "O óleo e o perfume alegram o coração; assim o faz a doçura do amigo pelo seu conselho cordial."',
    '1 Samuel 18:3 — "Jônatas e Davi fizeram aliança; porque Jônatas o amava como à sua própria alma."',
    'Salmos 133:1 — "Oh! quão bom e quão suave é que os irmãos vivam em união!"',
    'Filemom 1:16 — "Não mais como servo, antes mais do que servo, como irmão amado."',
    'Provérbios 31:28-29 — "Levantam-se seus filhos e lhe chamam ditosa; seu marido a louva..."',
    'Provérbios 31:31 — "Dai-lhe do fruto das suas mãos, e de dentro das portas a louvarão as suas obras."',
    'Rute 3:11 — "Toda a cidade do meu povo sabe que és mulher virtuosa."',
    'Mari Maria, eu tenho certeza que uma das melhores decisões da minha vida foi ter te chamado pra liderar comigo.',
    'Mariano Jr está ficando GIGANTE, vem ai Mariano Jr na VNL?',
    'Que Deus de muita saúde e acompanhe o(a) maninho(a) por onde ele for.',
    'Já começou a colocar o(a) maninho(a) pra escutar Mozart?',
    'Já posso começar a ir na sua casa pra faxinar já que você tá BEM grávida?',
    'Confesso que eu passo muitos momentos do meu dia orando pelo maninho.',
    'Preciso começar a pensar na roupa do(a) maninho(a) pro meu casamento.',
    'Preciso terminar meu site logo pra ajudar o maninho nos estudos.',
    'Deus está cuidando de cada detalhe. Semana 21.',
    'Sua força me inspira, Mana Mari. Semana 22.',
    'O maninho já reconhece sua voz. Semana 23.',
    'Cada dia mais perto de conhecer esse milagre. Semana 24.',
    'Você está radiante. Semana 25.',
    'O amor que você já sente é só uma amostra do que vem. Semana 26.',
    'Deus escolheu você para ser mãe desse presente. Semana 27.',
    'Seu corpo é templo, seu ventre é jardim. Semana 28.',
    'O maninho já sonha, sabia? Semana 29.',
    'Faltam poucas semanas para o maior encontro da sua vida. Semana 30.',
    'Você é a mulher mais corajosa que eu conheço. Semana 31.',
    'Deus está terminando Sua obra-prima. Semana 32.',
    'Ansiosa para ver o rostinho dele(a). Semana 33.',
    'Cada chute é um "te amo" silencioso. Semana 34.',
    'Você nunca mais estará sozinha — nem por um segundo. Semana 35.',
    'O quartinho está quase pronto, o coração também. Semana 36.',
    'Mana Mari, você já é a melhor mãe do mundo. Semana 37.',
    'A qualquer momento agora... Semana 38.',
    'Estamos de prontidão! Semana 39.',
    'Bem-vindo(a) ao mundo, maninho(a). Nós já te amamos. Semana 40.'
];

const FRASES_ANIMAIS = {
    joaninha: 'Assim como a joaninha traz sorte, você já é nossa maior bênção.',
    borboleta: 'A borboleta nos lembra que toda transformação é linda. Você está nos transformando.',
    beijaflor: 'O beija-flor bate as asas tão rápido quanto meu coração quando penso em vocês.',
    coelhinho: 'Que seu sono seja tão tranquilo quanto este coelhinho.'
};

const FRASES_REGAGEM = [
    'Quem rega o jardim colhe flores. Quem ama, colhe sorrisos.',
    'Cada gota de água é uma oração respondida.',
    'O jardim cresce com água. A família cresce com amor.',
    'Regar é um ato de fé. Você acredita no que ainda não vê.',
    'Pequenos cuidados diários geram grandes flores.',
    'Assim como esta planta, sua família está criando raízes profundas.',
    'Deus rega seu ventre com vida. Você rega este jardim com amor.',
    'Hoje é dia de cuidar de você também, Mana Mari.',
    'Cada regada é um lembrete: você não está sozinha.',
    'O maninho sente todo esse amor, mesmo aí dentro.'
];

const FRASES_MARCOS = {
    teste_positivo: 'Duas linhas que mudaram tudo. O maninho já era amado antes de existir.',
    primeira_consulta: 'Ouvir o coração pela primeira vez... não existe som mais lindo.',
    primeira_eco: 'Te vi pela primeira vez e meu coração já era seu.',
    descobriu_sexo: 'Agora já sabemos se é maninho ou maninha!',
    primeiro_chute: 'E de repente, o amor que eu não sabia que cabia em mim, coube. Você mexeu.',
    parceiro_sentiu: 'Agora todo mundo sente o que você já sabia: ele(a) está aqui.',
    cha_bebe: 'Celebramos sua chegada com amor, presentes e muita expectativa.',
    quartinho: 'Cada cantinho arrumado é um pedacinho de espera feliz.',
    mala_maternidade: 'Mala pronta. Coração também. Agora é só esperar o grande dia.'
};

// ==============================================
// DADOS DO LOCALSTORAGE
// ==============================================
const STORAGE_KEY = 'nosso_jardim_dados';

function dadosIniciais() {
    return {
        configurado: false,
        semanaAtual: 1,
        dataDUM: null,
        dataDPP: null,
        desejos: [],
        cartas: [],
        marcos: {},
        frasesSalvas: [],
        streak: 0,
        ultimaRegagem: null,
        primeiraVisita: true,
        registrosSono: [],
        fotosBarriga: [],
        nomesFavoritos: [],
        registrosPeso: []
    };
}

function carregarDados() {
    const dadosSalvos = localStorage.getItem(STORAGE_KEY);
    if (dadosSalvos) {
        try {
            return JSON.parse(dadosSalvos);
        } catch(e) {
            return dadosIniciais();
        }
    }
    return dadosIniciais();
}

function dadosIniciais() {
    return {
        configurado: false,
        semanaAtual: 1,
        dataDUM: null,
        dataDPP: null,
        desejos: [],
        cartas: [],
        marcos: {},
        frasesSalvas: [],
        streak: 0,
        ultimaRegagem: null,
        primeiraVisita: true,
        registrosSono: [],
        fotosBarriga: [],
        nomesFavoritos: [],
        registrosPeso: []
    };
}

let dados = carregarDados();

function salvarDados() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

// ==============================================
// ELEMENTOS DO DOM
// ==============================================
const telaSenha = document.getElementById('telaSenha');
const inputSenha = document.getElementById('inputSenha');
const btnEntrar = document.getElementById('btnEntrar');
const mensagemErro = document.getElementById('mensagemErro');

const telaConfig = document.getElementById('telaConfig');
const inputSemanaAtual = document.getElementById('inputSemanaAtual');
const inputDUM = document.getElementById('inputDUM');
const btnPlantar = document.getElementById('btnPlantar');

const telaBoasVindas = document.getElementById('telaBoasVindas');
const btnFecharBoasVindas = document.getElementById('btnFecharBoasVindas');
const conteudoPrincipal = document.getElementById('conteudoPrincipal');

const fraseDoDia = document.getElementById('fraseDoDia');
const semanaIndicador = document.getElementById('semanaIndicador');
const diasRestantes = document.getElementById('diasRestantes');
const streakInfo = document.getElementById('streakInfo');
const btnRegar = document.getElementById('btnRegar');
const visitantes = document.querySelectorAll('.visitante');
const marcosMini = document.querySelectorAll('.marco-mini');
const plantaSVG = document.getElementById('plantaSVG');
const ceuJardim = document.getElementById('ceuJardim');
const particulasContainer = document.getElementById('particulasContainer');

const gridDesejos = document.getElementById('gridDesejos');
const btnNovoDesejo = document.getElementById('btnNovoDesejo');
const btnModoNoturno = document.getElementById('btnModoNoturno');

const gridCartas = document.getElementById('gridCartas');
const btnNovaCarta = document.getElementById('btnNovaCarta');

const linhaTempo = document.getElementById('linhaTempo');
const marcosChecklist = document.getElementById('marcosChecklist');
const poteEstrelinhas = document.getElementById('poteEstrelinhas');
const contadorPote = document.getElementById('contadorPote');
const frasesSalvasLista = document.getElementById('frasesSalvasLista');

const modalOverlay = document.getElementById('modalOverlay');
const modalConteudo = document.getElementById('modalConteudo');
const btnFecharModal = document.getElementById('btnFecharModal');

const modoNoturnoOverlay = document.getElementById('modoNoturnoOverlay');
const inputDesejoNoturno = document.getElementById('inputDesejoNoturno');
const btnSalvarNoturno = document.getElementById('btnSalvarNoturno');
const btnFecharNoturno = document.getElementById('btnFecharNoturno');

const btnExportar = document.getElementById('btnExportar');
const btnImportar = document.getElementById('btnImportar');
const inputImportar = document.getElementById('inputImportar');

const gridFotos = document.getElementById('gridFotos');
const inputFoto = document.getElementById('inputFoto');

const listaNomes = document.getElementById('listaNomes');
const inputNovoNome = document.getElementById('inputNovoNome');
const btnAdicionarNome = document.getElementById('btnAdicionarNome');

const graficoPesoCanvas = document.getElementById('graficoPesoCanvas');
const tabelaPeso = document.getElementById('tabelaPeso');
const graficoSonoCanvas = document.getElementById('graficoSonoCanvas');
const sonoHistoricoDiv = document.getElementById('sonoHistorico');

// ==============================================
// INICIALIZAÇÃO
// ==============================================
function init() {
    // Verifica autenticação
    const authData = localStorage.getItem('nosso_jardim_auth');
    if (authData) {
        const auth = JSON.parse(authData);
        const agora = new Date().getTime();
        if (agora - auth.timestamp < 30 * 24 * 60 * 60 * 1000) {
            if (dados.configurado) {
                mostrarConteudoPrincipal();
            } else {
                mostrarTelaConfig();
            }
            return;
        }
    }
    
    telaSenha.classList.remove('esconder');
    
    // Event Listeners
    btnEntrar.addEventListener('click', verificarSenha);
    inputSenha.addEventListener('keypress', (e) => { if (e.key === 'Enter') verificarSenha(); });
    btnPlantar.addEventListener('click', configurarJardim);
    btnFecharBoasVindas.addEventListener('click', fecharBoasVindas);
    
    document.querySelectorAll('.nav-links button').forEach(btn => {
        btn.addEventListener('click', () => navegarSecao(btn.dataset.secao));
    });
    
    btnRegar.addEventListener('click', regarPlanta);
    visitantes.forEach(v => {
        v.addEventListener('click', () => mostrarFraseVisitante(v.dataset.animal));
    });
    
    btnNovoDesejo.addEventListener('click', () => abrirModalDesejo());
    btnModoNoturno.addEventListener('click', abrirModoNoturno);
    btnNovaCarta.addEventListener('click', () => abrirModalCarta());
    
    document.querySelectorAll('#filtrosDesejos button').forEach(btn => {
        btn.addEventListener('click', () => filtrarDesejos(btn.dataset.filtro, btn));
    });
    
    btnFecharModal.addEventListener('click', fecharModal);
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) fecharModal(); });
    
    btnSalvarNoturno.addEventListener('click', salvarDesejoNoturno);
    btnFecharNoturno.addEventListener('click', fecharModoNoturno);
    
    btnExportar.addEventListener('click', exportarDados);
    btnImportar.addEventListener('click', () => inputImportar.click());
    inputImportar.addEventListener('change', importarDados);
    
    marcosMini.forEach(m => {
        m.addEventListener('click', () => navegarSecao('marcos'));
    });
    
    fraseDoDia.addEventListener('click', salvarFraseAtual);
    
    // Sono
    document.getElementById('sonoBem').addEventListener('click', () => registrarSono('bem'));
    document.getElementById('sonoMal').addEventListener('click', () => registrarSono('mal'));
    document.getElementById('sonoInsônia').addEventListener('click', () => registrarSono('insonia'));
    
    // Fotos
    document.getElementById('btnAdicionarFoto').addEventListener('click', () => inputFoto.click());
    inputFoto.addEventListener('change', adicionarFoto);
    
    // Nomes
    btnAdicionarNome.addEventListener('click', adicionarNome);
    inputNovoNome.addEventListener('keypress', (e) => { if (e.key === 'Enter') adicionarNome(); });
    
    // Peso
    document.getElementById('btnRegistrarPeso').addEventListener('click', () => abrirModalPeso());
}

function verificarSenha() {
    const senha = inputSenha.value.trim();
    if (senha === SENHA_CORRETA) {
        localStorage.setItem('nosso_jardim_auth', JSON.stringify({ timestamp: new Date().getTime() }));
        mensagemErro.textContent = '';
        telaSenha.classList.add('esconder');
        if (dados.configurado) {
            mostrarConteudoPrincipal();
        } else {
            mostrarTelaConfig();
        }
    } else {
        mensagemErro.textContent = 'Essa não é a chave do jardim... tente de novo.';
        inputSenha.classList.add('tremendo');
        setTimeout(() => inputSenha.classList.remove('tremendo'), 500);
        inputSenha.value = '';
        inputSenha.focus();
    }
}

function mostrarTelaConfig() {
    telaConfig.classList.add('visivel');
    const hoje = new Date();
    const dumSugerida = new Date(hoje);
    dumSugerida.setDate(dumSugerida.getDate() - 280);
    inputDUM.value = dumSugerida.toISOString().split('T')[0];
}

function configurarJardim() {
    const semana = parseInt(inputSemanaAtual.value);
    const dum = inputDUM.value;
    
    if (!semana || semana < 1 || semana > 42) {
        alert('Por favor, insira um número de semanas válido (1-42).');
        return;
    }
    
    dados.semanaAtual = semana;
    dados.dataDUM = dum;
    dados.configurado = true;
    dados.primeiraVisita = true;
    
    if (dum) {
        const dataDUM = new Date(dum);
        const dataDPP = new Date(dataDUM);
        dataDPP.setDate(dataDPP.getDate() + 280);
        dados.dataDPP = dataDPP.toISOString().split('T')[0];
    }
    
    salvarDados();
    telaConfig.classList.add('esconder');
    mostrarBoasVindas();
}

function mostrarBoasVindas() {
    telaBoasVindas.classList.add('visivel');
}

function fecharBoasVindas() {
    telaBoasVindas.classList.remove('visivel');
    dados.primeiraVisita = false;
    salvarDados();
    mostrarConteudoPrincipal();
}

function mostrarConteudoPrincipal() {
    conteudoPrincipal.classList.add('visivel');
    inicializarJardim();
    renderizarTudo();
    criarParticulas();
    atualizarCeu();
}

// ==============================================
// PLANTA CONTÍNUA
// ==============================================
function atualizarPlanta() {
    const semana = dados.semanaAtual;
    if (!plantaSVG) return;
    
    // Tamanho base que cresce gradualmente
    const alturaTotal = 200 + (semana * 4); // cresce 4px por semana
    const alturaCaule = Math.min(alturaTotal, 350);
    
    let svgContent = '';
    
    // Vaso (tamanho fixo)
    svgContent += `<rect x="70" y="${alturaCaule - 20}" width="60" height="55" rx="8" fill="#C4A8D6" stroke="#9B72B5" stroke-width="2"/>`;
    svgContent += `<rect x="62" y="${alturaCaule - 25}" width="76" height="10" rx="5" fill="#D4B872"/>`;
    
    if (semana <= 2) {
        // Sementinha na terra
        svgContent += `<ellipse cx="100" cy="${alturaCaule - 18}" rx="6" ry="4" fill="#8B6914"/>`;
        svgContent += `<text x="100" y="${alturaCaule - 40}" text-anchor="middle" font-size="10" fill="#6B5A7A">Sementinha plantada</text>`;
    } else if (semana <= 4) {
        // Broto saindo
        svgContent += `<line x1="100" y1="${alturaCaule - 18}" x2="100" y2="${alturaCaule - 50}" stroke="#7BAE7F" stroke-width="3" stroke-linecap="round"/>`;
        svgContent += `<ellipse cx="92" cy="${alturaCaule - 48}" rx="8" ry="5" fill="#8CB89C" transform="rotate(-15 92 ${alturaCaule - 48})"/>`;
        svgContent += `<ellipse cx="108" cy="${alturaCaule - 52}" rx="8" ry="5" fill="#8CB89C" transform="rotate(15 108 ${alturaCaule - 52})"/>`;
    } else {
        // Caule principal
        const grossuraCaule = Math.min(2 + semana * 0.15, 6);
        svgContent += `<line x1="100" y1="${alturaCaule - 20}" x2="100" y2="40" stroke="#6A9A7A" stroke-width="${grossuraCaule}" stroke-linecap="round"/>`;
        
        // Folhas (sempre presentes, aumentando em quantidade)
        const numFolhas = Math.min(2 + Math.floor(semana / 3), 14);
        for (let i = 0; i < numFolhas; i++) {
            const y = alturaCaule - 40 - (i * 22);
            const lado = i % 2 === 0 ? 1 : -1;
            const x = 100 + lado * (18 + i * 1.5);
            const tamanho = 8 + Math.min(semana * 0.3, 12);
            const rotacao = lado * (20 + i * 3);
            svgContent += `<ellipse cx="${x}" cy="${y}" rx="${tamanho}" ry="${tamanho * 0.5}" fill="#8CB89C" transform="rotate(${rotacao} ${x} ${y})"/>`;
        }
        
        // Flores (a partir da semana 15)
        if (semana >= 15) {
            const numFlores = Math.min(1 + Math.floor((semana - 15) / 4), 5);
            for (let i = 0; i < numFlores; i++) {
                const y = 50 + i * 35;
                const lado = i % 2 === 0 ? -1 : 1;
                const x = 100 + lado * (15 + i * 5);
                svgContent += `<circle cx="${x}" cy="${y}" r="10" fill="#D4B872" opacity="0.2"/>`;
                svgContent += `<circle cx="${x - 5}" cy="${y - 5}" r="5" fill="#E8D5F0"/>`;
                svgContent += `<circle cx="${x + 5}" cy="${y - 5}" r="5" fill="#E8D5F0"/>`;
                svgContent += `<circle cx="${x - 5}" cy="${y + 5}" r="5" fill="#E8D5F0"/>`;
                svgContent += `<circle cx="${x + 5}" cy="${y + 5}" r="5" fill="#E8D5F0"/>`;
                svgContent += `<circle cx="${x}" cy="${y}" r="4" fill="#D4B872"/>`;
            }
        }
        
        // Fruto (a partir da semana 30)
        if (semana >= 30) {
            const tamanhoFruto = 8 + (semana - 30) * 2;
            svgContent += `<ellipse cx="100" cy="${30 - (semana - 30)}" rx="${tamanhoFruto}" ry="${tamanhoFruto * 1.2}" fill="#D4B872" opacity="0.8"/>`;
            svgContent += `<ellipse cx="100" cy="${30 - (semana - 30) - 2}" rx="3" ry="2" fill="#E8D9A0"/>`;
        }
    }
    
    plantaSVG.innerHTML = svgContent;
}

// ==============================================
// JARDIM
// ==============================================
function inicializarJardim() {
    atualizarPlanta();
    atualizarFraseDoDia();
    atualizarStreak();
    atualizarSemanaIndicador();
    verificarVisitantes();
    atualizarMarcosMini();
}

function atualizarFraseDoDia() {
    const semana = dados.semanaAtual;
    const frase = FRASES_SEMANAIS[Math.min(semana - 1, 39)] || 'Deus está cuidando de cada detalhe.';
    if (fraseDoDia) fraseDoDia.textContent = frase;
}

function atualizarStreak() {
    const hoje = new Date().toDateString();
    const ultimaRegagem = dados.ultimaRegagem ? new Date(dados.ultimaRegagem).toDateString() : null;
    
    if (ultimaRegagem && ultimaRegagem !== hoje && ultimaRegagem !== new Date(Date.now() - 86400000).toDateString()) {
        if ((new Date() - new Date(dados.ultimaRegagem)) > 3 * 86400000) {
            dados.streak = 0;
            salvarDados();
        }
    }
    
    if (streakInfo) {
        streakInfo.innerHTML = `Dias regando: <span class="dias-streak">${dados.streak}</span> seguidos`;
    }
}

function regarPlanta() {
    const hoje = new Date().toDateString();
    const ultimaRegagem = dados.ultimaRegagem ? new Date(dados.ultimaRegagem).toDateString() : null;
    
    if (ultimaRegagem === hoje) {
        const frase = FRASES_REGAGEM[Math.floor(Math.random() * FRASES_REGAGEM.length)];
        mostrarFraseFlutuante(frase);
        return;
    }
    
    dados.streak++;
    dados.ultimaRegagem = new Date().toISOString();
    salvarDados();
    atualizarStreak();
    
    const frase = FRASES_REGAGEM[Math.floor(Math.random() * FRASES_REGAGEM.length)];
    mostrarFraseFlutuante(frase);
    criarGotinhas();
}

function criarGotinhas() {
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const gota = document.createElement('div');
            gota.className = 'particula';
            gota.style.cssText = `
                background: #9B72B5; width: 5px; height: 8px; border-radius: 50%;
                position: fixed; top: 38%; left: ${46 + Math.random() * 8}%;
                animation: cair 1.2s ease-in forwards; z-index: 150; pointer-events: none;
            `;
            document.body.appendChild(gota);
            setTimeout(() => gota.remove(), 1200);
        }, i * 80);
    }
}

function mostrarFraseVisitante(animal) {
    const frase = FRASES_ANIMAIS[animal] || 'Que bênção ter você aqui!';
    mostrarFraseFlutuante(frase);
}

function mostrarFraseFlutuante(frase) {
    document.querySelectorAll('.balao-frase').forEach(b => b.remove());
    const balao = document.createElement('div');
    balao.className = 'balao-frase';
    balao.textContent = frase;
    balao.style.cssText = 'position:fixed;top:28%;left:50%;transform:translateX(-50%);z-index:150;';
    document.body.appendChild(balao);
    setTimeout(() => {
        balao.style.opacity = '0';
        balao.style.transition = 'opacity 0.5s';
        setTimeout(() => balao.remove(), 500);
    }, 3500);
}

function atualizarSemanaIndicador() {
    if (semanaIndicador) semanaIndicador.textContent = `Semana ${dados.semanaAtual} de gestação`;
    if (diasRestantes && dados.dataDPP) {
        const hoje = new Date();
        const dpp = new Date(dados.dataDPP);
        const diff = Math.ceil((dpp - hoje) / (1000 * 60 * 60 * 24));
        if (diff > 0) diasRestantes.textContent = `Faltam ~${diff} dias`;
        else if (diff === 0) diasRestantes.textContent = 'O grande dia chegou!';
        else diasRestantes.textContent = `Já passou ${Math.abs(diff)} dias!`;
    }
}

function verificarVisitantes() {
    const semana = dados.semanaAtual;
    visitantes.forEach(v => {
        const semanaMin = parseInt(v.dataset.semanaMin);
        if (semana >= semanaMin) {
            v.style.display = 'block';
            v.style.opacity = '1';
            v.style.pointerEvents = 'auto';
        } else {
            v.style.opacity = '0.3';
            v.style.pointerEvents = 'none';
        }
    });
}

function atualizarMarcosMini() {
    marcosMini.forEach(m => {
        if (dados.marcos[m.dataset.marco]) m.classList.add('concluido');
        else m.classList.remove('concluido');
    });
}

// ==============================================
// CÉU E PARTÍCULAS
// ==============================================
function atualizarCeu() {
    const hora = new Date().getHours();
    if (ceuJardim) {
        ceuJardim.className = 'ceu-jardim';
        if (hora >= 6 && hora < 12) ceuJardim.classList.add('ceu-manha');
        else if (hora >= 12 && hora < 18) ceuJardim.classList.add('ceu-tarde');
        else { ceuJardim.classList.add('ceu-noite'); criarEstrelinhas(); }
    }
}

function criarEstrelinhas() {
    if (!ceuJardim) return;
    ceuJardim.querySelectorAll('.estrelinha').forEach(e => e.remove());
    for (let i = 0; i < 15; i++) {
        const estrela = document.createElement('div');
        estrela.className = 'estrelinha';
        estrela.style.cssText = `
            top:${Math.random()*60}%; left:${Math.random()*90}%;
            width:${2+Math.random()*2}px; height:${2+Math.random()*2}px;
            animation-delay:${Math.random()*2}s;
        `;
        ceuJardim.appendChild(estrela);
    }
}

function criarParticulas() {
    if (!particulasContainer) return;
    setInterval(() => {
        const p = document.createElement('div');
        p.className = `particula ${Math.random()>0.6?'vagalume':'petala'}`;
        p.style.cssText = `left:${Math.random()*100}%; animation-duration:${6+Math.random()*10}s; animation-delay:${Math.random()*3}s;`;
        particulasContainer.appendChild(p);
        setTimeout(() => p.remove(), 16000);
    }, 2500);
}

// ==============================================
// NAVEGAÇÃO
// ==============================================
function navegarSecao(secaoId) {
    document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('ativo'));
    const btnAtivo = document.querySelector(`[data-secao="${secaoId}"]`);
    if (btnAtivo) btnAtivo.classList.add('ativo');
    
    document.querySelectorAll('.secao').forEach(s => s.classList.remove('ativa'));
    const secao = document.getElementById(`secao-${secaoId}`);
    if (secao) secao.classList.add('ativa');
    
    if (secaoId === 'desejos') renderizarDesejos();
    if (secaoId === 'cartas') renderizarCartas();
    if (secaoId === 'timeline') renderizarLinhaTempo();
    if (secaoId === 'marcos') renderizarMarcos();
    if (secaoId === 'pote') renderizarPote();
    if (secaoId === 'frases') renderizarFrasesSalvas();
    if (secaoId === 'sono') renderizarSono();
    if (secaoId === 'fotos') renderizarFotos();
    if (secaoId === 'nomes') renderizarNomes();
    if (secaoId === 'peso') { renderizarTabelaPeso(); renderizarGraficoPeso(); }
}

// ==============================================
// DESEJOS
// ==============================================
function abrirModalDesejo(desejoExistente = null) {
    const categorias = [
        { id: 'salgado', label: 'Comida Salgada' },
        { id: 'doce', label: 'Doce' },
        { id: 'azedo', label: 'Azedo' },
        { id: 'bizarro', label: 'Combinação Bizarra' },
        { id: 'cheiro', label: 'Cheiro' },
        { id: 'gelo', label: 'Gelo' },
        { id: 'comida', label: 'Comida Específica' },
        { id: 'outro', label: 'Outro' }
    ];
    
    let html = `
        <h3 style="color:var(--lilas-profundo);font-family:'Playfair Display',serif;">${desejoExistente ? 'Editar Desejo' : 'Novo Desejo Estranho'}</h3>
        <div class="form-grupo"><label>O que você desejou?</label><input type="text" id="inputDesejoTexto" value="${desejoExistente?desejoExistente.texto:''}"></div>
        <div class="form-grupo"><label>Data e hora</label><input type="datetime-local" id="inputDesejoData" value="${desejoExistente?desejoExistente.data:new Date().toISOString().slice(0,16)}"></div>
        <div class="form-grupo"><label>Intensidade</label><div class="intensidade-selector" id="intensidadeSelector">${[1,2,3,4,5].map(i=>`<svg class="estrela-sel ${desejoExistente&&desejoExistente.intensidade>=i?'ativa':''}" data-valor="${i}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>`).join('')}</div><input type="hidden" id="inputDesejoIntensidade" value="${desejoExistente?desejoExistente.intensidade:3}"></div>
        <div class="form-grupo"><label>Categoria</label><select id="inputDesejoCategoria">${categorias.map(c=>`<option value="${c.id}" ${desejoExistente&&desejoExistente.categoria===c.id?'selected':''}>${c.label}</option>`).join('')}</select></div>
        <div class="form-grupo"><label>Conseguiu realizar?</label><select id="inputDesejoRealizado"><option value="sim" ${desejoExistente&&desejoExistente.realizado?'selected':''}>Sim</option><option value="nao" ${desejoExistente&&!desejoExistente.realizado?'selected':''}>Ainda não</option></select></div>
        <div class="form-grupo"><label>Onde estava? (opcional)</label><input type="text" id="inputDesejoLocal" value="${desejoExistente?desejoExistente.local||'':''}"></div>
        <div class="form-grupo"><label>Notas</label><textarea id="inputDesejoNotas">${desejoExistente?desejoExistente.notas||'':''}</textarea></div>
        <button class="btn btn-primario" id="btnSalvarDesejo">Salvar</button>
        ${desejoExistente?'<button class="btn btn-perigo" style="margin-top:8px;background:#c0392b;color:white;" id="btnExcluirDesejo">Excluir</button>':''}
    `;
    
    abrirModal(html);
    
    document.querySelectorAll('#intensidadeSelector .estrela-sel').forEach(estrela => {
        estrela.addEventListener('click', () => {
            const valor = parseInt(estrela.dataset.valor);
            document.getElementById('inputDesejoIntensidade').value = valor;
            document.querySelectorAll('#intensidadeSelector .estrela-sel').forEach((e,i) => e.classList.toggle('ativa', i<valor));
        });
    });
    
    document.getElementById('btnSalvarDesejo').addEventListener('click', () => {
        const desejo = {
            id: desejoExistente?desejoExistente.id:Date.now(),
            texto: document.getElementById('inputDesejoTexto').value,
            data: document.getElementById('inputDesejoData').value,
            intensidade: parseInt(document.getElementById('inputDesejoIntensidade').value),
            categoria: document.getElementById('inputDesejoCategoria').value,
            realizado: document.getElementById('inputDesejoRealizado').value==='sim',
            local: document.getElementById('inputDesejoLocal').value,
            notas: document.getElementById('inputDesejoNotas').value
        };
        if(!desejo.texto){alert('Descreva seu desejo!');return;}
        if(desejoExistente){const i=dados.desejos.findIndex(d=>d.id===desejoExistente.id);dados.desejos[i]=desejo;}
        else dados.desejos.push(desejo);
        salvarDados();fecharModal();renderizarDesejos();
    });
    
    if(desejoExistente){
        document.getElementById('btnExcluirDesejo').addEventListener('click',()=>{
            if(confirm('Excluir?')){dados.desejos=dados.desejos.filter(d=>d.id!==desejoExistente.id);salvarDados();fecharModal();renderizarDesejos();}
        });
    }
}

function renderizarDesejos(filtro='todos') {
    if(!gridDesejos)return;
    let desejos = dados.desejos;
    if(filtro==='realizados') desejos=desejos.filter(d=>d.realizado);
    else if(filtro==='pendentes') desejos=desejos.filter(d=>!d.realizado);
    else if(filtro==='intensos') desejos=[...desejos].sort((a,b)=>b.intensidade-a.intensidade).slice(0,10);
    
    if(desejos.length===0){gridDesejos.innerHTML='<p style="text-align:center;color:var(--texto-claro);padding:30px;">Nenhum desejo ainda.</p>';return;}
    
    gridDesejos.innerHTML = desejos.map(d=>`
        <div class="card" onclick="editarDesejo(${d.id})">
            <div class="cabecalho-card"><div class="icone-categoria">${iconeCategoria(d.categoria)}</div><div><div style="font-weight:600;">${d.texto.substring(0,35)}${d.texto.length>35?'...':''}</div><div class="data-card">${formatarData(d.data)}</div></div></div>
            <div class="intensidade">${[1,2,3,4,5].map(i=>`<svg class="estrela ${d.intensidade>=i?'':'vazia'}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>`).join('')}</div>
            <div class="${d.realizado?'selo-realizado':'selo-pendente'}">${d.realizado?'Realizado':'Sonhando...'}</div>
        </div>
    `).join('');
}

function editarDesejo(id){const d=dados.desejos.find(x=>x.id===id);if(d)abrirModalDesejo(d);}
function filtrarDesejos(filtro,btn){document.querySelectorAll('#filtrosDesejos button').forEach(b=>b.classList.remove('ativo'));btn.classList.add('ativo');renderizarDesejos(filtro);}

function iconeCategoria(cat){
    const icons={
        salgado:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="4"/><circle cx="12" cy="12" r="5"/></svg>',
        doce:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="3"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="14" x2="16" y2="14"/></svg>',
        azedo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 8c2 2 4 2 8 0"/></svg>',
        bizarro:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 8h.01M16 8h.01M8 16h.01M16 16h.01"/></svg>',
        cheiro:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c-3 4-6 8-6 12 0 3.5 2.5 6 6 6s6-2.5 6-6c0-4-3-8-6-12z"/></svg>',
        gelo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="3"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/></svg>',
        comida:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="6" x2="12" y2="12"/><line x1="12" y1="12" x2="12" y2="18"/></svg>',
        outro:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>'
    };
    return icons[cat]||icons.outro;
}

// ==============================================
// MODO NOTURNO
// ==============================================
function abrirModoNoturno(){modoNoturnoOverlay.classList.add('visivel');inputDesejoNoturno.focus();}
function fecharModoNoturno(){modoNoturnoOverlay.classList.remove('visivel');inputDesejoNoturno.value='';}
function salvarDesejoNoturno(){
    const t=inputDesejoNoturno.value.trim();if(!t)return;
    dados.desejos.push({id:Date.now(),texto:t,data:new Date().toISOString().slice(0,16),intensidade:5,categoria:'outro',realizado:false,local:'',notas:'Registrado de madrugada'});
    salvarDados();fecharModoNoturno();renderizarDesejos();
}

// ==============================================
// CARTAS
// ==============================================
function abrirModalCarta(cartaExistente=null){
    let html=`
        <h3 style="color:var(--lilas-profundo);font-family:'Playfair Display',serif;">${cartaExistente?'Editar Carta':'Nova Carta'}</h3>
        <div class="form-grupo"><label>Título</label><input type="text" id="inputCartaTitulo" value="${cartaExistente?cartaExistente.titulo:''}"></div>
        <div class="form-grupo"><label>Data</label><input type="date" id="inputCartaData" value="${cartaExistente?cartaExistente.data:new Date().toISOString().split('T')[0]}"></div>
        <div class="form-grupo"><label>Humor</label><select id="inputCartaHumor">${['feliz','ansiosa','cansada','emotiva','grata'].map(h=>`<option value="${h}" ${cartaExistente&&cartaExistente.humor===h?'selected':''}>${h.charAt(0).toUpperCase()+h.slice(1)}</option>`).join('')}</select></div>
        <div class="form-grupo"><label>Texto</label><textarea id="inputCartaTexto" style="min-height:180px;">${cartaExistente?cartaExistente.texto:''}</textarea></div>
        <div class="form-grupo"><label>Cápsula do tempo (abrir em)</label><input type="date" id="inputCartaCapsula" value="${cartaExistente&&cartaExistente.capsula?cartaExistente.capsula:''}"><small style="color:var(--texto-claro);">Deixe em branco se não for</small></div>
        <button class="btn btn-primario" id="btnSalvarCarta">Salvar</button>
        ${cartaExistente?'<button class="btn" style="margin-top:8px;background:#c0392b;color:white;" id="btnExcluirCarta">Excluir</button>':''}
    `;
    abrirModal(html);
    document.getElementById('btnSalvarCarta').addEventListener('click',()=>{
        const carta={id:cartaExistente?cartaExistente.id:Date.now(),titulo:document.getElementById('inputCartaTitulo').value,data:document.getElementById('inputCartaData').value,humor:document.getElementById('inputCartaHumor').value,texto:document.getElementById('inputCartaTexto').value,capsula:document.getElementById('inputCartaCapsula').value||null};
        if(!carta.texto){alert('Escreva sua carta!');return;}
        if(cartaExistente){const i=dados.cartas.findIndex(c=>c.id===cartaExistente.id);dados.cartas[i]=carta;}else dados.cartas.push(carta);
        salvarDados();fecharModal();renderizarCartas();
    });
    if(cartaExistente)document.getElementById('btnExcluirCarta').addEventListener('click',()=>{if(confirm('Excluir?')){dados.cartas=dados.cartas.filter(c=>c.id!==cartaExistente.id);salvarDados();fecharModal();renderizarCartas();}});
}

function renderizarCartas(){
    if(!gridCartas)return;
    const hoje=new Date().toISOString().split('T')[0];
    const visiveis=dados.cartas.filter(c=>!c.capsula||c.capsula<=hoje);
    if(visiveis.length===0){gridCartas.innerHTML='<p style="text-align:center;color:var(--texto-claro);padding:30px;">Nenhuma carta ainda.</p>';return;}
    gridCartas.innerHTML=visiveis.map(c=>`<div class="card" onclick="editarCarta(${c.id})"><h4 style="color:var(--lilas-profundo);">${c.titulo||'Sem título'}</h4><div class="data-card">${formatarData(c.data)}</div><p style="margin-top:6px;color:var(--texto-claro);">${c.texto.substring(0,80)}...</p>${c.capsula?'<div style="font-size:0.65rem;color:var(--dourado);margin-top:4px;">Cápsula do tempo</div>':''}</div>`).join('');
}

function editarCarta(id){const c=dados.cartas.find(x=>x.id===id);if(c)abrirModalCarta(c);}

// ==============================================
// LINHA DO TEMPO
// ==============================================
function renderizarLinhaTempo(){
    if(!linhaTempo)return;
    let html='';
    for(let i=1;i<=40;i++){
        let cls='semana-futura';
        if(i<dados.semanaAtual)cls='semana-passada';
        if(i===dados.semanaAtual)cls='semana-atual';
        html+=`<div class="semana-bolinha ${cls}" onclick="mostrarInfoSemana(${i})">${i}</div>`;
    }
    linhaTempo.innerHTML=html;
}

function mostrarInfoSemana(semana){
    const frase=FRASES_SEMANAIS[Math.min(semana-1,39)]||'Uma semana especial.';
    mostrarFraseFlutuante(frase);
}

// ==============================================
// MARCOS (COM DATA RETROATIVA)
// ==============================================
function renderizarMarcos(){
    if(!marcosChecklist)return;
    const marcos=[
        {id:'teste_positivo',label:'Teste positivo'},
        {id:'primeira_consulta',label:'Primeira consulta'},
        {id:'primeira_eco',label:'Primeira ecografia'},
        {id:'descobriu_sexo',label:'Descobriu o sexo'},
        {id:'primeiro_chute',label:'Primeiro chute'},
        {id:'parceiro_sentiu',label:'Parceiro(a) sentiu'},
        {id:'cha_bebe',label:'Chá de bebê'},
        {id:'quartinho',label:'Quartinho montado'},
        {id:'mala_maternidade',label:'Mala maternidade'}
    ];
    
    marcosChecklist.innerHTML=marcos.map(m=>`
        <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--branco);border-radius:10px;margin-bottom:6px;cursor:pointer;" onclick="toggleMarco('${m.id}')">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="${dados.marcos[m.id]?'var(--verde-menta)':'none'}" stroke="${dados.marcos[m.id]?'var(--verde-escuro)':'var(--lilas-suave)'}" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>
            <span style="${dados.marcos[m.id]?'text-decoration:line-through;color:var(--verde-menta);':''}">${m.label}</span>
            ${dados.marcos[m.id]?`<span style="margin-left:auto;font-size:0.7rem;color:var(--verde-menta);">${formatarData(dados.marcos[m.id])}</span>`:''}
        </div>
    `).join('');
}

function toggleMarco(marcoId){
    if(dados.marcos[marcoId]){
        // Já existe, pergunta se quer remover ou alterar data
        const novaData = prompt('Alterar data (AAAA-MM-DD) ou cancelar para remover:', dados.marcos[marcoId]);
        if(novaData===null){delete dados.marcos[marcoId];}
        else if(novaData.trim()){dados.marcos[marcoId]=novaData.trim();}
    } else {
        // Novo marco
        const dataSugerida = new Date().toISOString().split('T')[0];
        const data = prompt('Quando isso aconteceu? (AAAA-MM-DD)', dataSugerida);
        if(data&&data.trim()){dados.marcos[marcoId]=data.trim();}
        else if(data===null){return;}
        else{dados.marcos[marcoId]=dataSugerida;}
        const frase=FRASES_MARCOS[marcoId];
        if(frase)mostrarFraseFlutuante(frase);
    }
    salvarDados();renderizarMarcos();atualizarMarcosMini();
}

// ==============================================
// SONO
// ==============================================
function registrarSono(tipo){
    const hoje=new Date().toISOString().split('T')[0];
    const existente=dados.registrosSono.findIndex(s=>s.data===hoje);
    const registro={data:hoje,tipo:tipo};
    if(existente>=0)dados.registrosSono[existente]=registro;
    else dados.registrosSono.push(registro);
    salvarDados();
    renderizarSono();
    mostrarFraseFlutuante(tipo==='bem'?'Que bom! Um sono abençoado.':tipo==='mal'?'Amanhã será melhor. Descanse.':'Respire fundo. Deus está no controle.');
}

function renderizarSono(){
    if(sonoHistoricoDiv){
        const ultimos30=[...dados.registrosSono].slice(-30);
        sonoHistoricoDiv.innerHTML=ultimos30.map(s=>{
            let cls='sono-bem';if(s.tipo==='mal')cls='sono-mal';if(s.tipo==='insonia')cls='sono-insonia';
            return `<span class="sono-dia ${cls}" title="${s.data}: ${s.tipo}"></span>`;
        }).join('');
    }
    renderizarGraficoSono();
}

function renderizarGraficoSono(){
    if(!graficoSonoCanvas)return;
    const ctx=graficoSonoCanvas.getContext('2d');
    const ultimos7=[...dados.registrosSono].slice(-7);
    const labels=ultimos7.map(s=>s.data.slice(5));
    const valores=ultimos7.map(s=>s.tipo==='bem'?3:s.tipo==='mal'?2:1);
    
    // Desenho simples
    ctx.clearRect(0,0,graficoSonoCanvas.width,graficoSonoCanvas.height);
    if(valores.length===0){ctx.fillStyle='#6B5A7A';ctx.fillText('Sem dados ainda',10,20);return;}
    
    const w=graficoSonoCanvas.width/valores.length;
    ctx.fillStyle='#8CB89C';
    valores.forEach((v,i)=>{ctx.fillRect(i*w+2,graficoSonoCanvas.height-v*40,w-4,v*40);ctx.fillStyle='#3D2A4F';ctx.fillText(labels[i],i*w+4,graficoSonoCanvas.height-5);ctx.fillStyle='#8CB89C';});
}

// ==============================================
// FOTOS
// ==============================================
function adicionarFoto(event){
    const file=event.target.files[0];
    if(!file)return;
    const reader=new FileReader();
    reader.onload=(e)=>{
        dados.fotosBarriga.push({
            id:Date.now(),
            data:new Date().toISOString().split('T')[0],
            semana:dados.semanaAtual,
            src:e.target.result
        });
        salvarDados();renderizarFotos();
    };
    reader.readAsDataURL(file);
}

function removerFoto(id){
    if(confirm('Remover esta foto?')){
        dados.fotosBarriga=dados.fotosBarriga.filter(f=>f.id!==id);
        salvarDados();renderizarFotos();
    }
}

function renderizarFotos(){
    if(!gridFotos)return;
    if(dados.fotosBarriga.length===0){gridFotos.innerHTML='<p style="text-align:center;color:var(--texto-claro);padding:30px;">Nenhuma foto ainda.</p>';return;}
    gridFotos.innerHTML=dados.fotosBarriga.map(f=>`
        <div class="foto-card">
            <img src="${f.src}" alt="Barriga semana ${f.semana}">
            <div class="foto-data">Semana ${f.semana} — ${formatarData(f.data)}</div>
            <button class="remover-foto" onclick="event.stopPropagation();removerFoto(${f.id})">x</button>
        </div>
    `).join('');
}

// ==============================================
// NOMES
// ==============================================
function adicionarNome(){
    const nome=inputNovoNome.value.trim();
    if(!nome)return;
    if(dados.nomesFavoritos.find(n=>n.nome.toLowerCase()===nome.toLowerCase())){alert('Esse nome já está na lista!');return;}
    dados.nomesFavoritos.push({nome:votos:0});
    salvarDados();renderizarNomes();inputNovoNome.value='';
}

function votarNome(index){
    dados.nomesFavoritos[index].votos++;
    salvarDados();renderizarNomes();
}

function removerNome(index){
    if(confirm('Remover este nome?')){
        dados.nomesFavoritos.splice(index,1);
        salvarDados();renderizarNomes();
    }
}

function renderizarNomes(){
    if(!listaNomes)return;
    if(dados.nomesFavoritos.length===0){listaNomes.innerHTML='<p style="text-align:center;color:var(--texto-claro);padding:20px;">Nenhum nome na lista ainda.</p>';return;}
    const ordenados=[...dados.nomesFavoritos].sort((a,b)=>b.votos-a.votos);
    listaNomes.innerHTML=ordenados.map((n,i)=>{
        const idx=dados.nomesFavoritos.indexOf(n);
        return `
        <div class="nome-item">
            <span style="font-weight:600;">${n.nome}</span>
            <div class="votos">
                <span style="font-size:0.8rem;color:var(--texto-claro);">${n.votos} votos</span>
                <button class="btn-votar" onclick="votarNome(${idx})" title="Votar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </button>
                <button style="background:none;border:none;cursor:pointer;color:var(--texto-claro);font-size:0.7rem;" onclick="removerNome(${idx})">x</button>
            </div>
        </div>`;
    }).join('');
}

// ==============================================
// PESO DO BEBÊ
// ==============================================
function abrirModalPeso(pesoExistente=null){
    let html=`
        <h3 style="color:var(--lilas-profundo);font-family:'Playfair Display',serif;">${pesoExistente?'Editar':'Novo'} Registro de Peso</h3>
        <div class="form-grupo"><label>Data</label><input type="date" id="inputPesoData" value="${pesoExistente?pesoExistente.data:new Date().toISOString().split('T')[0]}"></div>
        <div class="form-grupo"><label>Peso (gramas)</label><input type="number" id="inputPesoValor" value="${pesoExistente?pesoExistente.peso:''}" placeholder="Ex: 2500" min="0"></div>
        <div class="form-grupo"><label>Semana da gestação</label><input type="number" id="inputPesoSemana" value="${pesoExistente?pesoExistente.semana:dados.semanaAtual}" min="1" max="42"></div>
        <div class="form-grupo"><label>Nota (opcional)</label><input type="text" id="inputPesoNota" value="${pesoExistente?pesoExistente.nota||'':''}" placeholder="Ex: Médico disse que está perfeito!"></div>
        <button class="btn btn-primario" id="btnSalvarPeso">Salvar</button>
        ${pesoExistente?'<button class="btn" style="margin-top:8px;background:#c0392b;color:white;" id="btnExcluirPeso">Excluir</button>':''}
    `;
    abrirModal(html);
    document.getElementById('btnSalvarPeso').addEventListener('click',()=>{
        const peso={
            id:pesoExistente?pesoExistente.id:Date.now(),
            data:document.getElementById('inputPesoData').value,
            peso:parseInt(document.getElementById('inputPesoValor').value),
            semana:parseInt(document.getElementById('inputPesoSemana').value),
            nota:document.getElementById('inputPesoNota').value
        };
        if(!peso.peso){alert('Informe o peso!');return;}
        if(pesoExistente){const i=dados.registrosPeso.findIndex(p=>p.id===pesoExistente.id);dados.registrosPeso[i]=peso;}
        else dados.registrosPeso.push(peso);
        dados.registrosPeso.sort((a,b)=>a.semana-b.semana);
        salvarDados();fecharModal();renderizarTabelaPeso();renderizarGraficoPeso();
    });
    if(pesoExistente)document.getElementById('btnExcluirPeso').addEventListener('click',()=>{
        if(confirm('Excluir?')){dados.registrosPeso=dados.registrosPeso.filter(p=>p.id!==pesoExistente.id);salvarDados();fecharModal();renderizarTabelaPeso();renderizarGraficoPeso();}
    });
}

function renderizarTabelaPeso(){
    if(!tabelaPeso)return;
    if(dados.registrosPeso.length===0){tabelaPeso.innerHTML='<p style="text-align:center;color:var(--texto-claro);padding:20px;">Nenhum registro ainda.</p>';return;}
    tabelaPeso.innerHTML=dados.registrosPeso.map(p=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:var(--branco);border-radius:8px;margin-bottom:4px;cursor:pointer;" onclick="abrirModalPeso(${JSON.stringify(p).replace(/"/g,'&quot;')})">
            <span>Semana ${p.semana}</span>
            <span style="font-weight:600;">${p.peso}g</span>
            <span style="font-size:0.7rem;color:var(--texto-claro);">${formatarData(p.data)}</span>
        </div>
    `).join('');
}

function renderizarGraficoPeso(){
    if(!graficoPesoCanvas||dados.registrosPeso.length===0)return;
    const ctx=graficoPesoCanvas.getContext('2d');
    const w=graficoPesoCanvas.width;
    const h=graficoPesoCanvas.height;
    ctx.clearRect(0,0,w,h);
    
    const pesos=dados.registrosPeso.map(p=>p.peso);
    const minPeso=Math.min(...pesos)*0.8;
    const maxPeso=Math.max(...pesos)*1.1;
    const range=maxPeso-minPeso||1;
    
    // Linhas de grade
    ctx.strokeStyle='#E8D5F0';
    ctx.lineWidth=1;
    for(let i=0;i<=4;i++){ctx.beginPath();ctx.moveTo(40,h-30-i*(h-60)/4);ctx.lineTo(w-20,h-30-i*(h-60)/4);ctx.stroke();}
    
    // Pontos e linha
    ctx.strokeStyle='#9B72B5';
    ctx.lineWidth=2;
    ctx.beginPath();
    dados.registrosPeso.forEach((p,i)=>{
        const x=40+(i/(dados.registrosPeso.length-1||1))*(w-60);
        const y=h-30-((p.peso-minPeso)/range)*(h-60);
        if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
    });
    ctx.stroke();
    
    // Pontos
    dados.registrosPeso.forEach((p,i)=>{
        const x=40+(i/(dados.registrosPeso.length-1||1))*(w-60);
        const y=h-30-((p.peso-minPeso)/range)*(h-60);
        ctx.fillStyle='#D4B872';
        ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fill();
        ctx.fillStyle='#3D2A4F';ctx.font='9px Nunito';ctx.fillText(`${p.peso}g`,x-12,y-10);
    });
}

// ==============================================
// POTE
// ==============================================
function renderizarPote(){
    if(!poteEstrelinhas||!contadorPote)return;
    const realizados=dados.desejos.filter(d=>d.realizado).length;
    contadorPote.textContent=`${realizados} desejos realizados`;
    const estrelas=Math.min(Math.floor(realizados/2),25);
    poteEstrelinhas.innerHTML=Array(estrelas).fill(0).map(()=>`<svg class="estrelinha-pote" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>`).join('');
}

// ==============================================
// FRASES SALVAS
// ==============================================
function salvarFraseAtual(){
    const frase=fraseDoDia.textContent;
    if(!dados.frasesSalvas.includes(frase)){
        dados.frasesSalvas.push(frase);
        salvarDados();
        mostrarFraseFlutuante('Frase salva!');
    }
}

function renderizarFrasesSalvas(){
    if(!frasesSalvasLista)return;
    if(dados.frasesSalvas.length===0){frasesSalvasLista.innerHTML='<p style="text-align:center;color:var(--texto-claro);padding:30px;">Clique na frase do dia no jardim para salvar!</p>';return;}
    frasesSalvasLista.innerHTML=dados.frasesSalvas.map((f,i)=>`<div class="frase-salva-item"><span>${f}</span><button class="btn-remover-frase" onclick="removerFraseSalva(${i})"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button></div>`).join('');
}

function removerFraseSalva(i){dados.frasesSalvas.splice(i,1);salvarDados();renderizarFrasesSalvas();}

// ==============================================
// PDF
// ==============================================
function gerarPDFDesejos(){
    const r=dados.desejos.filter(d=>d.realizado).length;
    const html=`<div style="padding:30px;font-family:Georgia,serif;color:#3D2A4F;"><h1 style="color:#7B4B9A;text-align:center;">Meu Jardim de Desejos</h1><p style="text-align:center;color:#6B5A7A;">${dados.semanaAtual} semanas</p><hr style="border-color:#C4A8D6;">${dados.desejos.map(d=>`<div style="margin-bottom:16px;padding:12px;border:1px solid #E8D5F0;border-radius:8px;"><strong>${d.texto}</strong><br><small>${formatarData(d.data)} | ${'*'.repeat(d.intensidade)} | ${d.realizado?'Realizado':'Pendente'}</small></div>`).join('')}<p style="text-align:center;margin-top:20px;">Total: ${dados.desejos.length} | Realizados: ${r}</p></div>`;
    baixarPDF(html,'meus-desejos.pdf');
}

function gerarPDFCartas(){
    const hoje=new Date().toISOString().split('T')[0];
    const visiveis=dados.cartas.filter(c=>!c.capsula||c.capsula<=hoje);
    const html=`<div style="padding:30px;font-family:Georgia,serif;color:#3D2A4F;"><h1 style="color:#7B4B9A;text-align:center;">Cartas</h1>${visiveis.map(c=>`<div style="margin-bottom:24px;page-break-inside:avoid;"><h3 style="color:#7B4B9A;">${c.titulo||'Sem título'}</h3><small>${formatarData(c.data)} — ${c.humor}</small><p style="margin-top:10px;line-height:1.8;">${c.texto}</p></div>`).join('')}</div>`;
    baixarPDF(html,'cartas.pdf');
}

function baixarPDF(htmlContent,filename){
    const janela=window.open('','_blank');
    janela.document.write(`<html><head><title>${filename}</title><style>body{font-family:Georgia,serif;color:#3D2A4F;line-height:1.6;}@media print{body{-webkit-print-color-adjust:exact;}}</style></head><body>${htmlContent}</body></html>`);
    janela.document.close();
    setTimeout(()=>janela.print(),500);
}

// ==============================================
// EXPORTAR / IMPORTAR
// ==============================================
function exportarDados(){
    const blob=new Blob([JSON.stringify(dados,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=url;a.download='nosso-jardim-backup.json';a.click();
    URL.revokeObjectURL(url);
}

function importarDados(event){
    const file=event.target.files[0];if(!file)return;
    const reader=new FileReader();
    reader.onload=(e)=>{
        try{
            const novos=JSON.parse(e.target.result);
            if(confirm('Importar? Isso substituirá seus dados atuais.')){dados=novos;salvarDados();location.reload();}
        }catch(err){alert('Arquivo inválido.');}
    };
    reader.readAsText(file);
}

// ==============================================
// MODAL
// ==============================================
function abrirModal(conteudo){modalConteudo.innerHTML=conteudo;modalOverlay.style.display='flex';}
function fecharModal(){modalOverlay.style.display='none';modalConteudo.innerHTML='';}

// ==============================================
// UTILITÁRIOS
// ==============================================
function formatarData(dataStr){
    if(!dataStr)return'';
    const data=new Date(dataStr);
    return data.toLocaleDateString('pt-BR',{day:'numeric',month:'short',year:'numeric'});
}

function renderizarTudo(){
    renderizarDesejos();
    renderizarCartas();
    renderizarLinhaTempo();
    renderizarMarcos();
    renderizarPote();
    renderizarFrasesSalvas();
    renderizarSono();
    renderizarFotos();
    renderizarNomes();
    renderizarTabelaPeso();
    renderizarGraficoPeso();
}

// ==============================================
// INICIAR
// ==============================================
document.addEventListener('DOMContentLoaded', init);
