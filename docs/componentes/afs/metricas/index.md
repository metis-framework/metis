# Métricas do AFS

O **Adaptive Flow System** utiliza métricas como base para análise, melhoria contínua e tomada de decisão.

O objetivo não é apenas medir produtividade, mas compreender o comportamento do fluxo, identificar gargalos e aumentar a previsibilidade das entregas.

As métricas no AFS devem ser simples, visíveis e utilizadas de forma contínua pelo time.

---

## Princípios de medição

A utilização de métricas no AFS segue alguns princípios fundamentais:

- foco no fluxo, não em performance individual
- transparência dos dados para todo o time
- simplicidade na coleta e interpretação
- uso contínuo para melhoria, não para controle punitivo

> Métricas devem orientar decisões e melhorias, não criar pressão ou competição interna.

---

## Lead Time

### Descrição

O `Lead Time` representa o tempo total que uma tarefa leva desde sua entrada no fluxo até sua conclusão.

### Objetivo

Medir a eficiência geral do fluxo.

### Como calcular

Tempo entre a entrada da tarefa em `To Do` até `Closed`.

### Interpretação

- `Lead Time` alto pode indicar gargalos
- `Lead Time` inconsistente pode indicar falta de previsibilidade

---

## Cycle Time

### Descrição

O `Cycle Time` representa o tempo que a tarefa leva desde o início do desenvolvimento até sua conclusão técnica.

### Objetivo

Medir a eficiência da execução.

### Como calcular

Tempo entre `In Progress` e `Done`.

### Interpretação

- tempos elevados indicam problemas na execução
- variações grandes indicam inconsistência no fluxo

---

## Throughput

### Descrição

O `Throughput` representa a quantidade de tarefas concluídas em um determinado período.

### Objetivo

Medir a capacidade de entrega do time.

### Como calcular

Número de tarefas em `Closed` por semana ou por período definido.

### Interpretação

- throughput estável indica fluxo saudável
- grandes variações indicam instabilidade no sistema

---

## Work In Progress (WIP)

### Descrição

O `Work In Progress` representa a quantidade de tarefas em andamento em cada etapa do fluxo.

### Objetivo

Controlar o volume de trabalho ativo e evitar sobrecarga.

### Como acompanhar

Quantidade de tarefas em etapas como `In Progress`, `Code Review` e `QA`.

### Interpretação

- WIP alto indica excesso de multitarefa
- acúmulo em uma etapa indica possível gargalo

---

## Taxa de bloqueios

### Descrição

Mede a quantidade de tarefas que enfrentam bloqueios durante o fluxo.

### Objetivo

Identificar impedimentos recorrentes.

### Como acompanhar

Número de tarefas sinalizadas como bloqueadas em um período.

### Interpretação

- alta taxa de bloqueios indica problemas estruturais
- bloqueios frequentes em uma mesma etapa indicam gargalo específico

---

## Tempo por etapa

### Descrição

Mede quanto tempo as tarefas permanecem em cada etapa do fluxo.

### Objetivo

Identificar gargalos específicos dentro do sistema.

### Como acompanhar

Tempo médio em:

- `Code Review`
- `QA`
- `Stakeholder Review`

### Interpretação

- etapas com maior tempo indicam pontos de atenção
- permite otimização direcionada

---

## Taxa de retrabalho

### Descrição

Mede quantas tarefas retornam para etapas anteriores do fluxo.

### Objetivo

Avaliar qualidade da execução e alinhamento entre áreas.

### Como acompanhar

Número de tarefas que retornam de:

- `Code Review`
- `QA`
- `Stakeholder Review`

### Interpretação

- alta taxa indica falhas de qualidade ou alinhamento
- pode indicar necessidade de melhoria na definição de tarefas

---

## Distribuição por tipo de demanda

### Descrição

Analisa a quantidade de tarefas por track: `Operações`, `Projetos`, `Débito Técnico` e `Comercial`.

### Objetivo

Entender onde o time está concentrando esforço.
