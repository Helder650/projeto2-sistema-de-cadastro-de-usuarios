const prompt = require("prompt-sync")()
const Usuario = require("./class/Usuario")

while (true) {
  const nome = prompt("Digite o nome do Usuário: ")
  const idade = parseInt(prompt("Digite a idade do Usuário: "))
  const email = prompt("Digite o email do Usuário: ")
  const ativo = prompt("Usuário ativo? S/N ")

  if (ativo !== "S" && ativo !== "N") {
    console.log("Dado incorreto, saindo do sistema!")
    break
  }

  const usuario = new Usuario(nome, idade, email)
  usuario.ativo = ativo === "S"

  console.log(usuario.boasVindas)
  usuario.mostrarDados()
  console.log("==========================")

  Usuario.contarUsuarios()
}
