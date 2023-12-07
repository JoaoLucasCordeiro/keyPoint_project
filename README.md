# KeyPoint - Gerador de resumos de textos

O KeyPoint é uma aplicação web desenvolvida utilizando React, que permite gerar resumos de textos e artigos a partir de suas URLs. A aplicação utiliza a API Article Extractor and Summarizer do RapidAPI para gerar resumos concisos. O layout responsivo, feito com tailwind css é otimizado para dispositivos móveis, garantindo uma experiência consistente em qualquer tamanho de tela.

![logo](https://github.com/JoaoLucasCordeiro/keyPoint_project/assets/89361241/db5296de-fb15-450c-b863-2127fcedb935)


## Recursos Principais

- **Entrada de URL:** Cole a URL do texto ou artigo que deseja resumir.
- **Resumo Automático:** A API Article Extractor and Summarizer do RapidAPI é usada para gerar automaticamente um resumo do conteúdo.
- **Visualização do Resumo:** O resumo gerado é exibido na interface para uma visão geral rápida.
- **Design Responsivo:** A aplicação é projetada para funcionar perfeitamente em dispositivos móveis e desktops.
- **Estilização Atraente:** O uso do framework CSS Tailwind garante um design moderno e elegante.
- **Gestão de Estado:** O Redux é utilizado para um gerenciamento eficiente do estado global da aplicação.

## Como Usar

1. Acesse a aplicação KeyPoint através da URL: `https://keypoint.vercel.app/` (ou execute localmente).
2. Na página inicial, você verá um campo onde pode colar a URL do texto ou artigo.
3. Após colar a URL, clique no botão "Gerar Resumo".
4. Aguarde enquanto a aplicação extrai o conteúdo da URL e gera um resumo utilizando a API de Sumarização.
5. O resumo gerado será exibido na interface. Role a página para visualizar os principais pontos do texto ou artigo.
6. Para resumir outro texto, repita o processo colando uma nova URL e clicando no botão "Gerar Resumo".

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Como Instalar e Executar Localmente

1. Clone este repositório para a sua máquina.
2. Abra o terminal na pasta do projeto e execute `npm install` ou `yarn install` para instalar as dependências.
3. Crie uma conta no RapidAPI para obter a chave da API de Extração e Sumarização de Artigos.
4. Crie um arquivo `.env` na raiz do projeto e adicione:
5. Execute `npm run dev` ou `yarn dev` para iniciar o servidor de desenvolvimento.
6. Abra o navegador e acesse `http://localhost:3000` para usar o KeyPoint localmente.

## Contribuição

Contribuições são bem-vindas! Abra issues e pull requests para colaborar.

## Licença

Este projeto está licenciado sob a Licença [MIT](LICENSE). 

---



