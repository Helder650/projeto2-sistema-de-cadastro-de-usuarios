class Usuario {
    static totalUsuarios = 0
    #ativo
    constructor(nome, idade, email) {
        this.nome = nome
        this.idade = idade
        this.email = email
        this.#ativo = false
        Usuario.totalUsuarios++
    }

    get ativo() {
        return this.#ativo
    }

    set ativo(ativo) {
        this.#ativo = !!ativo
    }

    get boasVindas() {
        return `Bem-vindo, ${this.nome}!`
    }

    mostrarDados() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Email: ${this.email}`)
        console.log(`Ativo: ${this.#ativo}`)
    }

    static contarUsuarios() {
        console.log(`Total de usuários criados: ${Usuario.totalUsuarios}`)
    } 
}


module.exports = Usuario
