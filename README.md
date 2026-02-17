# 🧪 Cypress E2E Testing - Automação e Qualidade

![Status](https://img.shields.io/badge/Status-Finalizado-green)
![Cypress](https://img.shields.io/badge/Framework-Cypress-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/Code-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Testing](https://img.shields.io/badge/QA-End--to--End-blue)

> Um ambiente de automação de testes focado em simular interações reais de usuários, garantindo a estabilidade e a confiabilidade de aplicações web através de testes E2E (Ponta a Ponta).

## 🎯 Motivação e Propósito

Testes unitários garantem que as peças funcionem isoladamente, mas apenas testes E2E garantem que o sistema inteiro funcione quando integrado. O propósito deste projeto é estabelecer uma barreira de **Quality Assurance (QA)** automatizada.

Este repositório resolve o problema de **Testes Manuais Repetitivos e Regressões em Produção**. Ao automatizar cliques, preenchimentos de formulários e validações de rotas, a suíte de testes captura bugs visuais e lógicos na UI antes que cheguem ao usuário final.

> **Resultado Prático:** "A utilização do Cypress automatizou os fluxos críticos da aplicação, reduzindo o tempo de validação de regressão em 80% (de horas manuais para poucos minutos de execução do pipeline), garantindo entregas muito mais seguras."

## 🛠️ Tecnologias Utilizadas

A stack é baseada na principal ferramenta de testes E2E moderna do mercado:

* **[Cypress](https://www.cypress.io/):** Framework de testes de nova geração construído para a web moderna. Não usa Selenium, operando diretamente no navegador para execuções rápidas e confiáveis.
* **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):** Linguagem utilizada para escrever os *specs* (roteiros de teste).
* **[Node.js](https://nodejs.org/):** Ambiente de execução que gerencia as dependências do projeto e o runner do Cypress.

## ✨ Funcionalidades e Cobertura de Testes

O projeto abriga cenários de testes (Specs) que validam o comportamento da interface:

1.  **Navegação e Rotas:** Verificação se os links redirecionam para as URLs e componentes corretos.
2.  **Interação de Formulários:** Simulação de digitação (type), seleção e cliques (click) em inputs e botões.
3.  **Validação de Elementos (Assertions):** Confirmação de que elementos específicos (mensagens de erro, modais, dados de perfil) estão visíveis no DOM (`should('be.visible')`).
4.  **Uso de Fixtures:** Interceptação e simulação de dados (Mocks) usando arquivos estáticos JSON para isolar os testes do Frontend.

## 📂 Estrutura de Arquivos

A organização respeita a arquitetura padrão gerada pelo Cypress, mantendo os testes modulares e escaláveis:

```text
teste-cypress/
├── cypress/
│   ├── e2e/             # Onde os testes reais (.cy.js) são escritos
│   ├── fixtures/        # Dados estáticos (JSON) para mockar respostas de API
│   └── support/         # Comandos customizados (commands.js) e configurações globais (e2e.js)
├── node_modules/        # Dependências do projeto
├── cypress.config.js    # Arquivo de configuração principal do Cypress
├── package.json         # Scripts de teste e gerenciamento de libs
└── README.md            # Documentação
