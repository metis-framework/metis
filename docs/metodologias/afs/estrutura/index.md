# Estrutura do AFS

A estrutura do **Adaptive Flow System (AFS)** é baseada na organização do trabalho por contexto e na gestão de fluxo contínuo, permitindo que equipes pequenas operem com múltiplos tipos de demanda de forma eficiente e previsível.

Diferente de abordagens lineares, o AFS segmenta o trabalho em trilhas (`tracks`), garantindo melhor priorização, visibilidade e distribuição das tarefas.

---

## Organização por tracks

O AFS divide o trabalho em quatro principais tipos de demanda.

### Operações

Demandas reativas e urgentes.

Exemplos:

- correção de bugs críticos
- incidentes em produção
- ajustes emergenciais

Características:

- alta prioridade
- resposta rápida
- pode interromper outras demandas

---

### Projetos

Demandas estruturadas e planejadas.

Exemplos:

- novas funcionalidades
- evolução de produto
- melhorias estruturais

Características:

- maior previsibilidade
- planejamento mais claro
- menor urgência imediata

---

### Débito Técnico

Melhorias internas no sistema.

Exemplos:

- refatorações
- otimizações
- ajustes de arquitetura

Características:

- não gera valor direto imediato
- essencial para sustentabilidade do sistema
- frequentemente negligenciado sem estrutura adequada

---

### Comercial

Demandas externas ligadas a negócio.

Exemplos:

- ajustes solicitados por clientes
- customizações
- entregas específicas

Características:

- impacto direto no negócio
- necessidade de validação externa
- pode exigir `Stakeholder Review`

---

## Priorização entre tracks

Nem todas as demandas possuem o mesmo peso dentro do fluxo.

O AFS define uma lógica de priorização baseada em contexto:

1. Operações
2. Comercial
3. Projetos
4. Débito Técnico

Essa ordem pode ser adaptada conforme o contexto da equipe, mas deve sempre ser explícita e visível para todos.

---

## Work In Progress (WIP)

Para evitar sobrecarga e gargalos, o AFS utiliza limites de trabalho em progresso.

Cada etapa do fluxo deve ter um limite máximo de tarefas simultâneas.

Exemplo:

- `In Progress` -> até 3 tasks por dev
- `Code Review` -> até 2 tasks por revisor
- `QA` -> limite baseado na capacidade do QA

Benefícios:

- reduz multitarefa excessiva
- melhora foco
- evita acúmulo em etapas críticas

---

## Balanceamento de Fluxo

O AFS não busca apenas movimentar tarefas, mas equilibrar o fluxo como um todo.

Isso significa:

- evitar acúmulo em etapas intermediárias
- redistribuir esforço quando necessário
- priorizar desbloqueio de tarefas antes de iniciar novas

> Começar novas tarefas é menos importante do que finalizar tarefas em andamento.

---

## Gestão de Gargalos

Gargalos são tratados como prioridade dentro do sistema.

Quando uma etapa do fluxo começa a acumular tarefas:

- o time deve redirecionar esforço para aquela etapa
- novas tasks devem ser evitadas temporariamente
- o Flow Manager deve atuar diretamente na resolução

---

## Visibilidade do Trabalho

Toda a estrutura do AFS depende de transparência total do fluxo.

Isso inclui:

- todas as tasks visíveis no board
- classificação por track
- status atualizado em tempo real
- bloqueios claramente identificados

> Se não está visível no board, não está sendo gerenciado.

---

## Papel do Flow Manager na Estrutura

O Flow Manager é responsável por garantir que a estrutura funcione corretamente.

Atua em:

- organização do board
- controle de WIP
- priorização junto ao gestor
- identificação de gargalos
- manutenção do fluxo saudável

O Flow Manager não gerencia pessoas, ele gerencia o fluxo.
