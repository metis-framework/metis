# METIS Framework

> **Inteligência Adaptativa para pequenas e médias equipes.**

O **METIS** é um framework de gestão adaptativa projetado especificamente para equipes pequenas e times de sustentação que operam em cenários de alta imprevisibilidade. Inspirado na sabedoria prática e na astúcia da deusa grega Metis, este framework oferece ferramentas modulares para transformar o caos operacional em um fluxo de trabalho sustentável e eficiente.

---

## Por que o METIS?

Muitas equipes tentam forçar metodologias rígidas como o Scrum em contextos onde as demandas não são previsíveis. O METIS resolve isso oferecendo uma abordagem "Documentation-First" e orientada a fluxo, focada em:

- **Autonomia Progressiva:** Menos dependência de Tech Leads e mais decisões distribuídas.
- **Redução de Cerimônias:** Foco no que gera valor, eliminando reuniões desnecessárias.
- **Contextualização:** Separação clara entre projetos, bugs e operações.

---

## Metodologias Core

O framework é composto por módulos independentes que podem ser combinados conforme a necessidade do time:

### Adaptive Flow System (AFS)
Focado no desenvolvimento contínuo e na organização de múltiplos contextos simultâneos.
- **Destaque:** Separação de trabalho por *Tracks* e validação distinta entre Técnico (Done) e Negócio (Closed).
- [Ver Documentação do AFS](./docs/metodologias/afs/index.md)

### Priority Response Protocol (PRP)
Um protocolo de ação rápida para gerenciar crises, bugs críticos e demandas "atropelantes".
- **Destaque:** Alocação dinâmica de recursos e ritos de resolução acelerada.
- [Ver Documentação do PRP](./docs/metodologias/prp/index.md)

---

## Documentação

Nossa documentação oficial é construída com **VitePress** e pode ser rodada localmente:

```bash ```
# Clone o repositório
git clone [https://github.com/metis-framework/metis.git](https://github.com/metis-framework/metis.git)

# Entre na pasta da documentação
cd docs

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run docs:dev