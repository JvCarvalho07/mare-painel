# Painel MARÉ: estrutura e simulações

Rascunho de 26/10/2026. Define o que o painel terá e como cada simulação calcula. O visual vem depois, a partir das referências que você vai mandar.

Todo número abaixo vem com a fonte ou com a marca **estimativa**. Antes de gastar, a equipe confirma com três orçamentos.

---

## 0. Decisões antes de construir

1. **Onde o painel fica (decidido em 26/10).** No GitHub do diretor geral, em repositório próprio (separado do site), para apresentar à equipe em até 2 semanas. Enquanto for apresentação, todos os dados são **fictícios e marcados como exemplo**. Quando a MARÉ virar realidade, a ideia é trocar o site por um **sistema** (aplicação com servidor e banco de dados) que recebe os dados do site por uma API; aí os dados reais saem do GitHub público.
2. **Quem edita o quê.** Cada diretoria atualiza a própria área; a visão geral só lê.
3. **Nome.** Sugestão: "Leme" (quem conduz o barco na maré) ou "Painel MARÉ".

## 1. Princípios

- O painel é interno. Nada de nomes de moradores, telefones ou fotos com rosto (LGPD).
- Linguagem neutra sobre o poder público. O painel pode ser mostrado a parceiros, então registra **fatos** (protocolo enviado, prazo, resposta) e não opiniões sobre o prefeito.
- Dado de exemplo aparece marcado como exemplo até a equipe trocar pelo real.
- Empresa júnior é **associação sem fins lucrativos** (Lei 13.267/2016). Não existe "lucro" distribuído: o que sobra é **superávit**, reinvestido na própria MARÉ. Membros não recebem salário. O painel usa "superávit" e "retorno do investimento".

---

## 2. Mapa do painel

| Área | Para quem | Pergunta que responde |
|---|---|---|
| **Visão geral** | Diretor geral (você) | A MARÉ está no rumo? O que trava esta semana? |
| **Projetos** | Diretor de Projetos (você) | O que estamos entregando, com quem e até quando? |
| **Comercial** | Diretor Comercial | Quem vamos procurar, o que oferecer, quanto entra? |
| **Financeiro** | Diretora Financeira | Quanto temos, quanto gastamos, quando o investimento se paga? |
| **Marketing** | Diretor de Marketing | O que publicar, para quem, e se está funcionando? |
| **Pessoas e Cultura** | Diretor de Pessoas e Cultura | Quem está na equipe, quem precisa de ajuda, quem vai sair? |
| **Parceiros** | Comercial + Projetos | Quem pode ajudar, o que pedir, em que pé está o contato? |
| **Plano sem prefeitura** | Todos (e a diretora financeira) | Se a prefeitura não fizer nada, o que a MARÉ ainda entrega? |
| **Simulações** | Todos | E se mudarmos preço, equipe, cenário? |
| **Documentos** | Todos | Estatuto, atas, modelos de proposta e relatório |

### 2.1 Visão geral (diretor geral)

- **Faixa de saúde**, com 4 sinais (verde/amarelo/vermelho):
  - caixa em meses;
  - propostas abertas;
  - projetos atrasados;
  - membros ativos.
- **Esta semana:** 3 prioridades de cada diretoria e o que está travado, com o responsável.
- **Metas do semestre** com barra de progresso:
  - pontos mapeados;
  - escolas atendidas;
  - projetos pagos;
  - superávit.
- **Linha do tempo** com os pontos de decisão (mês 6: prefeitura respondeu?; mês 9: formalizar?).
- **Atalhos** para cada diretoria.

### 2.2 Projetos

- **Portfólio:**
  - **Maré Cheia** (alagamentos, calçadas, acessibilidade): em andamento.
  - **Sumaúma** (arborização), **Ciclo** (lixo e reciclagem) e **Rota** (transporte): próximos.
- **Quadro de cada projeto:** etapa (Pedido, Triagem, Campo, Relatório, Ação), responsável, prazo, cliente ou parceiro, horas gastas e horas previstas.
- **Capacidade:** horas disponíveis da equipe × horas pedidas pelos projetos. Avisa quando falta gente antes de aceitar projeto novo.
- **Mapa:** o Mapa MARÉ embutido, com os pontos do projeto.
- **Qualidade:** checklist de entrega (fotos sem rosto, fontes citadas, revisão de outra pessoa, aprovação do orientador quando for técnico).

### 2.3 Comercial

- **Funil:** Contato → Reunião → Proposta → Fechado / Perdido, com valor e chance.
- **Catálogo de serviços** com preço sugerido e horas (seção 4).
- **Lista de alvos** por segmento (seção 5), com prioridade e próximo passo.
- **Receita prevista:** propostas × chance × valor, mês a mês.
- **Modelo de proposta** pronto para preencher.

### 2.4 Financeiro

- **Caixa hoje** e **meses de fôlego** (caixa ÷ gasto mensal).
- **Entradas e saídas** do mês, por categoria.
- **Formalização:** checklist com custo de cada passo (seção 3.1).
- **Fluxo de caixa de 24 meses** nos três cenários (seção 3.4).
- **Ponto de equilíbrio e retorno do investimento** (seção 3.5).
- **Impostos e taxas:** o que vai para a prefeitura, o estado e a União (seção 3.2).
- **Prestação de contas:** relatório mensal pronto para mostrar à universidade e aos parceiros.

### 2.5 Marketing

- **Calendário de conteúdo:** Instagram e site, com o tema de cada semana.
- **Funil do público:** alcance → visitas ao site → pedidos pelo formulário → clientes.
- **Campanhas:** Bueiro Livre, divulgação do Maré Cheia, captação de membros.
- **Identidade:** logos, cores, fontes, modelos de post.
- **Imprensa:** lista de veículos (O Liberal, DOL, Diário do Pará, TV Liberal, rádios) e o que já saiu.

### 2.6 Pessoas e Cultura

- **Organograma** com as 5 diretorias e a direção geral.
- **Membros:** área, horas por semana, habilidades, data de entrada.
- **Entrada de novos membros:** processo seletivo, integração e primeiro mês acompanhado.
- **Capacitações:** trilha por diretoria (Sebrae, cursos gratuitos, orientador).
- **Clima:** pesquisa curta mensal (de 1 a 5) e alerta de quem pode sair.
- **Saídas:** taxa mensal, que entra na simulação de capacidade.

### 2.7 Parceiros

- **Cartão por parceiro:** o que pedir, quem é o contato, situação (não contatado, enviado, conversando, apoiando), próxima ação e data.
- **Agrupados:**
  - poder público (municipal, estadual, federal, Judiciário/MP);
  - ensino;
  - empresas;
  - sociedade civil.

### 2.8 Plano sem prefeitura

Resposta à dúvida da diretora financeira na seção 6.

- **Chave de cenário:** "prefeitura apoia / lenta / não responde". O painel mostra o que continua possível em cada um.
- **Rotas alternativas** com situação de cada uma: estado, MP-PA, Defensoria, Câmara, imprensa, Lei de Acesso à Informação.
- **Registro de protocolos:** o que foi enviado, número, data, prazo legal e resposta.

### 2.9 Simulações

Uma tela com todos os controles (seção 3) e os resultados lado a lado nos três cenários.

### 2.10 Documentos

Estatuto, atas, regimento, modelo de proposta, modelo de relatório, termo de voluntariado e termo de uso de imagem.

---

## 3. Simulações

### 3.1 Formalização (custo único)

Empresa júnior = associação civil. O caminho:

1. Assembleia de fundação.
2. Estatuto e ata com visto de advogado.
3. Registro no Cartório de Registro Civil de Pessoas Jurídicas.
4. CNPJ na Receita.
5. Inscrição municipal.
6. Conta bancária.

| Item | Mínimo (R$) | Máximo (R$) | Fonte |
|---|---|---|---|
| Registro do estatuto e da ata no cartório de pessoas jurídicas (Belém) | 300 | 700 | **estimativa**; confirmar a tabela de emolumentos do TJPA |
| Visto de advogado no estatuto | 0 | 500 | **estimativa**; o núcleo de prática jurídica da faculdade costuma fazer sem custo |
| CNPJ na Receita Federal | 0 | 0 | gratuito |
| Certificado digital e-CNPJ A1 (1 ano) | 160 | 280 | cotações de 2026: [Omie](https://www.omie.com.br/blog/qual-e-o-valor-do-certificado-digital-a1-e-a3-em-2026/), [Rolmy Jun](https://rolmyjuncontabilidade.com.br/?p=8178) |
| Inscrição municipal em Belém (Cadastro Mobiliário, ficha FICAM) e licença (TLPL) | 0 | 300 | **estimativa**; confirmar na SEFIN se associação sem sede própria paga a TLPL |
| Abertura com contador | 0 | 800 | contabilidades online abrem sem custo; escritórios cobram mais ([Contabilizei](https://www.contabilizei.com.br/contabilizei-responde/quanto-custa-abrir-CNPJ-com-contador-online/), [Meu Contador Online](https://www.meucontadoronline.com.br/blog/quanto-custa-abrir-uma-empresa-em-2026/)) |
| Domínio .com.br | 40 | 40 | Registro.br |
| **Total** | **500** | **2.620** | |

No simulador, cada linha é uma caixa com mínimo, máximo e "valor confirmado".

### 3.2 O que vai para a prefeitura (e outros impostos)

| O quê | Quando | Valor | Fonte |
|---|---|---|---|
| Inscrição no Cadastro Mobiliário | Uma vez | ver 3.1 | SEFIN Belém |
| TLPL (licença de localização e funcionamento) | Por ano, se for cobrada | **estimativa** de R$ 0 a 300 | confirmar na SEFIN ([O Liberal](https://www.oliberal.com/economia/sefin-alerta-meis-sobre-cobrancas-falsas-em-belem-1.1148527)) |
| ISS sobre serviços prestados | A cada nota fiscal | **estimativa** de 2% a 5% do valor | confirmar a alíquota do serviço e se há isenção para associação |
| Obra em calçada ou praça | Por obra | depende do projeto | SEURB; a calçada é responsabilidade do dono do imóvel ([Diário do Pará](https://diariodopara.com.br/belem/calcadas-sao-responsabilidade-do-proprietario-e-direito-de-todos-os-cidadaos/)) |

O simulador desconta o ISS da receita (controle de 0% a 5%).

### 3.3 Custos mensais

| Item | Enxuto | Provável | Folgado | Observação |
|---|---|---|---|---|
| Contador | 0 | 150 | 400 | 0 com parceria (escritório-modelo, EJ de Ciências Contábeis) |
| Banco digital PJ | 0 | 0 | 30 | |
| Transporte para campo | 80 | 120 | 200 | |
| Material e impressão | 20 | 30 | 70 | |
| Federação (Pará Júnior / Brasil Júnior) | 0 | 0 | 0 | **a confirmar**: a federação do Pará chama-se Pará Júnior ([O Liberal](https://www.oliberal.com/conexaomineral/reportagem/renovac-o-no-mercado-aprendizado-ganha-forca-na-formac-o-de-novos-profissionais-1.337770)) |
| **Total por mês** | **100** | **300** | **700** | |

### 3.4 Receita e fluxo de caixa (24 meses)

**Fórmula:** receita do mês = propostas enviadas × taxa de fechamento × valor médio + patrocínios + editais − ISS.

**Regras do modelo:**
- Sem CNPJ não há nota fiscal: a receita de serviços só começa no mês em que a formalização termina (controle, padrão mês 3).
- As propostas crescem aos poucos (o Comercial ainda está começando).
- O caixa começa negativo pelo custo da formalização.

**Referência de preço:**
- Pelos números agregados da Brasil Júnior, o valor médio por projeto fica entre R$ 1.400 e R$ 3.600: 2021, mais de R$ 49 milhões em 34 mil projetos; 2022, mais de R$ 87 milhões em 24 mil ([SBC](https://sol.sbc.org.br/index.php/wsis/article/download/33679/33471), [TCC PUC-SP](https://repositorio.pucsp.br/jspui/bitstream/handle/40240/1/JADEN%20CHRISTOPHER%20REI%20GRAY%20%20-%20TCC.pdf)). A divisão é uma conta nossa.
- Uma EJ grande (FEA Júnior USP) cobra cerca de R$ 5.000 por projeto de um mês ([FGV](https://gvpesquisa.fgv.br/sites/gvpesquisa.fgv.br/files/arquivos/picchiai_-_empresa_junior.pdf)).

**Cenários de partida** (os controles mudam tudo):

| | Pessimista | Provável | Otimista |
|---|---|---|---|
| Custo da formalização | 1.700 | 1.100 | 600 |
| Gasto fixo por mês | 600 | 300 | 200 |
| Propostas por mês no 12º mês | 3 | 3 | 6 |
| Taxa de fechamento | 20% | 30% | 40% |
| Valor médio por projeto | 900 | 1.200 | 2.400 |
| Patrocínio de obra piloto (mês 8) | 0 | 3.000 | 8.000 |
| **Resultados** | | | |
| Projetos pagos em 24 meses | ~11 | ~17 | ~47 |
| Receita em 24 meses | R$ 10 mil | R$ 23 mil | R$ 120 mil |
| Caixa no 12º mês | −R$ 5.300 | +R$ 5.500 | +R$ 48.200 |
| Caixa no 24º mês | −R$ 6.000 | +R$ 14.900 | +R$ 114.900 |
| O investimento se paga em | não se paga | 8º mês | 4º mês |

Contas sem ISS (feitas em 26/10; o painel refaz ao vivo).

**Leitura:** no pessimista, o gasto fixo (R$ 600) é maior que a receita (3 propostas × 20% × R$ 900 = R$ 540). Ou o gasto cai para perto de zero (contador por parceria), ou o preço sobe. O painel mostra esse alerta automaticamente.

### 3.5 Ponto de equilíbrio e retorno do investimento

- **Ponto de equilíbrio (por mês):** projetos por mês = gasto fixo ÷ (valor médio × (1 − ISS)). No provável: 300 ÷ 1.200 = **0,25 projeto por mês** (um projeto a cada 4 meses cobre o fixo).
- **Retorno do investimento:** o primeiro mês em que o caixa acumulado fica ≥ 0. No provável, **mês 8**.
- **Superávit do ano:** o que sobra no 12º mês, reinvestido em kit de campo, obra piloto ou capacitação.

### 3.6 Capacidade da equipe

Base do painel de 2027 já feito:
- 1/3 das horas vira trabalho de campo;
- 1 ponto mapeado = 2,5 h;
- campanha em escola = 25 h;
- relatório = 30 h;
- obra piloto = 40 h e R$ 1.800.

**Novo:** cada serviço pago tem horas (seção 4). O simulador avisa quando as horas pedidas passam das disponíveis, considerando a saída de membros por mês.

### 3.7 Cenário da prefeitura

Controle "apoia / lenta / não responde". Ele afeta só o que depende de obra em espaço público (rampas na rua, jardim em praça, limpeza de canal). Serviços para clientes privados, relatórios e campanhas em escolas seguem iguais (seção 6).

---

### 3.8 Testes de tempestade (piores situações)

A equipe vai ser testada com cenários hipotéticos ruins. Cada um é uma chave que se liga sozinha ou junto com outras, em cima de qualquer cenário (pessimista, provável, otimista). O painel responde sempre as mesmas 4 perguntas: **quantos meses a MARÉ aguenta**, **em que mês o caixa zera**, **o que entregamos mesmo assim** e **o que cortar primeiro**.

| # | Tempestade | O que muda no modelo |
|---|---|---|
| 1 | Metade da equipe sai | horas disponíveis ÷ 2 a partir do mês escolhido; projetos acima da capacidade atrasam |
| 2 | Ninguém compra por 6 meses | taxa de fechamento = 0 nos meses 1 a 6 |
| 3 | Prefeitura não responde | obras em espaço público = 0 (ver 3.7) |
| 4 | Prefeitura barra e notifica | idem 3, mais custo de adequação (controle) e 1 mês parado para responder |
| 5 | Patrocinador desiste | patrocínio = 0; obra piloto adiada |
| 6 | Formalização atrasa 6 meses | sem nota fiscal até o mês 9; receita de serviços só depois |
| 7 | Cartório e taxas 2× mais caros | custo único × 2 |
| 8 | Contador cobra cheio | gasto fixo + R$ 400 por mês |
| 9 | Universidade não aceita o vínculo | não vira empresa júnior: segue como coletivo/projeto, sem CNPJ próprio (receita só por parceiro com CNPJ ou edital) |
| 10 | Cliente não paga (inadimplência) | 20% a 50% da receita não entra (controle) |
| 11 | Chuva extrema / enchente grande | demanda por mapeamento sobe (+propostas), mas campo fica parado 2 semanas |
| 12 | Crise de imagem (post ou dado errado) | propostas −50% por 3 meses; marketing redireciona horas |
| 13 | Orientador sai | serviços técnicos suspensos até novo orientador |
| 14 | Membro-chave sai (diretor) | área sem dono por 1 mês; horas −15% |
| 15 | Inflação dos custos | gasto fixo +10% ao ano |

**Tempestade perfeita:** botão que liga 1, 2, 3, 5 e 6 juntos. Mostra o resultado e um **plano de corte** em ordem (contador por parceria → transporte só em dupla → adiar obra piloto → focar em serviços sem campo, como oficinas e relatórios a partir de dados públicos).

## 4. Catálogo de serviços pagos (sugestão para o Comercial)

| Serviço | Para quem | Entrega | Preço sugerido (R$) | Horas da equipe |
|---|---|---|---|---|
| Diagnóstico de acessibilidade | Comércio, clínica, escola particular, igreja | Visita, checklist baseado na NBR 9050, fotos e lista de prioridades com custo estimado | 600 a 1.500 | 10 a 16 |
| Mapa de risco de alagamento do entorno | Condomínio, empresa, escola | Histórico de alagamento das ruas próximas, rotas seguras e plano para dias de chuva forte | 800 a 2.500 | 12 a 24 |
| Relatório socioambiental do bairro | Construtora, imobiliária, empresa com meta de ESG | Dados de alagamento, calçadas e arborização de um bairro, com mapa | 2.000 a 5.000 | 30 a 50 |
| Oficina "Bueiro Livre" | Escola particular, empresa (SIPAT, semana do meio ambiente) | Oficina de 2 h com material | 300 a 800 | 6 a 8 |
| Projeto patrocinado | Empresa patrocinadora | Obra piloto (jardim de chuva, rampa em escola) com a marca do patrocinador e relatório de impacto | 2.000 a 8.000 | 40 a 60 |

**Atenção:** laudo técnico com ART (responsabilidade técnica) só pode ser assinado por profissional registrado (engenheiro ou arquiteto, como o professor orientador). A MARÉ vende **diagnóstico e relatório**, não laudo, até ter esse apoio formal.

---

## 5. Quem procurar para começar a faturar

Ordem sugerida: primeiro quem paga pouco e decide rápido, depois quem paga mais e demora.

| Prioridade | Segmento | Exemplos em Belém e Ananindeua | O que oferecer |
|---|---|---|---|
| 1 | Comércio de rua e clínicas | Lojas, farmácias, clínicas e consultórios em Nazaré, Umarizal, Batista Campos, Cidade Nova | Diagnóstico de acessibilidade |
| 1 | Escolas particulares | Colégios dos bairros onde a MARÉ já mapeou | Oficina Bueiro Livre e diagnóstico |
| 2 | Condomínios e administradoras | Prédios em ruas que alagam (Doca, Pedreira, Reduto) | Mapa de risco de alagamento |
| 2 | Shoppings e grandes lojas | Boulevard Shopping, Shopping Pátio Belém, Parque Shopping Belém, Castanheira Shopping | Diagnóstico de acessibilidade e campanha conjunta |
| 3 | Construtoras e imobiliárias | Incorporadoras com obras em Belém | Relatório socioambiental do bairro |
| 3 | Empresas com programas sociais e ESG | Equatorial Pará, Hydro, Vale, Banco da Amazônia, Sicredi, Unimed | Projeto patrocinado |
| Apoio | Sebrae Pará, Sesc, Senac | | Capacitação e espaço para eventos |
| Edital | FAPESPA (Centelha 3 Pará: até R$ 80 mil por projeto mais bolsas, contrapartida de 5%) | | Conferir se estudante pode concorrer e o cronograma ([edital](https://www.fapespa.pa.gov.br/wp-content/uploads/2026/07/1.-Edital-versao-atualizada-com-2a-alteracao-do-cronograma.pdf), [resumo UEPA](https://propesp.uepa.br/wp-content/uploads/2026/08/Portfolio-de-Oportunidades-DDP-Agosto-2026.pdf)) |

Nenhum deles foi contatado. Os nomes são exemplos de segmento; o Comercial confirma cada um antes de entrar no funil.

---

## 6. "E se a prefeitura não fizer nada?"

A dúvida da diretora financeira é justa: o problema é público e a obra é da prefeitura. O painel responde em três partes.

**1. A maior parte da MARÉ não depende da prefeitura.**
- Mapear, pesquisar, fazer relatórios e campanhas é livre.
- A calçada em Belém é responsabilidade do dono do imóvel. Então comércio, escolas, condomínios e empresas **são clientes diretos**: eles mesmos podem consertar e adaptar o que é deles.
- É daí que vem a receita (seção 4), não da prefeitura.

**2. Existem outros caminhos públicos além da prefeitura.**
- **Governo do Estado:** obras de macrodrenagem e canais em Belém também são feitas pelo estado (as obras de canais para a COP30, por exemplo). Os relatórios podem ir para as secretarias estaduais e para deputados estaduais.
- **Ministério Público do Pará e Defensoria Pública:** recebem relatórios com fotos e dados e podem cobrar o poder público.
- **Câmara Municipal:** vereadores levam pedidos e podem propor emendas.
- **Lei de Acesso à Informação:** pedidos formais com prazo legal de resposta (20 dias, prorrogáveis por mais 10).
- **Imprensa:** dados organizados viram pauta, e pauta gera pressão.

**3. O que a MARÉ mede é o próprio trabalho, não a obra da prefeitura.**
- Indicadores do painel: pontos mapeados, relatórios entregues, clientes atendidos, adaptações feitas por clientes privados, protocolos com resposta.
- "A prefeitura consertou" é um indicador **externo**: aparece, mas não define o sucesso da MARÉ.

No simulador, o cenário "não responde" zera só as obras em espaço público. O restante do plano continua.

---

## 7. O que falta da equipe para o painel ter dados reais

- [ ] Lista de membros, área e horas por semana de cada um.
- [ ] Universidade e professor orientador (necessário para virar empresa júnior e para os serviços técnicos).
- [ ] Caixa atual e quem guarda o dinheiro.
- [ ] Contatos que alguém já tem (escolas, comércio, empresas).
- [ ] Preços que a equipe topa cobrar (a seção 4 é sugestão).
- [ ] Confirmar com a SEFIN e o cartório os valores marcados como estimativa.
- [ ] Referências visuais para o design do painel.

## 8. Próximos passos

1. Você escolhe onde o painel fica (seção 0) e manda as referências.
2. Eu faço o design a partir delas e monto as áreas nesta ordem:
   - Visão geral;
   - Simulações;
   - Financeiro;
   - Comercial;
   - Parceiros;
   - Plano sem prefeitura;
   - Projetos;
   - Marketing;
   - Pessoas e Cultura;
   - Documentos.
3. Cada diretoria revisa a sua área e troca os exemplos por dados reais.
