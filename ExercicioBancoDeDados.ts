
//Alexandre Comparone           RA: 2500621
//Arthur lima bezerra           RA: 2500315
//Henrique Rossi                RA: 2511641
//Henrique Bernardo Stela       RA: 2502079
//Matheus Bolsanello Marangon   RA: 2509468


import { Pool } from "pg";
import readlineSync from "readline-sync";

const pool = new Pool({
  user: "aluno",
  host: "localhost",
  database: "db_profedu",
  password: "102030",
  port: 5432,
});

async function cadastrarPergunta(): Promise<void> {
  const enunciado = readlineSync.question("Digite a pergunta: ");
  const correta = readlineSync
    .question("Digite a alternativa correta (A/B/C/D): ")
    .toUpperCase();
  const pontos = readlineSync.questionInt("Digite a pontuação dessa questão: ");

  await pool.query(
    `INSERT INTO perguntas (enunciado, alternativa_correta, pontos) VALUES ($1, $2, $3)`,
    [enunciado, correta, pontos]
  );

  console.log("\nPergunta cadastrada com sucesso!");
}

async function jogarQuiz(): Promise<void> {
  const nome = readlineSync.question("Digite seu nome: ");
  let total = 0;

  const perguntas = (await pool.query("SELECT * FROM perguntas")).rows;

  for (const p of perguntas) {
    console.log(`\n${p.enunciado}`);
    const resposta = readlineSync
      .question("Sua resposta (A/B/C/D): ")
      .toUpperCase();

    if (resposta === p.alternativa_correta) {
      console.log("✅ Correto!");
      total += p.pontos;
    } else {
      console.log("❌ Errado.");
    }
  }

  await pool.query(
    `INSERT INTO usuarios (nome, pontuacao_total) VALUES ($1, $2)`,
    [nome, total]
  );

  console.log(`\n${nome}, sua pontuação total foi: ${total}`);
}

async function menu(): Promise<void> {
  console.log("\n=== SISTEMA DE QUIZ ===");
  console.log("1 - Cadastrar pergunta");
  console.log("2 - Jogar");
  console.log("3 - Sair");

  const opcao = readlineSync.questionInt("Escolha uma opção: ");

  if (opcao === 1) await cadastrarPergunta();
  else if (opcao === 2) await jogarQuiz();
  else {
    console.log("Encerrando...");
    await pool.end();
    return;
  }

  await menu();
}

menu();
