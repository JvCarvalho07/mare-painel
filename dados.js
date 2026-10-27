// Dados de EXEMPLO e o modelo de simulação do painel MARÉ (regras do ESTRUTURA.md, seções 3.4, 3.6 e 3.8).
// Os dois protótipos (paisagem.html e rio.html) leem daqui, então os números batem entre eles.
(function () {
  const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  // mês 0 = novembro de 2026 (o primeiro mês da projeção); negativos = passado
  const rotulo = m => { const i = 10 + m, a = 2026 + Math.floor(i / 12); return MESES[((i % 12) + 12) % 12] + "/" + String(a).slice(2) };

  const CENARIOS = {
    pess: { nome: "Pessimista", cor: "#c0703f", aporte: 1500, form: 1700, fixo: 600, prop: [0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3], conv: .2, ticket: 900, patro: 0, saida: 1 / 2, seletivo: 2 },
    prov: { nome: "Provável", cor: "#1f9ea6", aporte: 2000, form: 1100, fixo: 300, prop: [0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3], conv: .3, ticket: 1200, patro: 3000, saida: 1 / 4, seletivo: 4 },
    otim: { nome: "Otimista", cor: "#8c992a", aporte: 3000, form: 600, fixo: 200, prop: [0, 0, 1, 3, 3, 4, 5, 5, 6, 6, 6, 6], conv: .4, ticket: 2400, patro: 8000, saida: 1 / 6, seletivo: 5 },
  };

  // testes de tempestade (ESTRUTURA.md 3.8): cada um muda uma alavanca do modelo
  const TEMPESTADES = [
    { id: "equipe", nome: "Metade da equipe sai", onde: "Pessoas" },
    { id: "semcli", nome: "6 meses sem cliente", onde: "Comercial" },
    { id: "pref", nome: "Prefeitura não responde", onde: "Projetos" },
    { id: "patro", nome: "Patrocinador desiste", onde: "Comercial" },
    { id: "atraso", nome: "CNPJ atrasa 6 meses", onde: "Financeiro" },
    { id: "cart", nome: "Cartório 2× mais caro", onde: "Financeiro" },
    { id: "cont", nome: "Contador cobra cheio", onde: "Financeiro" },
    { id: "inad", nome: "30% dos clientes não pagam", onde: "Financeiro" },
  ];

  // equipe real (6 pessoas). Diretoria de cada um: A CONFIRMAR (só a do João é certa); horas por semana são exemplo.
  const DIRETORIAS = { PR: "Projetos", CO: "Comercial", FI: "Financeiro", MK: "Marketing", PC: "Pessoas e Cultura" };
  const EQUIPE = [
    ["João", "PR", 4, "mai/26", "ok", "Diretor de Projetos"], ["Elias", "CO", 4, "mai/26", "ok", ""], ["Letícia", "FI", 4, "mai/26", "ok", ""],
    ["Anaelson", "MK", 4, "mai/26", "ok", ""], ["Gabrielly", "PC", 4, "mai/26", "ok", ""], ["Cris", "PR", 4, "mai/26", "ok", "Função a definir"],
  ].map(([nome, dir, horas, entrou, estado, cargo]) => ({ nome, dir, diretoria: DIRETORIAS[dir], horas, entrou, estado, cargo: cargo || "Diretoria de " + DIRETORIAS[dir] }));

  // COMERCIAL (exemplo): possíveis clientes por etapa do funil
  const ETAPAS = ["Contato", "Reunião", "Proposta", "Fechado"];
  const PROSPECTOS = [
    { nome: "Clínica no Umarizal", seg: "Clínica", servico: "Diagnóstico de acessibilidade", valor: 1200, etapa: 2, chance: .5, prox: "Ligar sexta" },
    { nome: "Colégio no Marco", seg: "Escola particular", servico: "Oficina Bueiro Livre", valor: 600, etapa: 3, chance: 1, prox: "Marcar a data" },
    { nome: "Condomínio na Doca", seg: "Condomínio", servico: "Mapa de risco de alagamento", valor: 1800, etapa: 2, chance: .4, prox: "Proposta vence sexta" },
    { nome: "Farmácia em Nazaré", seg: "Comércio", servico: "Diagnóstico de acessibilidade", valor: 800, etapa: 1, chance: .3, prox: "Reunião terça" },
    { nome: "Shopping (Belém)", seg: "Shopping", servico: "Diagnóstico e campanha", valor: 3500, etapa: 0, chance: .15, prox: "Achar o contato" },
    { nome: "Construtora", seg: "Construtora", servico: "Relatório socioambiental", valor: 3000, etapa: 0, chance: .1, prox: "Mandar e-mail" },
    { nome: "Escola em Batista Campos", seg: "Escola particular", servico: "Oficina Bueiro Livre", valor: 500, etapa: 1, chance: .35, prox: "Reunião quinta" },
    { nome: "Empresa com ESG", seg: "Empresa", servico: "Projeto patrocinado", valor: 5000, etapa: 0, chance: .1, prox: "Pesquisar programa social" },
  ];
  const SERVICOS = [["Diagnóstico de acessibilidade", 600, 1500, "10 a 16 h"], ["Mapa de risco de alagamento", 800, 2500, "12 a 24 h"], ["Relatório socioambiental do bairro", 2000, 5000, "30 a 50 h"], ["Oficina Bueiro Livre", 300, 800, "6 a 8 h"], ["Projeto patrocinado", 2000, 8000, "40 a 60 h"]];

  // PROJETOS (exemplo nos números)
  const FLUXO = ["Pedido", "Triagem", "Campo", "Relatório", "Ação"];
  const PROJETOS = [
    { nome: "Maré Cheia", tema: "Alagamentos, calçadas e acessibilidade", etapa: 2, horas: 120, feito: 74, resp: "João", estado: "andamento" },
    { nome: "Sumaúma", tema: "Arborização", etapa: 0, horas: 80, feito: 0, resp: "a definir", estado: "próximo" },
    { nome: "Ciclo", tema: "Lixo e reciclagem", etapa: 0, horas: 60, feito: 0, resp: "a definir", estado: "próximo" },
    { nome: "Rota", tema: "Transporte", etapa: 0, horas: 90, feito: 0, resp: "a definir", estado: "ideia" },
  ];

  // MARKETING (exemplo)
  const FUNIL_MKT = [["Pessoas alcançadas", 4200], ["Visitas ao site", 610], ["Pedidos pelo formulário", 38], ["Viraram clientes", 2]];
  const POSTS = [[0, "Maré Cheia: o mapa", "post"], [1, "Bueiro Livre", "story"], [2, "Bairro da semana: Guamá", "post"], [3, "Bastidores do campo", "story"], [4, "Como mandar um ponto", "vídeo"], [7, "Jurunas alaga?", "post"], [9, "Equipe MARÉ", "story"], [11, "Dados de outubro", "post"]];
  const IMPRENSA = [["O Liberal", "jornal e site", "não contatado"], ["DOL / Diário do Pará", "jornal e site", "não contatado"], ["g1 Pará / TV Liberal", "TV e site", "não contatado"], ["RBA TV", "TV", "não contatado"], ["Rádios comunitárias", "rádio", "não contatado"]];

  // o que já aconteceu (meses negativos) e o que está previsto no cenário provável
  const MARCOS = [
    { m: -6, nome: "Grupo formado", tipo: "feito" }, { m: -4, nome: "Questionário: 96 respostas", tipo: "feito" },
    { m: -2, nome: "Site no ar", tipo: "feito" }, { m: -1, nome: "Maré Cheia: 21 pontos", tipo: "feito" },
    { m: 3, nome: "CNPJ", tipo: "plano" }, { m: 4, nome: "1º cliente", tipo: "plano" }, { m: 6, nome: "Decisão: prefeitura respondeu?", tipo: "decisao" },
    { m: 7, nome: "Processo seletivo", tipo: "plano" }, { m: 8, nome: "Obra piloto", tipo: "plano" }, { m: 12, nome: "Relatório anual", tipo: "plano" },
  ];

  const METAS = [["Pontos no mapa", 21, 30], ["Escolas atendidas", 1, 2], ["Relatórios", 0, 1], ["Clientes", 2, 4]];

  // simula 24 meses: caixa, receita, gasto, projetos e membros
  function simular(k, lig = new Set()) {
    const c = CENARIOS[k], out = [];
    let caixa = c.aporte - (lig.has("cart") ? c.form * 2 : c.form), membros = EQUIPE.length;
    const fixo = c.fixo + (lig.has("cont") ? 400 : 0);
    for (let m = 0; m < 24; m++) {
      if (lig.has("equipe") && m === 2) membros = Math.ceil(membros / 2);
      if (m > 0 && (m % Math.round(1 / c.saida)) === 0) membros = Math.max(2, membros - 1);
      if (m === 7) membros += c.seletivo;
      const capacidade = Math.min(1, membros / EQUIPE.length);
      const p = c.prop[Math.min(m, 11)] * capacidade;
      let conv = c.conv; if (lig.has("semcli") && m < 6) conv = 0; if (lig.has("atraso") && m < 9) conv = 0;
      let receita = p * conv * c.ticket; if (lig.has("inad")) receita *= .7;
      if (m === 7 && !lig.has("patro")) receita += lig.has("pref") ? c.patro * .5 : c.patro;
      caixa += receita - fixo;
      out.push({ m, rotulo: rotulo(m), caixa: Math.round(caixa), receita: Math.round(receita), gasto: fixo, projetos: p * conv, membros });
    }
    const inicio = c.aporte - (lig.has("cart") ? c.form * 2 : c.form);
    const zera = out.findIndex(o => o.caixa < 0);
    return { serie: out, inicio, fixo, folego: Math.max(0, inicio) / fixo, zera, fim: out[23].caixa, projetos: out.reduce((a, o) => a + o.projetos, 0) };
  }

  const brl = v => (v < 0 ? "−" : "") + "R$ " + Math.abs(Math.round(v)).toLocaleString("pt-BR");
  const selo = r => r.zera >= 0 && r.zera < 6 ? ["perigo", "Perigo"] : (r.folego < 3 || r.zera >= 0) ? ["atencao", "Atenção"] : ["ok", "Tranquilo"];

  window.MARE = { CENARIOS, TEMPESTADES, EQUIPE, DIRETORIAS, MARCOS, METAS, ETAPAS, PROSPECTOS, SERVICOS, FLUXO, PROJETOS, FUNIL_MKT, POSTS, IMPRENSA, simular, brl, selo, rotulo };
})();
