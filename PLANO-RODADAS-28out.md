# Rodadas do painel (28/10/2026)

O João foi trabalhar e pediu: "eu não vou escolher, você que vai. Trabalhe em rodadas de 50 minutos para decidir tudo do painel, como vai ficar e tudo."

Em cada rodada:
1. aplicar;
2. conferir em tela (computador 1366x768 e celular 390x844);
3. publicar (commit e push no `main` do repositório `painel`; ele autorizou publicar ao longo do dia);
4. anotar em `painel/DIARIO-RODADAS-28out.md` o que mudou e por quê.

## Referências escolhidas

As referências estão em `Mare-Belem/referencias-painel/index.html`. Os números são os do quadro.

- **Sem desenho decorativo.** O visual vem de dados, progresso, atalhos e fotos reais. Os desenhos de formas foram rejeitados ("feio demais").
- **Topo de cada área (refs 25 e 1).** Cumprimento com a pessoa ("Bom dia, Letícia" quando o "Quem é você?" está escolhido), uma linha do que a área faz e 2 a 3 atalhos redondos com ícone e rótulo. Sem caixa de ilustração.
- **"Primeiros passos" em toda área (refs 29, 32 e 30).**
  - Barra de % no topo e passos numerados.
  - O passo feito fica riscado e cinza; o próximo passo ganha destaque e botão.
  - Os passos se marcam sozinhos a partir dos dados.
  - Quando tudo estiver feito, o bloco vira uma linha fina "Tudo pronto nesta área".
  - Unificar nesse padrão o "Como vender", a rotina da Gabrielly e o passo a passo da imprensa.
- **Início (ref 1).**
  - Cumprimento por pessoa.
  - "Seus próximos passos": as tarefas da pessoa e o próximo passo da área dela.
  - 4 números com a variação do mês.
  - Agenda dos próximos 14 dias juntando:
    - vencimentos;
    - prazos de editais;
    - posts agendados;
    - conversas individuais;
    - tarefas;
    - retornos de contatos;
    - ausências avisadas.
- **Financeiro (refs 13 e 16).**
  - Ao lado da previsão, a lista "O que a previsão considera": saldo de hoje, itens que se repetem, pendentes, gastos do ano e cenários ligados.
  - Orçamento em barras com %.
- **Comercial (refs 22 e 23).** Quantidade e valor no topo de cada coluna do funil. A meta do mês já existe.
- **Editais, área da Cris (ref 42).**
  - Cada edital é um checklist de etapas: Ler o edital, Justificativa, Proposta, Orçamento, Documentos, Enviar.
  - Cada etapa tem status, e o edital mostra uma barra de % feito.
- **Marketing (ref 34).** Calendário com a coluna "Ideias" à direita (posts em Ideia, sem data ou com data futura).
- **Projetos (refs 38 e 40).** % feito de cada projeto pelas tarefas, com barra na tabela e na linha do tempo.
- **Pessoas (refs 28 e 25).**
  - Presença como mapa de calor: quadradinho verde quando veio, claro quando faltou, amarelo quando avisou.
  - Agenda da equipe com ausências e conversas.
- **Mapa (ref 46).** Painel lateral com os dados do bairro clicado. Só se houver tempo.

## Ordem das rodadas

| Rodada | O que entra |
|---|---|
| R1 | Topo novo das áreas, componente "Primeiros passos" em todas as áreas, Início por pessoa com a agenda de 14 dias |
| R2 | Hipóteses da previsão, orçamento em %, funil com valor por coluna, editais com checklist de etapas |
| R3 | Coluna de ideias no calendário, % por projeto, presença em mapa de calor e agenda da equipe |
| R4 | Revisão geral em tela (computador e celular), ajustes, relatório final para o João |

## Regras do dono que valem aqui

- Painel em tela cheia, profissional mas intuitivo para leigo. Pouco branco, sem "retângulo no meio".
- Nada de visual futurista (DataV e "telão" foram rejeitados).
- O painel não tem dados fictícios: tudo começa vazio e real. Não voltar com exemplos.
- A logo e o ícone do painel não mudam. O João não aparece como chefe.
- A área de cada diretor é vista por todos e editada só pelo dono, via "Quem é você?".
- Economia: agentes só Haiku, e só se realmente precisar.

## Cuidados técnicos (aprendidos hoje)

- **Quebras de linha.**
  - `painel.html` é CRLF. Nos scripts Python: ler com `newline=''`, trocar `\r\n` por `\n`, editar e gravar de volta com `\r\n`.
  - `loja.js` virou LF.
- **Linhas que fecham função.** Várias linhas de render terminam com `}`, fechando a função da página. Exemplos:
  - a linha do `$("cServ")`, a do `$("kImp")` e a do `svg.innerHTML=s;const zera`;
  - hoje, a do `$("cVender")` e a do `$("kPauta")`.

  Ao substituir uma linha inteira, conferir se ela fechava a função. Depois de editar, sempre rodar:
  `node -e "const t=require('fs').readFileSync('painel.html','utf8');[...t.matchAll(/<script>([\s\S]*?)<\/script>/g)].forEach((m,i)=>{try{new Function(m[1]);console.log('ok',i)}catch(e){console.log('erro',i,e.message)}})"`
- **Servidor local.** "mare-raiz" (porta 8767) cai às vezes; religar com `preview_start {name:"mare-raiz"}`. As URLs são `http://127.0.0.1:8767/painel/painel.html#area`.
- **Prints.** Rodar `node <scratchpad>/shot62.mjs <prefixo> "<url#area>" <alvos> <tamanhos>`, de dentro de `Mare-Belem/arena-noite/prints-depois`. Alvos: `topo`, `sel-#id`, número de pixels. A variável `ESPERA=ms` dá mais tempo de carga. Apagar a pasta `chr61` depois.
- **Teste no navegador.**
  - `localStorage` `mare_painel_v2` guarda os dados e `mare_quem` guarda a pessoa.
  - Limpar os dois depois do teste.
  - `window.LOJA` dá acesso à API: `lista`, `obj`, `adiciona`, `altera`, `grava`, `apaga` e `exemplo`.
- **Peças prontas no painel.**
  - `kpis(cont,[[icone,valor,rotulo,tag,mal]])` e `barrasH`.
  - `etqStatus`, `editar(col,cont)` e `abre(col)`. Para pré-preencher, definir `window.__pre={...}` antes do `abre`.
  - `CAMPOS`, `NOMES` e `PADRAO`. O formulário de objetos (caixa, planejar, metas) grava com `L.grava`.
  - `dono(id)` controla a área: classe `.bloq` e `.so-dono`.
  - `copia(texto,botao)`, `diasAte`, `dt`, `dObj`, `hojeISO`, `MES`, `brl`, `esc` e `quemSou()`.
  - `PAGS` mapeia página para render: `financeiro: ()=>{financeiro();areaLeticia()}` etc.
- **Publicar.** No repositório `painel`: `git add` dos arquivos, `git commit` com "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>" e `git push -q origin main`. O GitHub Pages leva cerca de 1 minuto: conferir com `curl https://jvcarvalho07.github.io/mare-painel/painel.html?x=N`.
