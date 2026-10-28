// Dados que a equipe preenche no painel. Ficam salvos no navegador de quem usa (localStorage);
// "Exportar" gera um arquivo .json para mandar aos outros, e "Importar" carrega esse arquivo.
// Quando o painel virar sistema, este arquivo é o que troca por chamadas à API.
(function () {
  const CHAVE = "mare_painel_v2";
  // dia de hoje de verdade (meio-dia, para não virar o dia por fuso)
  const hoje = (() => { const x = new Date(); x.setHours(12, 0, 0, 0); return x })();
  const d = (dia, mes = 10, ano = 2026) => `${ano}-${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
  let seq = 1; const id = () => "i" + (seq++).toString(36) + Date.now().toString(36).slice(-3);

  // ponto de partida: equipe real e lançamentos/contatos de EXEMPLO para a apresentação
  const INICIAL = () => ({
    versao: 2,
    exemplo: true, // dados de mentira para apresentar; some quando a equipe começa de verdade
    membros: [
      { id: id(), nome: "João", diretoria: "Projetos", cargo: "Diretor de Projetos", horas: 4 },
      { id: id(), nome: "Elias", diretoria: "Comercial", cargo: "Diretor Comercial", horas: 4 },
      { id: id(), nome: "Letícia", diretoria: "Financeiro", cargo: "Diretora Financeira", horas: 4 },
      { id: id(), nome: "Anaelson", diretoria: "Marketing", cargo: "Diretor de Marketing", horas: 4 },
      { id: id(), nome: "Gabrielly", diretoria: "Pessoas e Cultura", cargo: "Diretora de Pessoas e Cultura", horas: 4 },
      { id: id(), nome: "Cris", diretoria: "A definir", cargo: "Função ainda não decidida", horas: 4 },
    ],
    lancamentos: [
      { id: id(), data: d(5), descricao: "Contribuição dos membros", categoria: "Contribuições", tipo: "entrada", valor: 600, status: "pago", resp: "Letícia" },
      { id: id(), data: d(12), descricao: "Rifa de outubro", categoria: "Eventos", tipo: "entrada", valor: 450, status: "pago", resp: "Letícia" },
      { id: id(), data: d(14), descricao: "Domínio do site (1 ano)", categoria: "Site e sistemas", tipo: "saida", valor: 40, status: "pago", resp: "João" },
      { id: id(), data: d(18), descricao: "Impressão de panfletos", categoria: "Material", tipo: "saida", valor: 85, status: "pago", resp: "Anaelson" },
      { id: id(), data: d(22), descricao: "Passagens para o campo (Reduto)", categoria: "Transporte", tipo: "saida", valor: 48, status: "pago", resp: "João" },
      { id: id(), data: d(5, 11), descricao: "Contribuição dos membros", categoria: "Contribuições", tipo: "entrada", valor: 600, status: "pendente", resp: "Letícia" },
      { id: id(), data: d(10, 11), descricao: "Registro do estatuto no cartório", categoria: "Formalização", tipo: "saida", valor: 500, status: "pendente", resp: "Letícia" },
      { id: id(), data: d(10, 11), descricao: "Certificado digital e-CNPJ", categoria: "Formalização", tipo: "saida", valor: 220, status: "pendente", resp: "Letícia" },
      { id: id(), data: d(20, 11), descricao: "Oficina no Colégio do Marco", categoria: "Serviços", tipo: "entrada", valor: 600, status: "pendente", resp: "Elias" },
    ],
    orcamento: [
      { id: id(), categoria: "Formalização", planejado: 1100 }, { id: id(), categoria: "Transporte", planejado: 600 },
      { id: id(), categoria: "Material", planejado: 400 }, { id: id(), categoria: "Site e sistemas", planejado: 80 },
      { id: id(), categoria: "Obra piloto", planejado: 1800 }, { id: id(), categoria: "Eventos", planejado: 200 },
    ],
    prospectos: [
      { id: id(), nome: "Clínica no Umarizal", segmento: "Clínica", servico: "Diagnóstico de acessibilidade", valor: 1200, etapa: "Proposta", chance: 50, proximo: "Ligar para confirmar", data: d(30), resp: "Elias" },
      { id: id(), nome: "Colégio no Marco", segmento: "Escola particular", servico: "Oficina Bueiro Livre", valor: 600, etapa: "Fechado", chance: 100, proximo: "Marcar a data da oficina", data: d(4, 11), resp: "Elias" },
      { id: id(), nome: "Condomínio na Doca", segmento: "Condomínio", servico: "Mapa de risco de alagamento", valor: 1800, etapa: "Proposta", chance: 40, proximo: "Proposta vence", data: d(31), resp: "Elias" },
      { id: id(), nome: "Farmácia em Nazaré", segmento: "Comércio", servico: "Diagnóstico de acessibilidade", valor: 800, etapa: "Reunião", chance: 30, proximo: "Reunião com o gerente", data: d(3, 11), resp: "Elias" },
      { id: id(), nome: "Escola em Batista Campos", segmento: "Escola particular", servico: "Oficina Bueiro Livre", valor: 500, etapa: "Reunião", chance: 35, proximo: "Levar o material da oficina", data: d(5, 11), resp: "Elias" },
      { id: id(), nome: "Shopping de Belém", segmento: "Shopping", servico: "Diagnóstico e campanha", valor: 3500, etapa: "Contato", chance: 15, proximo: "Achar o responsável", data: d(7, 11), resp: "Elias" },
      { id: id(), nome: "Construtora", segmento: "Construtora", servico: "Relatório socioambiental", valor: 3000, etapa: "Contato", chance: 10, proximo: "Mandar apresentação", data: d(10, 11), resp: "Elias" },
    ],
    servicos: [
      { id: id(), nome: "Diagnóstico de acessibilidade", para: "Comércio, clínica, escola", minimo: 600, maximo: 1500, horas: 12 },
      { id: id(), nome: "Mapa de risco de alagamento", para: "Condomínio, empresa", minimo: 800, maximo: 2500, horas: 18 },
      { id: id(), nome: "Relatório socioambiental do bairro", para: "Construtora, imobiliária", minimo: 2000, maximo: 5000, horas: 40 },
      { id: id(), nome: "Oficina Bueiro Livre", para: "Escola, empresa", minimo: 300, maximo: 800, horas: 7 },
      { id: id(), nome: "Projeto patrocinado", para: "Empresa com programa social", minimo: 2000, maximo: 8000, horas: 50 },
    ],
    projetos: [
      { id: id(), nome: "Maré Cheia", tema: "Alagamentos, calçadas e acessibilidade", etapa: "Campo", resp: "João", inicio: d(1, 9), fim: d(15, 12), horas: 60, estado: "Em andamento" },
      { id: id(), nome: "Sumaúma", tema: "Arborização", etapa: "Pedido", resp: "a definir", inicio: d(1, 2, 2027), fim: d(30, 6, 2027), horas: 40, estado: "Próximo" },
      { id: id(), nome: "Ciclo", tema: "Lixo e reciclagem", etapa: "Pedido", resp: "a definir", inicio: d(1, 4, 2027), fim: d(31, 8, 2027), horas: 30, estado: "Próximo" },
      { id: id(), nome: "Rota", tema: "Transporte", etapa: "Pedido", resp: "a definir", inicio: "", fim: "", horas: 40, estado: "Ideia" },
    ],
    tarefas: [
      { id: id(), titulo: "Fechar relatório do Reduto", projeto: "Maré Cheia", resp: "João", prazo: d(14, 11), status: "Fazendo" },
      { id: id(), titulo: "Visitar 5 pontos no Guamá", projeto: "Maré Cheia", resp: "Elias", prazo: d(7, 11), status: "A fazer" },
      { id: id(), titulo: "Conferir as fotos sem rosto", projeto: "Maré Cheia", resp: "Anaelson", prazo: d(31), status: "A fazer" },
      { id: id(), titulo: "Orçamento do cartório", projeto: "Formalização", resp: "Letícia", prazo: d(30), status: "Fazendo" },
      { id: id(), titulo: "Planejar o processo seletivo", projeto: "Equipe", resp: "Gabrielly", prazo: d(20, 11), status: "A fazer" },
      { id: id(), titulo: "Protocolo na Ouvidoria", projeto: "Maré Cheia", resp: "João", prazo: d(24), status: "Feito" },
      { id: id(), titulo: "Mapa com 21 pontos", projeto: "Maré Cheia", resp: "João", prazo: d(20), status: "Feito" },
    ],
    posts: [
      { id: id(), data: d(28), canal: "Instagram", formato: "Carrossel", tema: "O que é o Maré Cheia", status: "Agendado", alcance: 0, curtidas: 0, comentarios: 0, salvos: 0 },
      { id: id(), data: d(30), canal: "Instagram", formato: "Story", tema: "Bastidores do campo", status: "Produzindo", alcance: 0, curtidas: 0, comentarios: 0, salvos: 0 },
      { id: id(), data: d(3, 11), canal: "Instagram", formato: "Reels", tema: "Como mandar um ponto", status: "Ideia", alcance: 0, curtidas: 0, comentarios: 0, salvos: 0 },
      { id: id(), data: d(6, 11), canal: "WhatsApp", formato: "Texto", tema: "Bairro da semana: Guamá", status: "Ideia", alcance: 0, curtidas: 0, comentarios: 0, salvos: 0 },
      { id: id(), data: d(15), canal: "Instagram", formato: "Carrossel", tema: "Quem somos", status: "Publicado", alcance: 1240, curtidas: 96, comentarios: 14, salvos: 22 },
      { id: id(), data: d(20), canal: "Instagram", formato: "Reels", tema: "Alagamento na Doca", status: "Publicado", alcance: 2310, curtidas: 188, comentarios: 31, salvos: 47 },
      { id: id(), data: d(23), canal: "Instagram", formato: "Story", tema: "Enquete: sua rua alaga?", status: "Publicado", alcance: 640, curtidas: 0, comentarios: 0, salvos: 0 },
    ],
    imprensa: [
      { id: id(), veiculo: "O Liberal", tipo: "Jornal e site", contato: "redação (pelo site)", status: "Não procurado", pauta: "Mapa dos alagamentos" },
      { id: id(), veiculo: "DOL / Diário do Pará", tipo: "Jornal e site", contato: "redação (pelo site)", status: "Não procurado", pauta: "Bairros sem relato" },
      { id: id(), veiculo: "g1 Pará / TV Liberal", tipo: "TV e site", contato: "envio de pauta", status: "Não procurado", pauta: "Estudantes mapeiam alagamentos" },
      { id: id(), veiculo: "RBA TV", tipo: "TV", contato: "envio de pauta", status: "Não procurado", pauta: "" },
      { id: id(), veiculo: "Rádio comunitária do Guamá", tipo: "Rádio", contato: "a procurar", status: "Não procurado", pauta: "Como mandar um ponto" },
    ],
    funil: { visitas: 610, pedidos: 38, clientes: 2 },
    seguidores: [{ id: id(), data: d(1, 9), valor: 120 }, { id: id(), data: d(1), valor: 310 }, { id: id(), data: d(26), valor: 412 }],
    presencas: {},
  });

  let banco;
  try { banco = JSON.parse(localStorage.getItem(CHAVE) || "null") } catch (e) { banco = null }
  if (!banco || banco.versao !== 2) banco = INICIAL();
  const ouvintes = [];
  const salva = () => { try { localStorage.setItem(CHAVE, JSON.stringify(banco)) } catch (e) { } ouvintes.forEach(f => f()) };

  window.LOJA = {
    hoje,
    lista: c => banco[c] || [],
    obj: c => banco[c],
    adiciona(c, item) { item.id = id(); banco[c].push(item); salva(); return item },
    altera(c, i, patch) { const it = banco[c].find(x => x.id === i); if (it) Object.assign(it, patch); salva() },
    apaga(c, i) { banco[c] = banco[c].filter(x => x.id !== i); salva() },
    poe(c, valor) { banco[c] = valor; salva() },
    grava(c, patch) { const o = banco[c] || (banco[c] = {}); Object.assign(o, patch); salva() },
    aoMudar: f => ouvintes.push(f),
    exporta() { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(banco, null, 1)], { type: "application/json" })); a.download = "painel-mare-" + new Date().toISOString().slice(0, 10) + ".json"; a.click() },
    async importa(arquivo) { const j = JSON.parse(await arquivo.text()); if (j.versao !== 2) throw new Error("arquivo de outra versão"); banco = j; salva() },
    zera() { banco = INICIAL(); salva() },
    // os dados guardados antes desta marcação também eram de exemplo
    exemplo: () => banco.exemplo !== false,
    // apaga os números de exemplo e guarda só o que é real: equipe, serviços, lista de imprensa e categorias do orçamento
    comecaReal() {
      const b = INICIAL();
      banco = { versao: 2, exemplo: false, membros: banco.membros || b.membros, servicos: banco.servicos || b.servicos,
        lancamentos: [], orcamento: (banco.orcamento || b.orcamento).map(o => ({ ...o, planejado: 0 })), prospectos: [], projetos: [], tarefas: [], posts: [],
        imprensa: (banco.imprensa || b.imprensa).map(i => ({ ...i, status: "Não procurado" })), funil: { visitas: 0, pedidos: 0, clientes: 0 }, seguidores: [], presencas: {} };
      salva()
    },
  };
})();
