function criarListaAlunos() {
    // Cria um array para armazenar os alunos
    let alunos = [];
  
    // Solicita ao usuário que insira os dados de cada aluno
    for (let i = 0; i < 5; i++) {
      let nome = prompt("Insira o nome do aluno:");
      let nota1 = parseInt(prompt("Insira a nota da primeira prova:"));
      let nota2 = parseInt(prompt("Insira a nota da segunda prova:"));
  
      // Cria um objeto para armazenar os dados do aluno
      let aluno = {
        nome: nome,
        nota1: nota1,
        nota2: nota2,
      };
  
      // Adiciona o aluno à lista
      alunos.push(aluno);
    }
  
    return alunos;
  }
  
  function calcularMediaAlunos(alunos) {
    // Para cada aluno na lista
    for (let aluno of alunos) {
      // Calcula a média das notas do aluno
      let media = (aluno.nota1 + aluno.nota2) / 2;
  
      // Verifica se o aluno foi aprovado
      let aprovado = media >= 7;
  
      // Exibe uma mensagem na tela
      if (aprovado) {
        alert(`Parabéns, ${aluno.nome}! Você foi aprovado no concurso.`);
      } else {
        alert(`Não foi dessa vez, ${aluno.nome}. Favor tentar novamente.`);
      }
    }
  }
  
  // Cria a lista de alunos
  let alunos = criarListaAlunos();
  
  // Calcula a média das notas dos alunos
  calcularMediaAlunos(alunos);
