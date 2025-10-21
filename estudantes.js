let estudantes = require("./data");

// Listar todos
function listarEstudantes() {
  console.log("\n📋 Lista de estudantes:");
  estudantes.forEach(e => {
    console.log(`${e.id}. ${e.nome} (${e.idade} anos) - ${e.email}`);
  });
}

// Buscar por ID
function buscarEstudantePorId(id) {
  return estudantes.find(e => e.id === id);
}

// Adicionar novo
function adicionarEstudante(estudante) {
  estudantes.push(estudante);
  console.log("\n✅ Estudante adicionado com sucesso!");
}

// Atualizar existente
function atualizarEstudante(id, novosDados) {
  const estudante = buscarEstudantePorId(id);
  if (!estudante) {
    console.log("❌ Estudante não encontrado!");
    return;
  }

  Object.assign(estudante, novosDados);
  console.log("✅ Dados atualizados com sucesso!");
}

// Remover
function removerEstudante(id) {
  const index = estudantes.findIndex(e => e.id === id);
  if (index === -1) {
    console.log("❌ Estudante não encontrado!");
    return;
  }

  estudantes.splice(index, 1);
  console.log("🗑️ Estudante removido com sucesso!");
}

module.exports = {
  listarEstudantes,
  buscarEstudantePorId,
  adicionarEstudante,
  atualizarEstudante,
  removerEstudante
};
