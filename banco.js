class Banco {
    constructor (nome, conta){
        this.nome = nome;
        this.conta = conta;
    }

    setarConta(novaConta){
        if (typeof novaConta == "string") {
            this.conta = novaConta
        }
    }
}
    let c1 = new Banco("Eduardo", "Corrente");
    let c2 = new Banco("Rafael", "Poupança");
    let c3 = new Banco("Luiz", "Corrente");
    let c4 = new Banco("Ana", "Poupança");

    c2.setarConta("Corrente");
    console.log(`${c2.nome} tem a conta do tipo ${c2.conta}`)
    
