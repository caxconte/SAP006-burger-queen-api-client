<h1 align="center" id="topo">
  <img align="center" src="./public/Logo.png" height="150px">
</h1>

# AstroBurger
## _Projeto realizado durante o bootcamp da [<Laboratória>](https://github.com/Laboratoria)_

O desafio *Burguer Queen* proposto pela Laboratória, é de desenvolver uma interface para auxiliar funcionários do salão (garçons e garçonetes) e da cozinha (chefs) a registrarem e prepararem os pedidos de maneira eficiente.

_*Considerações Gerais:*_
- Manter a interface e o estado sincronizados com React
- Ser um SPA (Single Page App)
- Ser responsivo em *tablets*
- Definir a estrutura de pastas e arquivos
- Usar JavaScript (ES6+) para a lógica do projeto

> Status do Projeto: Concluído :heavy_check_mark:

![GitHub repo size](https://img.shields.io/github/repo-size/caxconte/SAP006-burger-queen-api-client?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/caxconte/SAP006-burger-queen-api-client?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/caxconte/SAP006-burger-queen-api-client?style=for-the-badge)

<h4> Você pode acessar a aplicação <a href="http://astroburger.vercel.app/">clicando aqui</a> e utilizar um dos logins de teste abaixo:</h4>

<div align='center'>


|             Salão            	|           Cozinha           	|
|:----------------------------:	|:---------------------------:	|
|   salao@astroburger.com.br 	  |     chef@astroburger.com.br   |
|            123456            	|            123456           	|

</div>

---

## Índice

- [1. Apresentação do Problema](#1-apresentação-do-problema)
  - [1.1. 1ª História de Usuário](#11-primeira-história-de-usuário)
  - [1.2. 2ª História de Usuário](#12-segunda-história-de-usuário)
  - [1.3. 3ª História de Usuário](#13-terceira-história-de-usuário)
  - [1.4. 4ª História de Usuário](#14-quarta-história-de-usuário)
- [2. Identificação Visual da Marca](#2-identificação-visual-da-marca)
- [3. Planejamento](#3-planejamento)
- [4. Teste de Usabilidade](#4-teste-de-usabilidade)
- [5. Ferramentas Utilizadas](#5-ferramentas-utilizadas)
  - [5.1. Código](#51-código)
  - [5.2. Dados e API](#52-dados-e-api)
  - [5.3. Protótipos e Tratamento de Imagens](#53-protótipos-e-tratamento-de-imagens)
  - [5.4. Planejamento](#54-planejamento)
- [6. Considerações Finais](#6-considerações-finais)
- [7. Desenvolvedoras](#7-desenvolvedoras)

---

## 1. Apresentação do Problema

O cliente é uma hamburgueria chamada AstroBurger e pediu um sistema que funcionasse bem em tablets e que o ajudasse a otimizar o atendimento e preparo os pedidos.

Para melhor estruturar o projeto, o _Product Owner_ nos apresentou quatro histórias de usuário:

### 1.1. Primeira História de Usuário
> Garçom/Garçonete deve poder entrar no sistema, caso já tenha usuário criado, ou criar um novo usuário.*
Eu, como garçom/garçonete quero entrar no sistema de pedidos.

*Critérios de aceitação*
O que deve acontecer para satisfazer as necessidades do usuário?

- Acessar uma tela de login.
- Inserir email e senha.
- Receber mensagens de erros compreensíveis, conforme o erro e as informações inseridas.
- Entrar no sistema de pedidos caso as credenciais forem corretas.
- Definição de pronto

*O acordado abaixo deve acontecer para dizer que a história está terminada:*
Você deve ter recebido code review de pelo menos uma parceira.
Fez testes unitários e, além disso, testou seu produto manualmente.
Você fez testes de usabilidade e incorporou o feedback do usuário.
Você deu deploy de seu aplicativo e marcou sua versão (tag git).

### 1.2. Segunda História de Usuário
> Garçom/Garçonete deve ser capaz de anotar o pedido do cliente
Eu como garçom/garçonete quero poder anotar o pedido de um cliente para não depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a cozinha para serem preparados em ordem.

*Critérios de aceitação*
O que deve acontecer para satisfazer as necessidades do usuário?

- Anotar o nome do cliente.
- Adicionar produtos aos pedidos.
- Excluir produtos.
- Ver resumo e o total da compra.
- Enviar o pedido para a cozinha (guardar em algum banco de dados).
- Funcionar bem em um tablet.

*Definição de pronto*
O acordado abaixo deve acontecer para dizer que a história está terminada:

Você deve ter recebido code review de pelo menos uma parceira.
Fez testes unitários e, além disso, testou seu produto manualmente.
Você fez testes de usabilidade e incorporou o feedback do usuário.
Você deu deploy de seu aplicativo e marcou sua versão (tag git).

### 1.3. Terceira História de Usuário
> Chefe de cozinha deve ver os pedidos
Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.

*Critérios de aceitação*
- Ver os pedidos ordenados à medida em que são feitos.
- Marcar os pedidos que foram preparados e estão prontos para serem servidos.
- Ver o tempo que levou para preparar o pedido deSAP006-burger-queen-api-clientsde que chegou, até ser marcado como concluído.

*Definição de pronto*
Você deve ter recebido code review de pelo menos uma parceira.
Fez testes unitários e, além disso, testou seu produto manualmente.
Você fez testes de usabilidade e incorporou o feedback do usuário.
Você deu deploy de seu aplicativo e marcou sua versão (tag git).

### 1.4. Quarta História de Usuário
> Garçom/Garçonete deve ver os pedidos prontos para servir
Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.

*Critérios de aceitação*
- Ver a lista de pedidos prontos para servir.
- Marcar os pedidos que foram entregues.

*Definição de pronto*
Você deve ter recebido code review de pelo menos uma parceira.
Fez testes unitários e, além disso, testou seu produto manualmente.
Você fez testes de usabilidade e incorporou o feedback do usuário.
Você deu deploy de seu aplicativo e marcou sua versão (tag git).
Os dados devem ser mantidos intactos, mesmo depois que um pedido for finalizado. Tudo isso para poder ter estatísticas no futuro.

<p align="right">
  <a href="#topo">
  ⬆ Voltar ao topo
 </a>
</p>

---

# 2. Identificação Visual da Marca

A paleta de cores foi escolhida pra que a aplicação seja confortável para visualização prolongada, remetendo ao sol, nosso astro principal e trazendo cores que lembram os essenciais de toda hamburgeria: ketchup, mostarda e gergelim.

![Paleta de Cores](./public/img/cores.png)

De acordo com a primeira história de usuário, desenhamos um protótipo de alta fidelidade das telas de login e cadastro.
![Telas de Login e Cadastro](./public/img/initial-screen.png)

Seguindo as histórias de usuário, pudemos prototipar também as telas de novo pedido e cozinha.
![Tela de Novo Pedido e Cozinha](./public/img/main-screen.png)

<p align="right">
  <a href="#topo">
  ⬆ Voltar ao topo
 </a>
</p>

---

# 3. Planejamento

Desde o primeiro contato com a proposta, o planejamento foi ponto principal. Optamos por utilizar a ferramenta [Projects](https://github.com/caxconte/SAP006-burger-queen-api-client/projects/1) do github pra estruturar nosso board de planejamento, com o template de Kanban automatizado.



<p align="right">
  <a href="#topo">
  ⬆ Voltar ao topo
 </a>
</p>

---

# 4. Teste de Usabilidade

Após o término da primeira história, fizemos o primeiro teste de usabilidade. Eles foram realizados de forma rápida, prática e informal através do link do deploy no Vercel. Foram sugeridas algumas mudanças, das quais priorizamos:

- Aumento do tamanhos dos botões;
- Deixar os botões ativos;
- Erro de rota privada ao tentar fazer cadastro;

<p align="right">
  <a href="#topo">
  ⬆ Voltar ao topo
 </a>
</p>

---

# 5. Ferramentas Utilizadas

### 5.1 Código

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)


### 5.2 Dados e API

![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

### 5.3 Protótipos e Tratamento de Imagens
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)


### 5.4 Planejamento

![GitHub Projects](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) Projects

<p align="right">
  <a href="#topo">
  ⬆ Voltar ao topo
 </a>
</p>

---

# 6. Considerações Finais

Você também pode testar e manipular nosso projeto localmente, basta seguir os seguintes passos:

> 1 - Clone o repositório da nossa página GitHub

(SSH):
js ('*.js')  

`$ git clone git@github.com:caxconte/SAP006-burger-queen-api-client.git`


> 2 - Assegure-se de ter instalado o [Node.JS](https://nodejs.org/en/)

> 3 - Instale e inicie o [NPM](https://www.npmjs.com/get-npm)

`$ npm install`

`$ npm start`

---

# 7. Desenvolvedoras

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<div align="center">
  <table>
    <thead>
      <tr>
        <th align="center">Camila Conte</th>
        <th align="center">Taiene Yamazaki</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="center">
          <a href="#">
            <img src="https://avatars.githubusercontent.com/u/83038134?v=4" width="100px;" alt="Foto da Camila Conte no GitHub"/><br>
          </a>
        </td>
        <td align="center">
          <a href="#">
            <img src="https://avatars.githubusercontent.com/u/83082037?v=4" width="100px;" alt="Foto da Taiene Yamazaki"/><br>
          </a>
        </td>
      </tr>
      <tr>
        <td align="center">
          <a href="https://github.com/caxconte/">
            <img alt="GitHub - Camila" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" style="max-width: 100%;">
          </a>
          <a href="https://linkedin.com/in/caxconte/">
            <img alt="LinkedIn - Camila" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white">
          </a>
        </td>
        <td align="center">
          <a href="https://github.com/yukaum/">
            <img alt="GitHub - Taiene" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" style="max-width: 100%;">
          </a>
          <a href="https://www.linkedin.com/in/taieneyamazaki/">
            <img alt="LinkedIn - Taiene" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white">
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p align="right">
  <a href="#topo">
  ⬆ Voltar ao topo
 </a>
</p>
