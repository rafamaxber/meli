# Teste Mercado Livre

Foram utilizadas as seguintes tecnologias, Front End construído com `React` e como plataforma de SSR `Next` para o desenvolvimento do css utilizei o styled-jsx no Back-End utilizei o `Express` e `Axios` para consumir a Api do Mercado Livre.

### Começar
Para rodar o projeto é necessário realizar o git clone da aplicação e com o terminal acessar a pasta `meli` e instalar a dependência `concurrently` que deve acelerar o processo de instalação de dependências e teste do projeto.

Instalar o `concurrently`
`npm install`

Instalar todas as dependências do projeto
`npm install:apps`

Subir projeto de front-end e back-end para teste/desenvolvimento
`npm start`

Visando prover escalabilidade em ambiente de produção criei um arquivo simples para cluster, para gerar os clusters é necessário acessar `meli/server` e com o comando:
`npm run cluster`

Para gerar o build do front-end para produção é necessário acessar `meli/client` na máquina e com os comandos:
`npm run build`
`npm start`

Rafael Bernardo
Front End Engineer
Email: rafamaxber@gmail.com
