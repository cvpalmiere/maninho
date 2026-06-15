/* =============================================
   NOSSO JARDIM — Diário de Gestação
   Lógica completa — localStorage, PDF, Senha
   Para: Mana Mari
   ============================================= */

// ==============================================
// CONFIGURAÇÕES (EDITÁVEIS POR VOCÊ)
// ==============================================
const SENHA_CORRETA = 'ManaMari';
const NOME_MAE = 'Mana Mari';

// Frases por semana (índice 0 = semana 1)
// As que estão vazias você preenche depois
const FRASES_SEMANAIS = [
    // Semana 1
    'Lucas 1:42 — "Bendita és tu entre as mulheres, e bendito é o fruto do teu ventre."',
    // Semana 2
    'Lucas 1:45 — "Bem-aventurada a que creu, pois se hão de cumprir as coisas que da parte do Senhor lhe foram ditas."',
    // Semana 3
    'Salmos 127:3 — "Eis que os filhos são herança do Senhor, e o fruto do ventre, o seu galardão."',
    // Semana 4
    'Provérbios 17:17 — "Em todo o tempo ama o amigo, e na angústia se faz o irmão."',
    // Semana 5
    'Provérbios 18:24 — "Há amigo mais chegado do que um irmão."',
    // Semana 6
    'Provérbios 27:9 — "O óleo e o perfume alegram o coração; assim o faz a doçura do amigo pelo seu conselho cordial."',
    // Semana 7
    '1 Samuel 18:3 — "Jônatas e Davi fizeram aliança; porque Jônatas o amava como à sua própria alma."',
    // Semana 8
    'Salmos 133:1 — "Oh! quão bom e quão suave é que os irmãos vivam em união!"',
    // Semana 9
    'Filemom 1:16 — "Não mais como servo, antes mais do que servo, como irmão amado."',
    // Semana 10
    'Provérbios 31:28-29 — "Levantam-se seus filhos e lhe chamam ditosa; seu marido a louva..."',
    // Semana 11
    'Provérbios 31:31 — "Dai-lhe do fruto das suas mãos, e de dentro das portas a louvarão as suas obras."',
    // Semana 12
    'Rute 3:11 — "Toda a cidade do meu povo sabe que és mulher virtuosa."',
    // Semana 13
    'Mari Maria, eu tenho certeza que uma das melhores decisões da minha vida foi ter te chamado pra liderar comigo.',
    // Semana 14
    'Mariano Jr está ficando GIGANTE, vem ai Mariano Jr na VNL?',
    // Semana 15
    'Que Deus de muita saúde e acompanhe o(a) maninho(a) por onde ele for.',
    // Semana 16
    'Já começou a colocar o(a) maninho(a) pra escutar Mozart?',
    // Semana 17
    'Já posso começar a ir na sua casa pra faxinar já que você tá BEM grávida?',
    // Semana 18
    'Confesso que eu passo muitos momentos do meu dia orando pelo maninho.',
    // Semana 19
    'Preciso começar a pensar na roupa do(a) maninho(a) pro meu casamento.',
    // Semana 20
    'Preciso terminar meu site logo pra ajudar o maninho nos estudos.',
    // Semanas 21-40 (placeholders — preencha depois)
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

// Frases dos animais
const FRASES_ANIMAIS = {
    joaninha: 'Assim como a joaninha traz sorte, você já é nossa maior bênção.',
    borboleta: 'A borboleta nos lembra que toda transformação é linda. Você está nos transformando.',
    beijaflor: 'O beija-flor bate as asas tão rápido quanto meu coração quando penso em vocês.',
    coelhinho: 'Que seu sono seja tão tranquilo quanto este coelhinho.'
};

// Frases de regagem (aleatórias)
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

// Frases dos marcos
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

function carregarDados() {
    const dados = localStorage.getItem(STORAGE_KEY);
    if (dados) {
        return JSON.parse(dados);
    }
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
        ultimoAcesso: null,
        primeiraVisita: true
    };
}

function salvarDados(dados) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

let dados = carregarDados();

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

const navBotoes = document.querySelectorAll('.nav-links button');
const secoes = document.querySelectorAll('.secao');

const fraseDoDia = document.getElementById('fraseDoDia');
const semanaIndicador = document.getElementById('semanaIndicador');
const diasRestantes = document.getElementById('diasRestantes');
const streakInfo = document.getElementById('streakInfo');
const btnRegar = document.getElementById('btnRegar');
const visitantes = document.querySelectorAll('.visitante');
const marcosMini = document.querySelectorAll('.marco-mini');

const gridDesejos = document.getElementById('gridDesejos');
const btnNovoDesejo = document.getElementById('btnNovoDesejo');
const btnModoNoturno = document.getElementById('btnModoNoturno');
const filtrosDesejos = document.getElementById('filtrosDesejos');

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

const particulasContainer = document.getElementById('particulasContainer');
const ceuJardim = document.getElementById('ceuJardim');
const plantaSVG = document.getElementById('plantaSVG');

// ==============================================
// INICIALIZAÇÃO
// ==============================================
function init() {
    // Verifica se já está autenticada (30 dias)
    const authData = localStorage.getItem('nosso_jardim_auth');
    if (authData) {
        const auth = JSON.parse(authData);
        const agora = new Date().getTime();
        if (agora - auth.timestamp < 30 * 24 * 60 * 60 * 1000) {
            // Ainda válido
            if (dados.configurado) {
                mostrarConteudoPrincipal();
            } else {
                mostrarTelaConfig();
            }
            return;
        }
    }
    
    // Mostra tela de senha
    telaSenha.classList.remove('esconder');
    
    // Evento de senha
    btnEntrar.addEventListener('click', verificarSenha);
    inputSenha.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verificarSenha();
    });
    
    // Evento de configuração
    btnPlantar.addEventListener('click', configurarJardin);
    
    // Evento de fechar boas-vindas
    btnFecharBoasVindas.addEventListener('click', fecharBoasVindas);
    
    // Navegação
    navBotoes.forEach(btn => {
        btn.addEventListener('click', () => navegarSecao(btn.dataset.secao));
    });
    
    // Regar
    btnRegar.addEventListener('click', regarPlanta);
    
    // Visitantes
    visitantes.forEach(v => {
        v.addEventListener('click', () => mostrarFraseVisitante(v.dataset.animal));
    });
    
    // Desejos
    btnNovoDesejo.addEventListener('click', () => abrirModalDesejo());
    btnModoNoturno.addEventListener('click', abrirModoNoturno);
    
    // Filtros
    if (filtrosDesejos) {
        filtrosDesejos.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => filtrarDesejos(btn.dataset.filtro, btn));
        });
    }
    
    // Cartas
    btnNovaCarta.addEventListener('click', () => abrirModalCarta());
    
    // Modal
    btnFecharModal.addEventListener('click', fecharModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) fecharModal();
    });
    
    // Modo noturno
    btnSalvarNoturno.addEventListener('click', salvarDesejoNoturno);
    btnFecharNoturno.addEventListener('click', fecharModoNoturno);
    
    // Exportar/Importar
    btnExportar.addEventListener('click', exportarDados);
    btnImportar.addEventListener('click', () => inputImportar.click());
    inputImportar.addEventListener('change', importarDados);
    
    // Marcos mini
    marcosMini.forEach(m => {
        m.addEventListener('click', () => navegarSecao('marcos'));
    });
}

function verificarSenha() {
    const senha = inputSenha.value.trim();
    if (senha === SENHA_CORRETA) {
        // Salvar autenticação
        localStorage.setItem('nosso_jardim_auth', JSON.stringify({
            timestamp: new Date().getTime()
        }));
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
    // Sugerir data atual - 280 dias como DUM padrão
    const hoje = new Date();
    const dumSugerida = new Date(hoje);
    dumSugerida.setDate(dumSugerida.getDate() - 280);
    inputDUM.value = dumSugerida.toISOString().split('T')[0];
}

function configurarJardin() {
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
    
    // Calcular DPP
    if (dum) {
        const dataDUM = new Date(dum);
        const dataDPP = new Date(dataDUM);
        dataDPP.setDate(dataDPP.getDate() + 280);
        dados.dataDPP = dataDPP.toISOString().split('T')[0];
    }
    
    salvarDados(dados);
    telaConfig.classList.add('esconder');
    mostrarBoasVindas();
}

function mostrarBoasVindas() {
    telaBoasVindas.classList.add('visivel');
}

function fecharBoasVindas() {
    telaBoasVindas.classList.remove('visivel');
    dados.primeiraVisita = false;
    salvarDados(dados);
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

function atualizarPlanta() {
    const semana = dados.semanaAtual;
    // 7 estágios de crescimento
    let estagio;
    if (semana <= 5) estagio = 1;       // Broto
    else if (semana <= 10) estagio = 2;  // Duas folhas
    else if (semana <= 16) estagio = 3;  // Caule grosso
    else if (semana <= 20) estagio = 4;  // Botões
    else if (semana <= 26) estagio = 5;  // Primeira flor
    else if (semana <= 32) estagio = 6;  // Flores e fruto
    else estagio = 7;                     // Árvore florida
    
    // Atualiza o SVG da planta
    atualizarSVGPlanta(estagio, semana);
}

function atualizarSVGPlanta(estagio, semana) {
    if (!plantaSVG) return;
    
    const alturas = [80, 120, 160, 200, 240, 260, 280];
    const altura = alturas[estagio - 1];
    
    let svgContent = '';
    
    // Vaso
    svgContent += `<rect x="70" y="${altura + 10}" width="60" height="50" rx="8" fill="#C4A8D6" stroke="#9B72B5" stroke-width="2"/>`;
    svgContent += `<rect x="60" y="${altura + 5}" width="80" height="12" rx="6" fill="#D4B872"/>`;
    
    // Caule
    svgContent += `<line x1="100" y1="${altura + 10}" x2="100" y2="40" stroke="#6A9A7A" stroke-width="4" stroke-linecap="round"/>`;
    
    if (estagio >= 2) {
        // Folhas
        svgContent += `<ellipse cx="75" cy="${altura - 20}" rx="22" ry="10" fill="#8CB89C" transform="rotate(-30 75 ${altura - 20})"/>`;
        svgContent += `<ellipse cx="125" cy="${altura - 40}" rx="22" ry="10" fill="#8CB89C" transform="rotate(30 125 ${altura - 40})"/>`;
    }
    
    if (estagio >= 3) {
        svgContent += `<ellipse cx="80" cy="${altura - 60}" rx="20" ry="9" fill="#7BAE7F" transform="rotate(-20 80 ${altura - 60})"/>`;
        svgContent += `<ellipse cx="120" cy="${altura - 70}" rx="20" ry="9" fill="#7BAE7F" transform="rotate(20 120 ${altura - 70})"/>`;
    }
    
    if (estagio >= 4) {
        // Botões
        svgContent += `<circle cx="85" cy="${altura - 90}" r="8" fill="#E8D5F0" stroke="#C4A8D6" stroke-width="2"/>`;
        svgContent += `<circle cx="115" cy="${altura - 85}" r="7" fill="#E8D5F0" stroke="#C4A8D6" stroke-width="2"/>`;
    }
    
    if (estagio >= 5) {
        // Flor 1 aberta
        svgContent += `<circle cx="85" cy="${altura - 90}" r="14" fill="#D4B872" opacity="0.3"/>`;
        svgContent += `<circle cx="78" cy="${altura - 97}" r="7" fill="#E8D5F0"/>`;
        svgContent += `<circle cx="92" cy="${altura - 97}" r="7" fill="#E8D5F0"/>`;
        svgContent += `<circle cx="78" cy="${altura - 83}" r="7" fill="#E8D5F0"/>`;
        svgContent += `<circle cx="92" cy="${altura - 83}" r="7" fill="#E8D5F0"/>`;
        svgContent += `<circle cx="85" cy="${altura - 90}" r="6" fill="#D4B872"/>`;
    }
    
    if (estagio >= 6) {
        // Flor 2 e fruto
        svgContent += `<circle cx="115" cy="${altura - 85}" r="12" fill="#D4B872" opacity="0.3"/>`;
        svgContent += `<circle cx="109" cy="${altura - 91}" r="6" fill="#E8D5F0"/>`;
        svgContent += `<circle cx="121" cy="${altura - 91}" r="6" fill="#E8D5F0"/>`;
        svgContent += `<circle cx="109" cy="${altura - 79}" r="6" fill="#E8D5F0"/>`;
        svgContent += `<circle cx="121" cy="${altura - 79}" r="6" fill="#E8D5F0"/>`;
        svgContent += `<circle cx="115" cy="${altura - 85}" r="5" fill="#D4B872"/>`;
        
        // Fruto
        svgContent += `<ellipse cx="100" cy="${altura - 105}" rx="10" ry="12" fill="#D4B872" opacity="0.7"/>`;
    }
    
    if (estagio >= 7) {
        // Árvore mais cheia
        svgContent += `<ellipse cx="70" cy="${altura - 100}" rx="18" ry="12" fill="#8CB89C" opacity="0.7"/>`;
        svgContent += `<ellipse cx="130" cy="${altura - 95}" rx="18" ry="12" fill="#8CB89C" opacity="0.7"/>`;
        svgContent += `<circle cx="100" cy="${altura - 115}" r="14" fill="#D4B872" opacity="0.5"/>`;
    }
    
    plantaSVG.innerHTML = svgContent;
}

function atualizarFraseDoDia() {
    const semana = dados.semanaAtual;
    const frase = FRASES_SEMANAIS[Math.min(semana - 1, 39)] || 'Deus está cuidando de cada detalhe.';
    if (fraseDoDia) {
        fraseDoDia.textContent = frase;
    }
}

function atualizarStreak() {
    const hoje = new Date().toDateString();
    const ultimaRegagem = dados.ultimaRegagem ? new Date(dados.ultimaRegagem).toDateString() : null;
    
    if (ultimaRegagem === hoje) {
        // Já regou hoje
    } else if (ultimaRegagem === new Date(Date.now() - 86400000).toDateString()) {
        // Regou ontem, streak mantido
    } else if (ultimaRegagem && ultimaRegagem !== hoje) {
        // Perdeu streak
        if (dados.streak > 0 && (new Date() - new Date(dados.ultimaRegagem)) > 3 * 86400000) {
            dados.streak = 0;
            salvarDados(dados);
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
        // Já regou hoje
        const frase = FRASES_REGAGEM[Math.floor(Math.random() * FRASES_REGAGEM.length)];
        mostrarFraseFlutuante(frase);
        return;
    }
    
    dados.streak++;
    dados.ultimaRegagem = new Date().toISOString();
    salvarDados(dados);
    
    atualizarStreak();
    
    const frase = FRASES_REGAGEM[Math.floor(Math.random() * FRASES_REGAGEM.length)];
    mostrarFraseFlutuante(frase);
    
    // Animação de gotinhas
    criarGotinhas();
}

function criarGotinhas() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const gota = document.createElement('div');
            gota.className = 'particula';
            gota.style.cssText = `
                background: #9B72B5;
                width: 6px;
                height: 10px;
                border-radius: 50%;
                position: fixed;
                top: 40%;
                left: ${45 + Math.random() * 10}%;
                animation: cair 1.5s ease-in forwards;
                z-index: 150;
                pointer-events: none;
            `;
            document.body.appendChild(gota);
            setTimeout(() => gota.remove(), 1500);
        }, i * 100);
    }
}

function mostrarFraseVisitante(animal) {
    const frase = FRASES_ANIMAIS[animal] || 'Que bênção ter você aqui!';
    mostrarFraseFlutuante(frase);
}

function mostrarFraseFlutuante(frase) {
    // Remove balões existentes
    document.querySelectorAll('.balao-frase').forEach(b => b.remove());
    
    const balao = document.createElement('div');
    balao.className = 'balao-frase';
    balao.textContent = frase;
    balao.style.cssText = `
        position: fixed;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 150;
    `;
    document.body.appendChild(balao);
    
    setTimeout(() => {
        balao.style.opacity = '0';
        balao.style.transition = 'opacity 0.5s';
        setTimeout(() => balao.remove(), 500);
    }, 4000);
}

function atualizarSemanaIndicador() {
    if (semanaIndicador) {
        semanaIndicador.textContent = `Semana ${dados.semanaAtual} de gestação`;
    }
    
    if (diasRestantes && dados.dataDPP) {
        const hoje = new Date();
        const dpp = new Date(dados.dataDPP);
        const diff = Math.ceil((dpp - hoje) / (1000 * 60 * 60 * 24));
        if (diff > 0) {
            diasRestantes.textContent = `Faltam aproximadamente ${diff} dias para conhecer o maninho(a)`;
        } else if (diff === 0) {
            diasRestantes.textContent = 'O grande dia chegou!';
        } else {
            diasRestantes.textContent = `Já passou! O maninho(a) está aqui há ${Math.abs(diff)} dias!`;
        }
    }
}

function verificarVisitantes() {
    const semana = dados.semanaAtual;
    visitantes.forEach(v => {
        const semanaMin = parseInt(v.dataset.semanaMin);
        if (semana >= semanaMin) {
            v.style.display = 'block';
            v.style.opacity = '1';
        } else {
            v.style.opacity = '0.3';
            v.style.pointerEvents = 'none';
        }
    });
}

function atualizarMarcosMini() {
    marcosMini.forEach(m => {
        const marco = m.dataset.marco;
        if (dados.marcos[marco]) {
            m.classList.add('concluido');
        }
    });
}

// ==============================================
// CÉU DO JARDIM
// ==============================================
function atualizarCeu() {
    const hora = new Date().getHours();
    if (ceuJardim) {
        ceuJardim.className = 'ceu-jardim';
        if (hora >= 6 && hora < 12) {
            ceuJardim.classList.add('ceu-manha');
        } else if (hora >= 12 && hora < 18) {
            ceuJardim.classList.add('ceu-tarde');
        } else {
            ceuJardim.classList.add('ceu-noite');
            criarEstrelinhas();
        }
    }
}

function criarEstrelinhas() {
    if (!ceuJardim) return;
    ceuJardim.querySelectorAll('.estrelinha').forEach(e => e.remove());
    for (let i = 0; i < 20; i++) {
        const estrela = document.createElement('div');
        estrela.className = 'estrelinha';
        estrela.style.cssText = `
            top: ${Math.random() * 60}%;
            left: ${Math.random() * 90}%;
            width: ${2 + Math.random() * 3}px;
            height: ${2 + Math.random() * 3}px;
            animation-delay: ${Math.random() * 2}s;
        `;
        ceuJardim.appendChild(estrela);
    }
}

// ==============================================
// PARTÍCULAS
// ==============================================
function criarParticulas() {
    if (!particulasContainer) return;
    
    setInterval(() => {
        const particula = document.createElement('div');
        const tipo = Math.random() > 0.6 ? 'vagalume' : 'petala';
        particula.className = `participa ${tipo}`;
        particula.style.cssText = `
            left: ${Math.random() * 100}%;
            animation-duration: ${6 + Math.random() * 10}s;
            animation-delay: ${Math.random() * 3}s;
        `;
        particulasContainer.appendChild(particula);
        
        setTimeout(() => particula.remove(), 16000);
    }, 2000);
}

// ==============================================
// NAVEGAÇÃO
// ==============================================
function navegarSecao(secaoId) {
    navBotoes.forEach(btn => btn.classList.remove('ativo'));
    const btnAtivo = document.querySelector(`[data-secao="${secaoId}"]`);
    if (btnAtivo) btnAtivo.classList.add('ativo');
    
    secoes.forEach(s => s.classList.remove('ativa'));
    const secao = document.getElementById(`secao-${secaoId}`);
    if (secao) secao.classList.add('ativa');
    
    // Renderizar conteúdo da seção
    if (secaoId === 'desejos') renderizarDesejos();
    if (secaoId === 'cartas') renderizarCartas();
    if (secaoId === 'timeline') renderizarLinhaTempo();
    if (secaoId === 'marcos') renderizarMarcos();
    if (secaoId === 'pote') renderizarPote();
    if (secaoId === 'frases') renderizarFrasesSalvas();
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
        <h3>${desejoExistente ? 'Editar Desejo' : 'Novo Desejo Estranho'}</h3>
        <div class="form-grupo">
            <label>O que você desejou?</label>
            <input type="text" id="inputDesejoTexto" value="${desejoExistente ? desejoExistente.texto : ''}" placeholder="Ex: Picles com sorvete de chocolate...">
        </div>
        <div class="form-grupo">
            <label>Data e hora</label>
            <input type="datetime-local" id="inputDesejoData" value="${desejoExistente ? desejoExistente.data : new Date().toISOString().slice(0, 16)}">
        </div>
        <div class="form-grupo">
            <label>Intensidade da vontade</label>
            <div class="intensidade-selector" id="intensidadeSelector">
                ${[1,2,3,4,5].map(i => `
                    <svg class="estrela-sel ${desejoExistente && desejoExistente.intensidade >= i ? 'ativa' : ''}" data-valor="${i}" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
                    </svg>
                `).join('')}
            </div>
            <input type="hidden" id="inputDesejoIntensidade" value="${desejoExistente ? desejoExistente.intensidade : 3}">
        </div>
        <div class="form-grupo">
            <label>Categoria</label>
            <select id="inputDesejoCategoria">
                ${categorias.map(c => `
                    <option value="${c.id}" ${desejoExistente && desejoExistente.categoria === c.id ? 'selected' : ''}>${c.label}</option>
                `).join('')}
            </select>
        </div>
        <div class="form-grupo">
            <label>Conseguiu realizar?</label>
            <select id="inputDesejoRealizado">
                <option value="sim" ${desejoExistente && desejoExistente.realizado ? 'selected' : ''}>Sim</option>
                <option value="nao" ${desejoExistente && !desejoExistente.realizado ? 'selected' : ''}>Ainda não</option>
            </select>
        </div>
        <div class="form-grupo">
            <label>Onde você estava? (opcional)</label>
            <input type="text" id="inputDesejoLocal" value="${desejoExistente ? desejoExistente.local || '' : ''}" placeholder="Ex: No mercado, 3h da manhã...">
        </div>
        <div class="form-grupo">
            <label>Notas adicionais</label>
            <textarea id="inputDesejoNotas">${desejoExistente ? desejoExistente.notas || '' : ''}</textarea>
        </div>
        <button class="btn btn-primario" id="btnSalvarDesejo">Salvar Desejo</button>
        ${desejoExistente ? `<button class="btn btn-perigo" style="margin-top:8px;" id="btnExcluirDesejo">Excluir Desejo</button>` : ''}
    `;
    
    abrirModal(html);
    
    // Eventos da intensidade
    document.querySelectorAll('#intensidadeSelector .estrela-sel').forEach(estrela => {
        estrela.addEventListener('click', () => {
            const valor = parseInt(estrela.dataset.valor);
            document.getElementById('inputDesejoIntensidade').value = valor;
            document.querySelectorAll('#intensidadeSelector .estrela-sel').forEach((e, i) => {
                e.classList.toggle('ativa', i < valor);
            });
        });
    });
    
    document.getElementById('btnSalvarDesejo').addEventListener('click', () => {
        const desejo = {
            id: desejoExistente ? desejoExistente.id : Date.now(),
            texto: document.getElementById('inputDesejoTexto').value,
            data: document.getElementById('inputDesejoData').value,
            intensidade: parseInt(document.getElementById('inputDesejoIntensidade').value),
            categoria: document.getElementById('inputDesejoCategoria').value,
            realizado: document.getElementById('inputDesejoRealizado').value === 'sim',
            local: document.getElementById('inputDesejoLocal').value,
            notas: document.getElementById('inputDesejoNotas').value
        };
        
        if (!desejo.texto) {
            alert('Descreva seu desejo!');
            return;
        }
        
        if (desejoExistente) {
            const index = dados.desejos.findIndex(d => d.id === desejoExistente.id);
            dados.desejos[index] = desejo;
        } else {
            dados.desejos.push(desejo);
        }
        
        salvarDados(dados);
        fecharModal();
        renderizarDesejos();
    });
    
    if (desejoExistente) {
        document.getElementById('btnExcluirDesejo').addEventListener('click', () => {
            if (confirm('Excluir este desejo?')) {
                dados.desejos = dados.desejos.filter(d => d.id !== desejoExistente.id);
                salvarDados(dados);
                fecharModal();
                renderizarDesejos();
            }
        });
    }
}

function renderizarDesejos(filtro = 'todos') {
    if (!gridDesejos) return;
    
    let desejosFiltrados = dados.desejos;
    
    if (filtro === 'realizados') {
        desejosFiltrados = dados.desejos.filter(d => d.realizado);
    } else if (filtro === 'pendentes') {
        desejosFiltrados = dados.desejos.filter(d => !d.realizado);
    } else if (filtro === 'intensos') {
        desejosFiltrados = [...dados.desejos].sort((a, b) => b.intensidade - a.intensidade).slice(0, 10);
    }
    
    if (desejosFiltrados.length === 0) {
        gridDesejos.innerHTML = '<p style="text-align:center;color:var(--texto-claro);padding:40px;">Nenhum desejo registrado ainda. Clique em "Novo Desejo" para começar!</p>';
        return;
    }
    
    gridDesejos.innerHTML = desejosFiltrados.map(d => `
        <div class="card" onclick="editarDesejo(${d.id})">
            <div class="cabecalho-card">
                <div class="icone-categoria">
                    ${iconeCategoria(d.categoria)}
                </div>
                <div>
                    <div style="font-weight:600;">${d.texto.substring(0, 40)}${d.texto.length > 40 ? '...' : ''}</div>
                    <div class="data-card">${formatarData(d.data)}</div>
                </div>
            </div>
            <div class="intensidade">
                ${[1,2,3,4,5].map(i => `
                    <svg class="estrela ${d.intensidade >= i ? '' : 'vazia'}" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
                    </svg>
                `).join('')}
            </div>
            <div class="${d.realizado ? 'selo-realizado' : 'selo-pendente'}">${d.realizado ? 'Realizado' : 'Sonhando...'}</div>
        </div>
    `).join('');
}

function editarDesejo(id) {
    const desejo = dados.desejos.find(d => d.id === id);
    if (desejo) abrirModalDesejo(desejo);
}

function filtrarDesejos(filtro, btn) {
    document.querySelectorAll('#filtrosDesejos button').forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    renderizarDesejos(filtro);
}

function iconeCategoria(categoria) {
    const icones = {
        salgado: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="4"/><circle cx="12" cy="12" r="5"/></svg>',
        doce: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="3"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="14" x2="16" y2="14"/></svg>',
        azedo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 8c2 2 4 2 8 0"/></svg>',
        bizarro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 8h.01M16 8h.01M8 16h.01M16 16h.01"/></svg>',
        cheiro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c-3 4-6 8-6 12 0 3.5 2.5 6 6 6s6-2.5 6-6c0-4-3-8-6-12z"/></svg>',
        gelo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="3"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/></svg>',
        comida: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="6" x2="12" y2="12"/><line x1="12" y1="12" x2="12" y2="18"/></svg>',
        outro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>'
    };
    return icones[categoria] || icones.outro;
}

// ==============================================
// MODO NOTURNO
// ==============================================
function abrirModoNoturno() {
    modoNoturnoOverlay.classList.add('visivel');
    inputDesejoNoturno.focus();
}

function fecharModoNoturno() {
    modoNoturnoOverlay.classList.remove('visivel');
    inputDesejoNoturno.value = '';
}

function salvarDesejoNoturno() {
    const texto = inputDesejoNoturno.value.trim();
    if (!texto) return;
    
    const desejo = {
        id: Date.now(),
        texto: texto,
        data: new Date().toISOString().slice(0, 16),
        intensidade: 5,
        categoria: 'outro',
        realizado: false,
        local: '',
        notas: 'Registrado de madrugada'
    };
    
    dados.desejos.push(desejo);
    salvarDados(dados);
    fecharModoNoturno();
    renderizarDesejos();
}

// ==============================================
// CARTAS
// ==============================================
function abrirModalCarta(cartaExistente = null) {
    let html = `
        <h3>${cartaExistente ? 'Editar Carta' : 'Nova Carta para o Bebê'}</h3>
        <div class="form-grupo">
            <label>Título</label>
            <input type="text" id="inputCartaTitulo" value="${cartaExistente ? cartaExistente.titulo : ''}">
        </div>
        <div class="form-grupo">
            <label>Data</label>
            <input type="date" id="inputCartaData" value="${cartaExistente ? cartaExistente.data : new Date().toISOString().split('T')[0]}">
        </div>
        <div class="form-grupo">
            <label>Humor do dia</label>
            <select id="inputCartaHumor">
                <option value="feliz" ${cartaExistente && cartaExistente.humor === 'feliz' ? 'selected' : ''}>Feliz</option>
                <option value="ansiosa" ${cartaExistente && cartaExistente.humor === 'ansiosa' ? 'selected' : ''}>Ansiosa</option>
                <option value="cansada" ${cartaExistente && cartaExistente.humor === 'cansada' ? 'selected' : ''}>Cansada</option>
                <option value="emotiva" ${cartaExistente && cartaExistente.humor === 'emotiva' ? 'selected' : ''}>Emotiva</option>
                <option value="grata" ${cartaExistente && cartaExistente.humor === 'grata' ? 'selected' : ''}>Grata</option>
            </select>
        </div>
        <div class="form-grupo">
            <label>Texto</label>
            <textarea id="inputCartaTexto" style="min-height:200px;">${cartaExistente ? cartaExistente.texto : ''}</textarea>
        </div>
        <div class="form-grupo">
            <label>Cápsula do tempo (abrir apenas em)</label>
            <input type="date" id="inputCartaCapsula" value="${cartaExistente && cartaExistente.capsula ? cartaExistente.capsula : ''}">
            <small style="color:var(--texto-claro);">Deixe em branco se não for cápsula do tempo</small>
        </div>
        <button class="btn btn-primario" id="btnSalvarCarta">Salvar Carta</button>
        ${cartaExistente ? `<button class="btn btn-perigo" style="margin-top:8px;" id="btnExcluirCarta">Excluir Carta</button>` : ''}
    `;
    
    abrirModal(html);
    
    document.getElementById('btnSalvarCarta').addEventListener('click', () => {
        const carta = {
            id: cartaExistente ? cartaExistente.id : Date.now(),
            titulo: document.getElementById('inputCartaTitulo').value,
            data: document.getElementById('inputCartaData').value,
            humor: document.getElementById('inputCartaHumor').value,
            texto: document.getElementById('inputCartaTexto').value,
            capsula: document.getElementById('inputCartaCapsula').value || null
        };
        
        if (!carta.texto) {
            alert('Escreva sua carta!');
            return;
        }
        
        if (cartaExistente) {
            const index = dados.cartas.findIndex(c => c.id === cartaExistente.id);
            dados.cartas[index] = carta;
        } else {
            dados.cartas.push(carta);
        }
        
        salvarDados(dados);
        fecharModal();
        renderizarCartas();
    });
    
    if (cartaExistente) {
        document.getElementById('btnExcluirCarta').addEventListener('click', () => {
            if (confirm('Excluir esta carta?')) {
                dados.cartas = dados.cartas.filter(c => c.id !== cartaExistente.id);
                salvarDados(dados);
                fecharModal();
                renderizarCartas();
            }
        });
    }
}

function renderizarCartas() {
    if (!gridCartas) return;
    
    const hoje = new Date().toISOString().split('T')[0];
    const cartasVisiveis = dados.cartas.filter(c => !c.capsula || c.capsula <= hoje);
    
    if (cartasVisiveis.length === 0) {
        gridCartas.innerHTML = '<p style="text-align:center;color:var(--texto-claro);padding:40px;">Nenhuma carta escrita ainda.</p>';
        return;
    }
    
    gridCartas.innerHTML = cartasVisiveis.map(c => `
        <div class="card" onclick="editarCarta(${c.id})">
            <h4 style="color:var(--lilas-profundo);">${c.titulo || 'Sem título'}</h4>
            <div class="data-card">${formatarData(c.data)}</div>
            <p style="margin-top:8px;color:var(--texto-claro);">${c.texto.substring(0, 100)}...</p>
            ${c.capsula ? '<div style="font-size:0.7rem;color:var(--dourado);margin-top:6px;">Cápsula do tempo</div>' : ''}
        </div>
    `).join('');
}

function editarCarta(id) {
    const carta = dados.cartas.find(c => c.id === id);
    if (carta) abrirModalCarta(carta);
}

// ==============================================
// LINHA DO TEMPO
// ==============================================
function renderizarLinhaTempo() {
    if (!linhaTempo) return;
    
    let html = '';
    for (let i = 1; i <= 40; i++) {
        let classe = 'semana-futura';
        if (i < dados.semanaAtual) classe = 'semana-passada';
        if (i === dados.semanaAtual) classe = 'semana-atual';
        
        html += `<div class="semana-bolinha ${classe}" onclick="mostrarInfoSemana(${i})">${i}</div>`;
    }
    
    linhaTempo.innerHTML = html;
}

function mostrarInfoSemana(semana) {
    const frase = FRASES_SEMANAIS[Math.min(semana - 1, 39)] || 'Uma semana especial.';
    alert(`Semana ${semana}\n\n${frase}`);
}

// ==============================================
// MARCOS
// ==============================================
function renderizarMarcos() {
    if (!marcosChecklist) return;
    
    const marcos = [
        { id: 'teste_positivo', label: 'Teste positivo', icone: 'M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z' },
        { id: 'primeira_consulta', label: 'Primeira consulta pré-natal', icone: 'M22 12h-4l-3 9L9 3l-3 9H2' },
        { id: 'primeira_eco', label: 'Primeira ecografia', icone: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
        { id: 'descobriu_sexo', label: 'Descobriu o sexo', icone: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
        { id: 'primeiro_chute', label: 'Primeiro chute sentido', icone: 'M20 12c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8 8-3.59 8-8z' },
        { id: 'parceiro_sentiu', label: 'Parceiro(a) sentiu o bebê', icone: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z' },
        { id: 'cha_bebe', label: 'Chá de bebê', icone: 'M20 7h-4V3H8v4H4v14h16V7z' },
        { id: 'quartinho', label: 'Quartinho montado', icone: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
        { id: 'mala_maternidade', label: 'Mala da maternidade pronta', icone: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' }
    ];
    
    marcosChecklist.innerHTML = marcos.map(m => `
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--branco);border-radius:10px;margin-bottom:8px;cursor:pointer;"
             onclick="toggleMarco('${m.id}')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${dados.marcos[m.id] ? 'var(--verde-menta)' : 'var(--lilas-suave)'}" stroke-width="2">
                <path d="${m.icone}"/>
            </svg>
            <span style="${dados.marcos[m.id] ? 'text-decoration:line-through;color:var(--verde-menta);' : ''}">${m.label}</span>
            ${dados.marcos[m.id] ? `<span style="margin-left:auto;font-size:0.75rem;color:var(--verde-menta);">${dados.marcos[m.id]}</span>` : ''}
        </div>
    `).join('');
}

function toggleMarco(marcoId) {
    if (dados.marcos[marcoId]) {
        delete dados.marcos[marcoId];
    } else {
        dados.marcos[marcoId] = new Date().toISOString().split('T')[0];
        
        // Mostrar frase do marco
        const frase = FRASES_MARCOS[marcoId];
        if (frase) mostrarFraseFlutuante(frase);
    }
    
    salvarDados(dados);
    renderizarMarcos();
    atualizarMarcosMini();
}

// ==============================================
// POTE DE DESEJOS
// ==============================================
function renderizarPote() {
    if (!poteEstrelinhas || !contadorPote) return;
    
    const realizados = dados.desejos.filter(d => d.realizado).length;
    contadorPote.textContent = `${realizados} desejos realizados`;
    
    const estrelas = Math.min(Math.floor(realizados / 2), 30);
    poteEstrelinhas.innerHTML = Array(estrelas).fill(0).map(() => `
        <svg class="estrelinha-pote" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
        </svg>
    `).join('');
}

// ==============================================
// FRASES SALVAS
// ==============================================
function salvarFraseAtual() {
    const frase = fraseDoDia.textContent;
    if (!dados.frasesSalvas.includes(frase)) {
        dados.frasesSalvas.push(frase);
        salvarDados(dados);
        mostrarFraseFlutuante('Frase salva com carinho!');
    }
}

function renderizarFrasesSalvas() {
    if (!frasesSalvasLista) return;
    
    if (dados.frasesSalvas.length === 0) {
        frasesSalvasLista.innerHTML = '<p style="text-align:center;color:var(--texto-claro);padding:40px;">Nenhuma frase salva ainda. Clique no coração ao lado da frase do dia para salvar!</p>';
        return;
    }
    
    frasesSalvasLista.innerHTML = dados.frasesSalvas.map((frase, index) => `
        <div class="frase-salva-item">
            <span>${frase}</span>
            <button class="btn-remover-frase" onclick="removerFraseSalva(${index})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
            </button>
        </div>
    `).join('');
}

function removerFraseSalva(index) {
    dados.frasesSalvas.splice(index, 1);
    salvarDados(dados);
    renderizarFrasesSalvas();
}

// ==============================================
// PDF
// ==============================================
function gerarPDFDesejos() {
    const realizados = dados.desejos.filter(d => d.realizado).length;
    const html = `
        <div style="padding:40px;font-family:Georgia,serif;color:#3D2A4F;">
            <h1 style="color:#7B4B9A;text-align:center;">Meu Jardim de Desejos</h1>
            <p style="text-align:center;color:#6B5A7A;">Gestação — ${dados.semanaAtual} semanas</p>
            <hr style="border-color:#C4A8D6;margin:20px 0;">
            ${dados.desejos.map(d => `
                <div style="margin-bottom:20px;padding:16px;border:1px solid #E8D5F0;border-radius:10px;">
                    <strong>${d.texto}</strong><br>
                    <small>${formatarData(d.data)} | Intensidade: ${'*'.repeat(d.intensidade)} | ${d.realizado ? 'Realizado' : 'Pendente'}</small>
                    ${d.notas ? `<p style="color:#6B5A7A;">${d.notas}</p>` : ''}
                </div>
            `).join('')}
            <hr style="border-color:#C4A8D6;margin:20px 0;">
            <p style="text-align:center;"><strong>Total de desejos:</strong> ${dados.desejos.length} | <strong>Realizados:</strong> ${realizados}</p>
            <p style="text-align:center;color:#9B72B5;margin-top:20px;">Gerado pelo Nosso Jardim</p>
        </div>
    `;
    
    baixarPDF(html, 'meus-desejos.pdf');
}

function gerarPDFCartas() {
    const hoje = new Date().toISOString().split('T')[0];
    const cartasVisiveis = dados.cartas.filter(c => !c.capsula || c.capsula <= hoje);
    
    const html = `
        <div style="padding:40px;font-family:Georgia,serif;color:#3D2A4F;">
            <h1 style="color:#7B4B9A;text-align:center;">Cartas para o Bebê</h1>
            <p style="text-align:center;color:#6B5A7A;">${cartasVisiveis.length} cartas escritas</p>
            <hr style="border-color:#C4A8D6;margin:20px 0;">
            ${cartasVisiveis.map(c => `
                <div style="margin-bottom:30px;page-break-inside:avoid;">
                    <h3 style="color:#7B4B9A;">${c.titulo || 'Sem título'}</h3>
                    <small style="color:#6B5A7A;">${formatarData(c.data)} — ${c.humor}</small>
                    <p style="margin-top:12px;line-height:1.8;">${c.texto}</p>
                </div>
            `).join('')}
            <p style="text-align:center;color:#9B72B5;margin-top:20px;">Gerado pelo Nosso Jardim</p>
        </div>
    `;
    
    baixarPDF(html, 'cartas-para-o-bebe.pdf');
}

function baixarPDF(htmlContent, filename) {
    // Usando método simples com window.print() estilizado
    const janela = window.open('', '_blank');
    janela.document.write(`
        <html>
            <head>
                <title>${filename}</title>
                <style>
                    body { font-family: Georgia, serif; color: #3D2A4F; line-height: 1.6; }
                    @media print {
                        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                    }
                </style>
            </head>
            <body>${htmlContent}</body>
        </html>
    `);
    janela.document.close();
    setTimeout(() => {
        janela.print();
    }, 500);
}

// ==============================================
// EXPORTAR / IMPORTAR
// ==============================================
function exportarDados() {
    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nosso-jardim-backup.json';
    a.click();
    URL.revokeObjectURL(url);
    mostrarFraseFlutuante('Backup salvo! Guarde esse arquivo com carinho.');
}

function importarDados(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const novosDados = JSON.parse(e.target.result);
            if (confirm('Importar dados? Isso substituirá tudo que está salvo atualmente.')) {
                dados = novosDados;
                salvarDados(dados);
                location.reload();
            }
        } catch (err) {
            alert('Arquivo inválido.');
        }
    };
    reader.readAsText(file);
}

// ==============================================
// MODAL
// ==============================================
function abrirModal(conteudo) {
    modalConteudo.innerHTML = conteudo;
    modalOverlay.style.display = 'flex';
}

function fecharModal() {
    modalOverlay.style.display = 'none';
    modalConteudo.innerHTML = '';
}

// ==============================================
// UTILITÁRIOS
// ==============================================
function formatarData(dataStr) {
    if (!dataStr) return '';
    const data = new Date(dataStr);
    return data.toLocaleDateString('pt-BR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        hour: dataStr.includes('T') ? '2-digit' : undefined,
        minute: dataStr.includes('T') ? '2-digit' : undefined
    }).replace(',', ' —');
}

function renderizarTudo() {
    renderizarDesejos();
    renderizarCartas();
    renderizarLinhaTempo();
    renderizarMarcos();
    renderizarPote();
    renderizarFrasesSalvas();
}

// ==============================================
// INICIAR
// ==============================================
document.addEventListener('DOMContentLoaded', init);
