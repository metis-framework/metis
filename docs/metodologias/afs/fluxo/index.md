# Fluxo do AFS

O fluxo do **Adaptive Flow System (AFS)** é baseado em uma progressão contínua de estados, onde cada tarefa percorre etapas bem definidas até sua conclusão.

Esse fluxo tem como objetivo garantir:

- clareza no andamento das tarefas
- redução de gargalos
- previsibilidade de entrega
- separação entre execução técnica e validação de negócio

---

## Estrutura do fluxo

O AFS organiza o trabalho nas seguintes etapas:

`Backlog -> To Do -> In Progress -> Code Review -> QA -> Done -> Stakeholder Review -> Closed`

Cada etapa possui um papel específico dentro do sistema e regras claras de transição.

---

## Backlog

### Descrição

O `Backlog` é o ponto de entrada de todas as demandas.

### Objetivo

Centralizar e registrar todas as tarefas antes de entrarem no fluxo ativo.

### Boas práticas

- todas as demandas devem ser registradas aqui
- tasks devem conter descrição mínima clara
- sempre que possível, já classificar por track

---

## To Do

### Descrição

A etapa `To Do` representa tarefas prontas para serem iniciadas.

### Objetivo

Organizar e priorizar o que será executado a seguir.

### Regras

- apenas tarefas priorizadas devem estar aqui
- deve respeitar limites de WIP
- tasks devem estar claras e prontas para execução

---

## In Progress

### Descrição

Etapa onde a tarefa está em desenvolvimento ativo.

### Objetivo

Executar a implementação da tarefa.

### Regras

- cada tarefa deve ter um responsável definido
- evitar multitarefa excessiva
- respeitar limite de WIP

### Atenção

> Iniciar novas tarefas é menos importante do que finalizar tarefas já iniciadas.

---

## Code Review

### Descrição

Etapa de revisão técnica do código desenvolvido.

### Objetivo

Garantir qualidade, padronização e consistência técnica.

### Regras

- não depender exclusivamente de Tech Leads
- revisões devem ser rápidas e objetivas
- evitar acúmulo de tarefas nessa etapa

### Possíveis retornos

- `To Do` para ajustes necessários

Quando isso acontecer, deve haver um realinhamento de prioridade com o que já está em andamento para não ultrapassar o limite estipulado de WIP.

---

## QA

### Descrição

Etapa de validação funcional da tarefa.

### Objetivo

Garantir que a entrega atende aos requisitos definidos.

### Regras

- validar cenários principais
- identificar bugs ou inconsistências
- registrar feedback claro

### Possíveis retornos

- `To Do`, seguindo a mesma regra da etapa de `Code Review`

---

## Done

### Descrição

A tarefa foi tecnicamente concluída e validada internamente.

### Objetivo

Indicar que o desenvolvimento e a validação técnica foram finalizados.

### Importante

- nem toda tarefa precisa seguir para validação externa
- essa etapa representa o fim do ciclo técnico

---

## Stakeholder Review

### Descrição

Etapa opcional de validação por parte do solicitante ou de uma área externa.

### Quando utilizar

- demandas comerciais
- solicitações de outras equipes
- entregas que precisam de validação de negócio

### Objetivo

Garantir alinhamento entre entrega técnica e expectativa do solicitante.

### Regras

- deve ser rápida e objetiva
- feedback deve ser claro

### Possíveis retornos

- `To Do`, seguindo as mesmas regras das etapas anteriores

---

## Closed

### Descrição

A tarefa foi finalizada e não requer mais ações.

### Objetivo

Encerrar definitivamente o ciclo da tarefa.

### Regras

- só tarefas validadas devem chegar aqui
- não deve haver retrabalho após essa etapa
