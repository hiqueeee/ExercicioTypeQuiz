# Projeto: Sistema de Perguntas e Respostas — Conexão TypeScript com PostgreSQL

Olá, professor!

Este projeto foi desenvolvido com o objetivo de cadastrar e executar perguntas com pontuação, registrando também o nome e a pontuação total dos usuários.
A aplicação utiliza Node.js com TypeScript e se conecta a um banco de dados PostgreSQL, permitindo cadastrar e responder perguntas diretamente pelo terminal.

## 📚 Descrição do Projeto

Este projeto demonstra como uma aplicação em TypeScript (Node.js) se conecta a um banco PostgreSQL e realiza cadastro e execução de perguntas com pontuação.
A proposta é simples e voltada para a prática em sala de aula:

Conectar ao banco PostgreSQL.

Cadastrar perguntas e suas alternativas diretamente pelo terminal.

Executar um quiz interativo com pontuação.

Registrar o nome e a pontuação final do usuário.

Encerrar a conexão de forma segura.

## ⚠️ Importante sobre o cadastro das perguntas

Ao cadastrar uma nova pergunta, as alternativas (A, B, C e D) devem ser digitadas dentro do campo da pergunta.
Exemplo:

Digite a pergunta:
Qual é a capital da França?
A) Roma  B) Paris  C) Londres  D) Berlim

Digite a alternativa correta (A/B/C/D): B
Digite a pontuação dessa questão: 10


Assim, todas as opções ficam armazenadas juntas no enunciado, mantendo o banco simples.

## 🗂️ Estrutura do projeto
``` ExercicioBancoDeDados/
│
├── dist/
│   └── ExercicioBancoDeDados.js   # Código compilado
│
├── node_modules/
├── ExercicioBancoDeDados.ts       # Código principal em TypeScript
├── package.json
├── tsconfig.json
└── README.md

## ⚙️ Pré-requisitos

Node.js (versão 18 ou superior)

npm (gerenciador de pacotes)

PostgreSQL (instalado localmente ou via Docker)

pgAdmin (opcional, para visualizar os dados)

## 🐘 Banco de Dados

### Banco utilizado:

Database: db_profedu
User: aluno
Password: 102030
Host: localhost
Port: 5432


### Criação das tabelas:

``` CREATE TABLE IF NOT EXISTS perguntas (
    id SERIAL PRIMARY KEY,
    enunciado TEXT NOT NULL,
    alternativa_correta CHAR(1) NOT NULL,
    pontos INT NOT NULL
);

``` CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    pontuacao_total INT DEFAULT 0
);

## 🧰 Execução do projeto

### 1️⃣ Instalar dependências

npm install


### 2️⃣ Compilar o TypeScript

npm run build


### 3️⃣ Executar o programa

npm start


### 4️⃣ Usar o menu

=== SISTEMA DE QUIZ ===
1 - Cadastrar pergunta
2 - Jogar
3 - Sair


Escolha a opção e siga as instruções no terminal.

## 🔎 Consultar dados no banco

Ver perguntas:

SELECT * FROM perguntas;


Ver jogadores:

SELECT * FROM usuarios;


Ou no terminal PostgreSQL:

``` psql -U aluno -d db_profedu
\dt
SELECT * FROM perguntas;
SELECT * FROM usuarios;

## 🔐 Aviso de Segurança

Em aula é aceitável incluir credenciais no código, mas em projetos reais isso é inseguro.
Use variáveis de ambiente com dotenv em produção.

Exemplo didático (hardcoded):

const pool = new Pool({
  user: 'aluno',
  host: 'localhost',
  database: 'db_profedu',
  password: '102030',
  port: 5432,
});

## ✅ Conclusão

O Sistema de Perguntas e Respostas demonstra como integrar TypeScript e PostgreSQL para criar um quiz interativo via terminal.

Serve como prática para manipulação de dados, lógica de aplicação e integração de banco de dados em ambiente educacional.


