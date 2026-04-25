# Bloqueios

No PRP, bloqueios representam qualquer fator que impede o avanço de uma demanda dentro do fluxo.

Essa camada existe para tornar visíveis as interrupções reais do trabalho, evitando que tarefas fiquem paradas sem clareza ou acompanhamento.

---

## Princípio

Bloqueios devem ser tratados como parte do sistema, não como exceção.

- toda tarefa bloqueada deve ser identificada
- o motivo do bloqueio precisa ser claro
- bloqueios não podem ser ignorados ou ocultados

Sem visibilidade, o problema deixa de ser técnico e passa a ser operacional.

---

## Tipos

Bloqueios podem ocorrer por diferentes motivos:

- falta de informação
- ausência de validação
- dependência externa
- problema técnico
- mudança de prioridade

Identificar corretamente o tipo de bloqueio facilita sua resolução.

---

## Informação

Ocorre quando a demanda não possui contexto suficiente.

- descrição incompleta
- falta de detalhes
- ausência de requisitos claros

Nesses casos, a tarefa deve retornar para validação.

---

## Validação

Ocorre quando é necessário um retorno de quem solicitou.

- aprovação de layout
- confirmação de conteúdo
- definição de direcionamento

Enquanto não houver resposta, a tarefa não deve avançar.

---

## Dependência

Ocorre quando a execução depende de terceiros.

- outras equipes
- fornecedores
- sistemas externos

Esse tipo de bloqueio exige acompanhamento ativo.

---

## Técnico

Ocorre quando há impedimentos na execução.

- bugs inesperados
- limitações de sistema
- falhas em integrações

Nesses casos, pode ser necessário reavaliar a abordagem.

---

## Prioridade

Ocorre quando a demanda perde espaço no fluxo.

- entrada de demandas mais críticas
- mudança de contexto do negócio

A tarefa pode ser pausada e reavaliada.

---

## Regra

Existe uma regra central no tratamento de bloqueios:

> tarefa bloqueada não deve permanecer em execução.

Para garantir isso:

- tarefas bloqueadas devem sair do fluxo ativo
- o motivo deve ser registrado
- o acompanhamento deve ser visível

Essa regra evita falsa percepção de progresso.

---

## Visibilidade

Bloqueios devem ser explícitos no fluxo.

- identificação clara no board
- descrição do motivo
- atualização de status

Essa visibilidade permite que o time e a gestão entendam onde estão os gargalos.

---

## Ação

Cada bloqueio deve gerar uma ação clara.

- retornar para validação
- solicitar informação
- acompanhar dependência
- replanejar execução

Bloqueios não devem ser passivos.

---

## Papel

Dentro do PRP, os bloqueios são responsáveis por:

- expor gargalos reais da operação
- evitar tarefas paradas sem controle
- melhorar comunicação entre áreas
- apoiar decisões de priorização

Sem essa camada, o fluxo perde transparência.

---

## Objetivo

O tratamento de bloqueios busca garantir que:

- o time tenha clareza sobre o que impede o avanço
- tarefas não fiquem paradas sem acompanhamento
- problemas sejam resolvidos com mais rapidez
- o fluxo se mantenha saudável e previsível

Aplicar corretamente essa etapa é o que transforma interrupções em informação útil para evolução do sistema.
