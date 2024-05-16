/**

*** Classe que representa um "Animal".
    @constructor
    @param {Object} args - Os argumentos para criar um animal.
    @param {string} args.nome - O nome do animal.
    @param {string} args.genero - O gênero do animal. Pode ser "macho", "fêmea" ou deixado em branco.
    @param {string} args.cor - A cor do animal.
    @param {string} args.especie - A espécie do animal.
*** Subclasse de "Animal", "Ave".
    * @class
    * @extends Animal
    * @param {Boolean} args.sabeVoar - Se a ave sabe voar ou não.
    * @param {string} args.VelocidadeMaximaVoo - A velocidade máxima de voo da ave.
*** Subclasse de "Animal", "Peixe".
    * @class
    * @extends Animal
    * @param {string} args.VelocidadeMaximaDeNado - A velocidade máxima de nado do peixe.
    * @param {number} args.ProfundidadeMaxima - A profundidade máxima do peixe.
    * @param {Boolean} args.Pulmonado - Se o peixe é pulmonado ou não.
    * @param {Boolean} args.AguaDoce - Se o peixe vive em água doce ou não.
*** Subclasse de "Animal", "Mamifero".
    * @class
    * @extends Animal
    * @param {string} args.VelocidadeMaximaDeCorrida - A velocidade máxima de corrida do mamífero.
    * @param {Boolean} args.TemPelo - Se o mamífero tem pelo ou não.
    * @param {Boolean} args.SabeNadar - Se o mamífero sabe nadar ou não.
**/

class Animal {
    constructor(args) {
        // Verificação de argumentos 
            if(!args) 
                return console.error("É necessário passar um argumento")
            
            const checkGenero = args.genero.toLowerCase()
            if(checkGenero != "macho" && checkGenero != "fêmea" && checkGenero === '') 
                return console.error("Gênero inválido, informe macho ou fêmea ou deixe em branco para não informar o gênero")

        // Variáveis da classe

            this.nome = args.nome || "Nome não informado"

            this.genero = args.genero || "Gênero não informado"

            this.cor = args.cor || "Cor não informada"

            this.especie = args.especie || "Espécie não informada"
        //
    }   
}
class Ave extends Animal {
    constructor(args) {
        super(args)
        this.sabeVoar = conferirBooleano(args.sabeVoar, false)
        if(this.sabeVoar === true)
            this.VelocidadeMaximaVoo = args.VelocidadeMaximaVoo || "Não informado"
        else
            this.VelocidadeMaximaVoo = "0 km/h"
    }
}
class Peixe extends Animal{
    constructor(args){
        super(args)
        this.VelocidadeMaximaDeNado = args.VelocidadeMaximaDeNado || "Não informado"

        this.ProfundidadeMaxima = args.ProfundidadeMaxima || "Não informado"

        this.Pulmonado = conferirBooleano(args.Pulmonado, "Não informado")

        this.AguaDoce = conferirBooleano(args.AguaDoce, "Não informado")
    }
}
class Mamifero extends Animal{
    constructor(args){
        super(args)

        this.VelocidadeMaximaDeCorrida = args.VelocidadeMaximaDeCorrida || "Não informado"

        this.TemPelo = conferirBooleano(args.TemPelo, "Não informado")

        this.SabeNadar = conferirBooleano(args.SabeNadar, "Não informado")
    }
}

// Função para dimunir a repetição de ternários no código
function conferirBooleano(valor, padrao) {
    return typeof valor === "boolean" ? valor : padrao;
}


//

const mikeJaggers = new Mamifero({
    nome: "Mike Jaggers",
    genero: "macho",
    cor: "marrom",
    especie: "cachorro",
    VelocidadeMaximaDeCorrida: "30 km/h",
    TemPelo: true,
    SabeNadar: true
})

const poseidon = new Peixe({
    nome: "Poseidon",
    genero: "macho",
    cor: "azul",
    especie: "Peixe Espada Palhaço",
    VelocidadeMaximaDeNado: "50 km/h",
    ProfundidadeMaxima: "100 metros",
    Pulmonado: false,
    AguaDoce: false
})

const piuPiu = new Ave({
    nome: "Piu Piu",
    genero: "fêmea",
    cor: "amarelo",
    especie: "Canário",
    sabeVoar: true,
    VelocidadeMaximaVoo: "60 km/h"
})

console.log(mikeJaggers)
